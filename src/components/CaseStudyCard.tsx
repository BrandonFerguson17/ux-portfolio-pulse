import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface CaseStudyCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  className?: string;
}

export const CaseStudyCard = ({
  title,
  description,
  image,
  category,
  className,
}: CaseStudyCardProps) => {
  return (
    <Link to="/case-study" className="block">
      <div
        className={cn(
          "group relative overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-xl",
          className
        )}
      >
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <span className="text-xs font-medium uppercase tracking-wider">{category}</span>
          <h3 className="text-xl font-bold mt-1 mb-2">{title}</h3>
          <p className="text-sm text-gray-200">{description}</p>
        </div>
      </div>
    </Link>
  );
};