"use client";

import { useRouter } from "next/navigation";
import { CourseCard } from "./course-card";
import type { CoursesListProps } from "@/types/courses";
import { useTransition } from "react";
import { upsertUserProgress } from "@/server/actions/user-progress";
import { toast } from "sonner";

export const CourseList = ({ courses, activeCourseId }: CoursesListProps) => {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const onClick = (id: number) => {
    if (pending) return;

    if (id === activeCourseId) {
      return router.push("/learn");
    }

    startTransition(() => {
      upsertUserProgress(id).catch(() => toast.error("Something went wrong"));
    });
  };

  return (
    <div className="grid grid-cols-2 gap-4 pt-6 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))]">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          {...course}
          onClick={onClick}
          disabled={pending}
          active={course.id === activeCourseId}
        />
      ))}
    </div>
  );
};
