import type { LayoutProps } from "@/types/layout";
import { Header } from "./_components/header";
import { Footer } from "./_components/footer";

const MarketingLayout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
