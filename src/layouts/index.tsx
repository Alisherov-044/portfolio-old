import { Section } from "./section";
import { Header } from "./header";
import { Footer } from "./footer";
import { Sen } from "next/font/google";
import { LayoutInterface } from "@/utils/types";
import { ProgressBar } from "@/components";

const sen = Sen({
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
});

function Layout({ children }: LayoutInterface) {
  return (
    <div id="root" className={sen.className}>
      <ProgressBar />
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
}

export { Layout, Section };
