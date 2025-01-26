import { Section } from "./Section";
import { AnimatedText } from "./AnimatedText";
import { Button } from "./ui/button";
import { FileText, Mail } from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useToast } from "./ui/use-toast";

export const AboutMe = () => {
  const { toast } = useToast();

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const message = formData.get('message');
    
    // In a real application, you would send this to your backend
    console.log('Contact form submitted:', { email, message });
    
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    (e.target as HTMLFormElement).reset();
  };

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
              <Button 
                variant="outline" 
                className="w-full h-full flex flex-col items-center justify-center gap-2"
                onClick={() => window.open('/path-to-your-resume.pdf', '_blank')}
              >
                <FileText className="h-5 w-5" />
                <span>View Resume</span>
              </Button>
            </div>
          </div>
          <div className="mt-8 glass-card p-6 rounded-lg">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Contact Me
            </h3>
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <textarea
                  id="message"
                  name="message"
                  className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px]"
                  placeholder="Your message..."
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
};