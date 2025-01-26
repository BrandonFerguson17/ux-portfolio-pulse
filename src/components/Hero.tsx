import { AnimatedText } from "./AnimatedText";
import { Section } from "./Section";

export const Hero = () => {
  return (
    <Section className="min-h-[80vh] flex flex-col justify-center items-center text-center">
      <div className="space-y-6">
        <div className="space-y-2">
          <AnimatedText
            text="UX Designer & Developer"
            className="text-sm font-medium tracking-wider uppercase text-muted-foreground"
            delay={200}
          />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            <AnimatedText
              text="Creating Digital"
              className="block"
              delay={400}
            />
            <AnimatedText
              text="Experiences That Matter"
              className="block bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600"
              delay={600}
            />
          </h1>
        </div>
        <AnimatedText
          text="Focused on crafting intuitive and impactful user experiences"
          className="max-w-2xl mx-auto text-lg text-muted-foreground"
          delay={800}
        />
      </div>
    </Section>
  );
};