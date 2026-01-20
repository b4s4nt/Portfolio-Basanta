import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  linkText: string;
  index: number;
}

const ProjectCard = ({ title, description, image, link, linkText, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden rounded-lg border border-border bg-card"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
      </div>

      <div className="p-5">
        <h3 className="font-display text-foreground text-base mb-2 line-clamp-1">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>
        <motion.a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ x: 3 }}
          className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:text-primary/80 transition-colors"
        >
          {linkText}
          <ExternalLink size={14} />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
