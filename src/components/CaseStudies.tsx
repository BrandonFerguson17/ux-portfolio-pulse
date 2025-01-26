import { Section } from "./Section";
import { CaseStudyCard } from "./CaseStudyCard";
import { AnimatedText } from "./AnimatedText";

export const CaseStudies = () => {
  const caseStudies = [
    {
      title: "E-commerce Redesign",
      description: "Improving user experience and conversion rates through intuitive design",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      category: "UX Design",
    },
    {
      title: "Banking App",
      description: "Creating a seamless mobile banking experience for millennials",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2340&auto=format&fit=crop",
      category: "Mobile App",
    },
    {
      title: "Healthcare Platform",
      description: "Designing accessible healthcare solutions for remote patients",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2340&auto=format&fit=crop",
      category: "Web Platform",
    },
  ];

  return (
    <Section>
      <div className="space-y-12">
        <div className="text-center max-w-3xl mx-auto">
          <AnimatedText
            text="Case Studies"
            className="text-sm font-medium tracking-wider uppercase text-muted-foreground mb-2"
          />
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Selected Works
          </h2>
          <p className="text-muted-foreground">
            Explore some of my recent projects where I've helped businesses solve
            complex problems through thoughtful user experience design.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={index} {...study} />
          ))}
        </div>
      </div>
    </Section>
  );
};