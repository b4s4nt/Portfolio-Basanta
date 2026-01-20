import { motion } from "framer-motion";
import { Github, Linkedin, Building2 } from "lucide-react";

const skills = [
  ["C#", "C and C++", "Java", "Python", "PHP", "Android Studio"],
  ["HTML, CSS", "JavaScript, jQuery", "Flutter", "MySQL", "Linux"],
  ["Tadabase", ".NET", "React", "Node.js"],
];

const socialLinks = [
  {
    title: "Full Stack Developer",
    company: "BlueSky Digital Labs",
    url: "https://www.blueskylabs.com.au/",
    icon: Building2,
  },
  {
    title: "Full Stack Developer",
    company: "Powered BY Software",
    url: "https://www.poweredbysoftware.com.au/",
    icon: Building2,
  },
  {
    title: "LinkedIn",
    company: "@BasantaKandel",
    url: "https://www.linkedin.com/in/basanta-k/",
    icon: Linkedin,
  },
  {
    title: "Github",
    company: "@BasantaKandel",
    url: "https://github.com/b4s4nt?tab=repositories",
    icon: Github,
  },
];

const AboutSection = () => {
  return (
    <section id="skills" className="py-20 bg-secondary/30 border-y border-border">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* About Me */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-display text-foreground mb-6">
              More About Me
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I have a Master of Information Technology with Software Specialization
              and a Bachelor of Electronics Engineering. I am always excited about
              computer technology and more passionate about software development.
            </p>

            <div className="h-px bg-border mb-8" />

            <h3 className="text-2xl font-display text-foreground mb-6">
              Key Skills
            </h3>
            <p className="text-muted-foreground mb-6">
              Oracle certified Java Programmer with primary focus on:
            </p>

            <div className="bg-card/50 rounded-lg p-6 border border-border">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.flat().map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-sm text-muted-foreground">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.a
              href="https://drive.google.com/file/d/1PsL01tyxh1ocEmR4DUmLFzO5ftjqvYdX/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              className="inline-block mt-6 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
            >
              Download Full Resume →
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            <h2 className="text-3xl font-display text-foreground mb-4">
              Connect With Me
            </h2>
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 5 }}
                className="group flex items-center gap-4 p-4 bg-card/50 rounded-lg border border-border hover:border-primary/50 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <link.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-foreground text-sm">
                    {link.title}
                  </h3>
                  <p className="text-primary text-sm">{link.company}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
