import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const Section = ({ children, className, ...props }: SectionProps) => {
  return (
    <section
      className={cn("section-padding w-full mx-auto max-w-7xl", className)}
      {...props}
    >
      {children}
    </section>
  );
};