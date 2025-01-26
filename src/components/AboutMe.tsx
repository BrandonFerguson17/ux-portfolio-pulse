import { Section } from "./Section";
import { AnimatedText } from "./AnimatedText";

export const AboutMe = () => {
  return (
    <Section className="bg-secondary/50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-square overflow-hidden rounded-2xl">
          <img
            src="/lovable-uploads/0fbb50c9-3730-47d9-8ccb-ad23b07520dc.png"
            alt="Profile"
            className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="space-y-6">
          <div>
            <AnimatedText
              text="About Me"
              className="text-sm font-medium tracking-wider uppercase text-muted-foreground mb-2"
            />
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Passionate about solving user and business challenges through strategic design solutions
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              I'm a UX designer dedicated to crafting thoughtful digital experiences that bridge user needs and business goals. With a strategic mindset and a passion for solving complex problems, I focus on creating intuitive designs that drive user engagement and deliver measurable results. I believe in the power of user-centered design to transform ideas into impactful solutions.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-card p-4 rounded-lg">
              <h3 className="font-semibold mb-1">Experience</h3>
              <p className="text-sm text-muted-foreground">5+ Years</p>
            </div>
            <div className="glass-card p-4 rounded-lg">
              <h3 className="font-semibold mb-1">Projects</h3>
              <p className="text-sm text-muted-foreground">50+ Completed</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};