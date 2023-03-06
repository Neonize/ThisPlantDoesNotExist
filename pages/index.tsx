import CTA from "@/components/CTA";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import ImageGrid from "@/components/ImageGrid";
import Layout from "@/sections/Layout";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Features />
      <ImageGrid />
      <CTA />
    </Layout>
  );
}
