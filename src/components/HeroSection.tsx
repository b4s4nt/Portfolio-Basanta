import { motion } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";
import Navigation from "./Navigation";
import ThemeSwitcher from "./ThemeSwitcher";
import profileImage from "@/assets/profile.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-8">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-display text-foreground mb-2">
            Hi, I'm <span className="text-gradient">Basanta Kandel</span>
          </h1>
        </motion.div>

        {/* Main Browser Window */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-xl border border-border overflow-hidden glow-border"
          style={{ background: "var(--gradient-card)" }}
        >
          <Navigation />

          <div className="grid md:grid-cols-2 gap-8 p-6 md:p-10">
            {/* Left Column - Profile */}
            <div className="flex flex-col items-center gap-6">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative"
              >
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl animate-glow-pulse" />
                <img
                  src={profileImage}
                  alt="Basanta Kandel"
                  className="relative w-48 h-48 rounded-full object-cover border-4 border-primary/50"
                />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl font-display text-muted-foreground"
              >
                Graduate Software Developer
              </motion.h2>

              <ThemeSwitcher />
            </div>

            {/* Right Column - Summary */}
            <div className="flex items-center">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative"
              >
                <div className="absolute -inset-1 bg-primary/10 rounded-lg blur-sm" />
                <div className="relative bg-card/80 backdrop-blur-sm border border-primary/30 rounded-lg p-6">
                  {/* Corner dots */}
                  <div className="absolute -top-1.5 -left-1.5 w-3 h-3 rounded-full border-2 border-primary bg-background" />
                  <div className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full border-2 border-primary bg-background" />
                  <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 rounded-full border-2 border-primary bg-background" />
                  <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 rounded-full border-2 border-primary bg-background" />

                  <h3 className="text-lg font-display text-foreground mb-4">
                    PROFESSIONAL SUMMARY
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Experienced software developer with a demonstrated history of working in
                    the computer software industry. Skilled in programming languages such as
                    Java, C#, PHP, and JavaScript.
                  </p>
                  <motion.a
                    href="https://drive.google.com/file/d/1PRc8H9zaNLrssqqMFbJMG1ZuVofSAO4o/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                  >
                    <Download size={16} />
                    Download Resume
                    <ExternalLink size={14} />
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
