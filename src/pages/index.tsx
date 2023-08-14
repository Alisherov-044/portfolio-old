import { Layout } from "@/layouts";
import { About, Hero, Specifications } from "./home";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Specifications />
      <About />
    </Layout>
  );
}
