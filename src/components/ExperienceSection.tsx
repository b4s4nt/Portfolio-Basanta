import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Senior Software Developer",
    company: "Tech Solutions Ltd",
    location: "London, UK",
    period: "2022 - Present",
    description: "Leading development of enterprise web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.",
    technologies: ["React", "TypeScript", "Node.js", "AWS", "PostgreSQL"],
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Digital Agency Pro",
    location: "London, UK",
    period: "2020 - 2022",
    description: "Developed and maintained multiple client projects including e-commerce platforms, CMS systems, and mobile applications.",
    technologies: ["Java", "Spring Boot", "Angular", "MySQL", "Docker"],
  },
  {
    id: 3,
    role: "Software Developer",
    company: "StartUp Innovations",
    location: "Luton, UK",
    period: "2019 - 2020",
    description: "Built MVPs and prototypes for various startup clients. Worked closely with product teams to deliver solutions on tight deadlines.",
    technologies: ["React", "Python", "Django", "MongoDB", "Redis"],
  },
  {
    id: 4,
    role: "Junior Developer",
    company: "Nepal Tech Hub",
    location: "Kathmandu, Nepal",
    period: "2016 - 2018",
    description: "Started career as a junior developer working on web and mobile applications. Gained experience in full software development lifecycle.",
    technologies: ["PHP", "Laravel", "Android", "Java", "MySQL"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 opacity-30">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-primary/40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Briefcase className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-display text-foreground">
              Professional Experience
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My career journey and professional growth
          </p>
        </motion.div>

        {/* Tree Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent rounded-full" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Content Card */}
              <div className={`w-5/12 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-effect p-6 rounded-xl border border-border glow-border"
                >
                  <h3 className="text-xl font-display text-foreground mb-1">
                    {exp.role}
                  </h3>
                  <h4 className="text-primary font-medium mb-3">{exp.company}</h4>
                  
                  <div className={`flex gap-4 mb-3 text-sm text-muted-foreground ${
                    index % 2 === 0 ? "justify-end" : "justify-start"
                  }`}>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4">
                    {exp.description}
                  </p>
                  
                  <div className={`flex flex-wrap gap-2 ${
                    index % 2 === 0 ? "justify-end" : "justify-start"
                  }`}>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Center Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                  className="w-6 h-6 rounded-full bg-primary border-4 border-background shadow-lg"
                >
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary"
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
              </div>

              {/* Empty Space for alignment */}
              <div className="w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
