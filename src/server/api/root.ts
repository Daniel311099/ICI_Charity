import { postRouter } from "~/server/api/routers/post";
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { checkoutRouter } from "./routers/checkout";
import { donationsRouter } from "./routers/donations";
import { contentRouter } from "./routers/content";
import { generalRouter } from "./routers/general";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  checkout: checkoutRouter,
  donations: donationsRouter,
  content: contentRouter,
  general: generalRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
