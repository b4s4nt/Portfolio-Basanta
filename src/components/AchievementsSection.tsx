import { motion } from "framer-motion";
import { Trophy, Award, Medal, Star, Target, Zap } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Best Final Year Project",
    description: "Awarded for developing an innovative Android application during Bachelor's degree",
    year: "2016",
  },
  {
    icon: Award,
    title: "Dean's List - MSc",
    description: "Recognized for academic excellence during Master's program at University of Bedfordshire",
    year: "2019",
  },
  {
    icon: Medal,
    title: "Hackathon Winner",
    description: "First place in regional coding hackathon for building a real-time collaboration tool",
    year: "2021",
  },
  {
    icon: Star,
    title: "Employee of the Quarter",
    description: "Recognized for exceptional performance and contribution to team success",
    year: "2022",
  },
  {
    icon: Target,
    title: "AWS Certified Developer",
    description: "Successfully passed AWS Developer Associate certification exam",
    year: "2023",
  },
  {
    icon: Zap,
    title: "Open Source Contributor",
    description: "Active contributor to popular open-source projects with 500+ GitHub stars",
    year: "Ongoing",
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-20 bg-secondary/20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trophy className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-display text-foreground">
              Achievements & Recognition
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Milestones and accomplishments throughout my career
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-effect p-6 rounded-xl border border-border glow-border group"
              >
                <motion.div
                  className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                  whileHover={{ rotate: 10 }}
                >
                  <IconComponent className="w-7 h-7 text-primary" />
                </motion.div>
                
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-display text-foreground">
                    {achievement.title}
                  </h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">
                    {achievement.year}
                  </span>
                </div>
                
                <p className="text-muted-foreground text-sm">
                  {achievement.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
