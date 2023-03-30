import AboutComponent from "@/components/About";
import Coffee from "@/components/Coffee";
import Feedback from "@/components/Feedback";
import Layout from "@/sections/Layout";

export default function About() {
  return (
    <Layout>
      <AboutComponent />
      <Coffee />
      <Feedback />
    </Layout>
  );
}
