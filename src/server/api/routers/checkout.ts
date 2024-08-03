import { z } from "zod";
import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
} from "~/server/api/trpc";
import { stripe } from '~/server/stripe'


export const checkoutRouter = createTRPCRouter({
    createOneTimeCheckoutSession: protectedProcedure
        .input(z.object({
            amount: z.number(),
            currency: z.string(),
            // frequency: z.string(),
            anonymous: z.boolean(),
            message: z.string(),
        }))
        .mutation(async ({ input, ctx }) => {
            console.log("Public")
            const { amount, currency, anonymous, message } = input;
            const userId = ctx.session?.user?.id || null;
            if (userId) {
                console.log("Fetching name...")
                const name = await ctx.db.user.findFirst({
                    where: { id: userId }
                })
                console.log("Name is :" + name?.name)
            }

            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items: [
                    {
                        price_data: {
                            currency,
                            product_data: {
                                name: `Donation -  ${anonymous ? '(Anonymous)' : ''}`,
                            },
                            unit_amount: amount * 100, // Stripe expects the amount in cents
                        },
                        quantity: 1,
                    },
                ],
                mode: 'payment',
                success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
                cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
                metadata: {
                    userId,
                    anonymous: anonymous.toString(),
                    message: message || '',
                },
            });

            return { id: session.id, url: session.url };
        }),
        createAnonOneTimeCheckoutSession: publicProcedure
        .input(z.object({
            amount: z.number(),
            currency: z.string(),
            // frequency: z.string(),
            anonymous: z.boolean(),
            message: z.string(),
        }))
        .mutation(async ({ input, ctx }) => {
            const { amount, currency, anonymous, message } = input;
            const userId = ctx.session?.user?.id || null;
            if (userId) {
                console.log("Fetching name...")
                const name = await ctx.db.user.findFirst({
                    where: { id: userId }
                })
                console.log("Name is :" + name?.name)
            }

            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items: [
                    {
                        price_data: {
                            currency,
                            product_data: {
                                name: `Donation -  ${anonymous ? '(Anonymous)' : ''}`,
                            },
                            unit_amount: amount * 100, // Stripe expects the amount in cents
                        },
                        quantity: 1,
                    },
                ],
                mode: 'payment',
                success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
                cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
                metadata: {
                    userId,
                    anonymous: anonymous.toString(),
                    message: message || '',
                },
            });

            return { id: session.id, url: session.url };
        }),
    createSubscriptionCheckoutSession: protectedProcedure
        .input(z.object({
            amount: z.number(),
            currency: z.string(),
            frequency: z.enum(['monthly', 'yearly']),
            anonymous: z.boolean(),
            message: z.string(),
        }))
        .mutation(async ({ input, ctx }) => {
            const { amount, currency, frequency, anonymous, message } = input;
            const userId = ctx.session?.user?.id || null;

            if (userId) {
                console.log("Fetching name...");
                const name = await ctx.db.user.findFirst({
                    where: { id: userId }
                });
                console.log("Name is :" + name?.name);
            }

            const product = await stripe.products.create({
                name: `Donation Subscription - ${frequency} ${anonymous ? '(Anonymous)' : ''}`,
            });

            const price = await stripe.prices.create({
                unit_amount: amount * 100, // Stripe expects the amount in cents
                currency,
                recurring: {
                    interval: frequency === "monthly" ? "month" : "year",
                },
                product: product.id,
            });

            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items: [
                    {
                        price: price.id,
                        quantity: 1,
                    },
                ],
                mode: 'subscription',
                success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
                cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
                metadata: {
                    userId,
                    anonymous: anonymous.toString(),
                    frequency,
                    message: message || '',
                },
            });

            return { id: session.id, url: session.url };
        }),
});



