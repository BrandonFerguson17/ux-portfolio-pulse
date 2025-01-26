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
              Passionate About Creating Meaningful Digital Solutions
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              I'm a UX designer and developer focused on creating digital experiences
              that combine beautiful design with excellent functionality. With a keen
              eye for detail and a user-centered approach, I strive to make every
              interaction meaningful and delightful.
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