import { Layout } from "@/layouts";
import {
  About,
  Brands,
  Contact,
  Hero,
  Projects,
  Skills,
  Specifications,
} from "@/sections/home";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Specifications />
      <About />
      <Skills />
      <Brands />
      <Projects />
      <Contact />
    </Layout>
  );
}
