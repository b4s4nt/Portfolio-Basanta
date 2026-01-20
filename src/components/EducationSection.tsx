import { motion } from "framer-motion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    degree: "Master of Science in Computer Science",
    institution: "University of Bedfordshire",
    location: "Luton, UK",
    year: "2018 - 2019",
    grade: "Distinction",
  },
  {
    degree: "Bachelor of Engineering in Computer Engineering",
    institution: "Tribhuvan University",
    location: "Kathmandu, Nepal",
    year: "2012 - 2016",
    grade: "First Division",
  },
  {
    degree: "Higher Secondary Education (Science)",
    institution: "Higher Secondary Education Board",
    location: "Nepal",
    year: "2010 - 2012",
    grade: "First Division",
  },
  {
    degree: "Secondary Education",
    institution: "SLC Board",
    location: "Nepal",
    year: "2010",
    grade: "Distinction",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-secondary/20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <GraduationCap className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-display text-foreground">
              Educational Qualifications
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey and qualifications
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-effect rounded-xl border border-border overflow-hidden glow-border"
        >
          <Table>
            <TableHeader>
              <TableRow className="border-border hover:bg-transparent">
                <TableHead className="text-primary font-display">Degree / Certificate</TableHead>
                <TableHead className="text-primary font-display">Institution</TableHead>
                <TableHead className="text-primary font-display">Location</TableHead>
                <TableHead className="text-primary font-display">Year</TableHead>
                <TableHead className="text-primary font-display text-right">Grade</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {educationData.map((edu, index) => (
                <motion.tr
                  key={edu.degree}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border-border hover:bg-primary/5 transition-colors"
                >
                  <TableCell className="font-medium text-foreground">
                    {edu.degree}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {edu.institution}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {edu.location}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {edu.year}
                  </TableCell>
                  <TableCell className="text-right">
                    <span className="px-2 py-1 rounded-full text-xs bg-primary/20 text-primary">
                      {edu.grade}
                    </span>
                  </TableCell>
                </motion.tr>
              ))}
            </TableBody>
          </Table>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
