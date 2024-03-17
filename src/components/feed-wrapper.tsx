import type { LayoutProps } from "@/types/layout";

export const FeedWrapper = ({ children }: LayoutProps) => {
  return <div className="relative top-0 flex-1 pb-10">{children}</div>;
};
