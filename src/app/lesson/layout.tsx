import type { LayoutProps } from "@/types/layout";

const LessonLayout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-full flex-col">
      <div className="flex h-full w-full flex-col">{children}</div>
    </div>
  );
};

export default LessonLayout;
