import type { challengeOptions, challenges } from "@/server/db/schema";

export type LessonButtonProps = {
  id: number;
  index: number;
  totalCount: number;
  locked?: boolean;
  current?: boolean;
  percentage: number;
};

export type QuizProps = {
  initialPercentage: number;
  initialHearts: number;
  initialLessonId: number;
  initialLessonChallenges: (typeof challenges.$inferSelect & {
    completed: boolean;
    challengeOptions: (typeof challengeOptions.$inferSelect)[];
  })[];
  userSubscription: undefined; // TODO: Replace with subscription DB type
};

export type LessonHeaderProps = {
  hearts: number;
  percentage: number;
  hasActiveSubscription: boolean;
};
