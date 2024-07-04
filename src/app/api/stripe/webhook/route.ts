// src/app/api/stripe/webhook/route.ts
import { NextResponse, type NextRequest } from 'next/server';

import Stripe from 'stripe';
import { db } from '~/server/db'; // Adjust the import according to your setup
import { stripe } from '~/server/stripe'

export async function POST(req: NextRequest) {
    const rawBody = await req.text();
    const sig = req.headers.get('stripe-signature')!;

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(
            rawBody,
            sig,
            process.env.STRIPE_WEBHOOK_SECRET!
        );
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.error(`Webhook Error: ${err.message}`);
            return NextResponse.json({ error: 'Webhook Error' }, { status: 400 });
        } else {
            console.error('Webhook Error: Unknown error');
            return NextResponse.json({ error: 'Unknown Webhook Error' }, { status: 400 });
        }
    }
    console.log({ event })


    // Handle the event
    switch (event.type) {
        case 'checkout.session.completed': {
            const session = event.data.object as Stripe.Checkout.Session;
            // Save payment info to your database here
            console.log({ session })
            const metadata = session.metadata || {};
            const userId = metadata.userId || null; // or handle as needed
            const frequency = metadata.frequency || 'onetime';
            const message = metadata.message || '';
            const anonymous = metadata.anonymous !== "false"
            const amount = session.amount_total! / 100; // Stripe amount is in cents
            const currency = session.currency || 'GBP';
            const status = session.payment_status;

            // Define common data structure
            const commonData = {
                amount,
                currency,
                status,
                message,
                // userId,
                user: anonymous ? undefined : { connect: { id: userId! } }, // Use the relation to connect the user
                anonymous,
            };

            // console.log({commonData, user: commonData})

            if (frequency === 'onetime') {
                // Handle one-time donation
                await db.oneTimeDonation.create({
                    data: {
                        ...commonData,
                        stripeSessionId: session.id,
                    },
                });
            } else {
                // Handle subscription donation
                await db.subscription.create({
                    data: {
                        ...commonData,
                        frequency,
                        stripeSubscriptionId: session.subscription!.toString(), // Assuming you have the subscription ID from the session
                    },
                });
            }

            break;
            // Add other event types as needed
        }
        case 'charge.updated': {
            const charge = event.data.object as Stripe.Charge;
            console.log('Charge updated:', charge);
            // Add your logic for handling charge updates here
            break;
        }
        default:
            console.warn(`Unhandled event type ${event.type}`);
    }

    return NextResponse.json({ received: true });
}
