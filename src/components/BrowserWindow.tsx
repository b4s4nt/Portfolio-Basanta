import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BrowserWindowProps {
  children: ReactNode;
  className?: string;
}

const BrowserWindow = ({ children, className = "" }: BrowserWindowProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`rounded-lg border border-border overflow-hidden glow-border ${className}`}
      style={{ background: "var(--gradient-card)" }}
    >
      <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-dot-red" />
          <div className="w-3 h-3 rounded-full bg-dot-yellow" />
          <div className="w-3 h-3 rounded-full bg-dot-green" />
        </div>
      </div>
      <div className="p-6">{children}</div>
    </motion.div>
  );
};

export default BrowserWindow;
