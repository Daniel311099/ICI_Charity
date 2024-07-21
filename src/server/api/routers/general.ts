import { z } from "zod";
import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
} from "~/server/api/trpc";
import { sendContactEmail } from "~/server/mailer";
import { stripe } from '~/server/stripe'
// import { db}

export const generalRouter = createTRPCRouter({
    sendContactEmail: publicProcedure
        .input(z.object({
            name: z.string(),
            email: z.string().email(),
            message: z.string(),
        }))
        .mutation(async ({ input }) => {
            const { name, email, message } = input;
            try {
                await sendContactEmail(name, email, message);
                return { success: true };
            } catch (error) {
                console.error('Failed to send email:', error);
                throw new Error('Failed to send email');
            }
        }),
});
