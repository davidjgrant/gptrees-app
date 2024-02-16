import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import { posts } from "@/server/db/schema";

const Post = z.object({
  species: z.string(),
  health: z.string(),
  height: z.string(),
  diameter: z.string(),
  notes: z.string(),
  age: z.string(),
  coordinates: z.string(),
  illegalActivities: z.string(),
  futurePlans: z.string(),
  image: z.string().url(),
});

export const postRouter = createTRPCRouter({
  create: protectedProcedure
    .input(Post)
    .mutation(async ({ ctx, input }) => {

      const name = ctx.session.user.name

      const { ...inputFields } = input;

      await ctx.db.insert(posts).values({
        name,
        createdById: ctx.session.user.id,
        ...inputFields,
      });
    }),
  getLatest: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.posts.findFirst({
      orderBy: (posts, { desc }) => [desc(posts.createdAt)],
    });
  }),
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.db.query.posts.findMany({
      orderBy: (posts, { desc }) => [desc(posts.createdAt)],
    });
  }),
});
