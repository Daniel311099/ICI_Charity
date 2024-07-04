import Stripe from 'stripe';
import { db } from '../server/db'; // Adjust the import path as needed
import { stripe } from '~/server/stripe';


export const syncStripePayments = async () => {
    try {
        let hasMore = true;
        let startingAfter: string | undefined = undefined;
    
        while (hasMore) {
          const paymentIntents: any = await stripe.paymentIntents.list({
            limit: 100,
            starting_after: startingAfter,
          });

        //   console.log({data: paymentIntents.data})
    
          for (const intent of paymentIntents.data) {
            const metadata = intent.metadata || {};
            const userId = metadata.userId || null;
            const frequency = metadata.frequency 
            const message = metadata.message || '';
            const anonymous = metadata.anonymous !== "false";
            const amount = intent.amount! / 100; // Stripe amount is in cents
            const currency = intent.currency || 'GBP';
            const status = intent.status;

            if (!frequency) {continue}
            console.log({intent})
    
            // Check if donation already exists in the database
            const existingOneDonation = await db.oneTimeDonation.findUnique({
              where: { stripeSessionId: intent.id },
            });
            const existingSubDonation = await db.subscription.findUnique({
              where: { stripeSubscriptionId: intent.id },
            });
    
            if (!(existingOneDonation || existingSubDonation)) {
              const commonData = {
                amount,
                currency,
                status,
                message,
                anonymous,
                user: anonymous ? undefined : { connect: { id: userId } },
              };
    
              if (frequency === 'onetime') {
                // Handle one-time donation
                await db.oneTimeDonation.create({
                  data: {
                    ...commonData,
                    stripeSessionId: intent.id,
                  },
                });
              } else {
                // Handle subscription donation
                await db.subscription.create({
                  data: {
                    ...commonData,
                    frequency,
                    stripeSubscriptionId: intent.id,
                  },
                });
              }
            }
          }
    
          hasMore = paymentIntents.has_more;
          if (hasMore) {
            startingAfter = paymentIntents.data[paymentIntents.data.length - 1].id;
          }
        }
    
        console.log('Stripe payments synced successfully.');
      } catch (error) {
        console.error('Error syncing Stripe payments:', error);
      }
};

// Only run the sync when this script is run directly.
// if (require.main === module) {
syncStripePayments().catch(console.error);
// }
