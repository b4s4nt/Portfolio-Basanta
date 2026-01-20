import { motion } from "framer-motion";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Building2, GraduationCap, Rocket, Heart } from "lucide-react";

import ukVisaImg from "@/assets/project-ukvisaexpert.jpg";
import rosterImg from "@/assets/project-roster.jpg";
import nutritionImg from "@/assets/project-nutrition.jpg";
import splitImg from "@/assets/project-split.jpg";
import chatImg from "@/assets/project-chat.jpg";
import trafficImg from "@/assets/project-traffic.jpg";
import accordImg from "@/assets/project-accord.jpg";
import formImg from "@/assets/project-form.jpg";

type ProjectCategory = "all" | "college" | "personal" | "company" | "volunteer";

const projectCategories = [
  { id: "all" as const, label: "All Projects", icon: Rocket },
  { id: "college" as const, label: "College Projects", icon: GraduationCap },
  { id: "personal" as const, label: "Personal Projects", icon: Rocket },
  { id: "company" as const, label: "Company Projects", icon: Building2 },
  { id: "volunteer" as const, label: "Volunteer Work", icon: Heart },
];

const allProjects = [
  // Company Projects
  {
    title: "Website for UK Visa Expert",
    description: "Designed, built & developing the customer management website for UK Visa Expert Consultancy.",
    image: ukVisaImg,
    link: "http://www.ukvisaexpert.co.uk/index.php",
    linkText: "Visit Site",
    category: "company" as const,
  },
  {
    title: "Enterprise CRM System",
    description: "Built a comprehensive CRM system handling 10,000+ customers with real-time analytics dashboard.",
    image: formImg,
    link: "#",
    linkText: "View Details",
    category: "company" as const,
  },
  {
    title: "E-Commerce Platform",
    description: "Developed a scalable e-commerce platform with payment integration and inventory management.",
    image: accordImg,
    link: "#",
    linkText: "View Details",
    category: "company" as const,
  },
  // College Projects
  {
    title: "Java Socket Programming - Chat Server",
    description: "User can send message from client1 to client2 and vice versa using JavaFX. Final year project.",
    image: chatImg,
    link: "https://github.com/b4s4nt/Chat-Server",
    linkText: "View on Github",
    category: "college" as const,
  },
  {
    title: "JavaFX & Multithread - Traffic Light",
    description: "Traffic light simulator program with different Traffic light signal implementations for OS course.",
    image: trafficImg,
    link: "https://github.com/b4s4nt/TrafficLightSimulation",
    linkText: "View on Github",
    category: "college" as const,
  },
  {
    title: "Database Management System",
    description: "Designed and implemented a library management system using MySQL and Java JDBC.",
    image: formImg,
    link: "#",
    linkText: "View Details",
    category: "college" as const,
  },
  // Personal Projects
  {
    title: "Android App - Roster",
    description: "Employees and Roster management android app, designed and developing for a Restaurant.",
    image: rosterImg,
    link: "https://github.com/b4s4nt/AndroidRoster",
    linkText: "View on Github",
    category: "personal" as const,
  },
  {
    title: "Android App - FoodToNutrition",
    description: "Designed and Developed to Manage and track the nutrition value required for a person.",
    image: nutritionImg,
    link: "https://github.com/b4s4nt/FoodToNutrition",
    linkText: "View on Github",
    category: "personal" as const,
  },
  {
    title: "Android App - Split Expenses",
    description: "Manage expenses of a group of people while living in sharing or outing in a group.",
    image: splitImg,
    link: "https://github.com/b4s4nt/Split0.1",
    linkText: "View on Github",
    category: "personal" as const,
  },
  // Volunteer Projects
  {
    title: "Website ACCORD",
    description: "Involvement in Creating Dashboard, Design Card for the ACCORD project.",
    image: accordImg,
    link: "http://acord.software/",
    linkText: "Visit Site",
    category: "volunteer" as const,
  },
  {
    title: "Form with PHP Mailer",
    description: "Company website under development with PHP Mailer integration.",
    image: formImg,
    link: "http://www.t-techcompany.com/",
    linkText: "Visit Site",
    category: "volunteer" as const,
  },
];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  const filteredProjects = activeCategory === "all" 
    ? allProjects 
    : allProjects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Rocket className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-display text-foreground">
              Projects Portfolio
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            A collection of my work across different stages of my career
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {projectCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category.id
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {category.label}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Project Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {[
            { label: "Total Projects", value: allProjects.length, color: "text-primary" },
            { label: "College", value: allProjects.filter(p => p.category === "college").length, color: "text-primary" },
            { label: "Personal", value: allProjects.filter(p => p.category === "personal").length, color: "text-primary" },
            { label: "Company", value: allProjects.filter(p => p.category === "company").length, color: "text-primary" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect p-4 rounded-xl border border-border text-center"
            >
              <div className={`text-3xl font-display ${stat.color}`}>{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.05 }}
            >
              <ProjectCard {...project} index={index} />
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-muted-foreground py-12"
          >
            No projects found in this category.
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
