import { Hero } from "@/components/Hero";
import { AboutMe } from "@/components/AboutMe";
import { CaseStudies } from "@/components/CaseStudies";

const Index = () => {
  return (
    <main className="min-h-screen w-full">
      <Hero />
      <AboutMe />
      <CaseStudies />
    </main>
  );
};

export default Index;