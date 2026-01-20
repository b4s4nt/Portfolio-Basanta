import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Theme = "blue" | "light" | "green" | "purple";

const themes: { id: Theme; color: string; label: string }[] = [
  { id: "blue", color: "bg-[#15202B]", label: "Blue" },
  { id: "light", color: "bg-[#eaeaea]", label: "Light" },
  { id: "green", color: "bg-[#606B56]", label: "Green" },
  { id: "purple", color: "bg-[#46344E]", label: "Purple" },
];

const ThemeSwitcher = () => {
  const [currentTheme, setCurrentTheme] = useState<Theme>("blue");

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme") as Theme;
    if (saved && themes.some((t) => t.id === saved)) {
      setCurrentTheme(saved);
      applyTheme(saved);
    }
  }, []);

  const applyTheme = (theme: Theme) => {
    const root = document.documentElement;
    // Remove all theme classes
    root.classList.remove("theme-light", "theme-green", "theme-purple");
    // Add new theme class (blue is default, no class needed)
    if (theme !== "blue") {
      root.classList.add(`theme-${theme}`);
    }
  };

  const handleThemeChange = (theme: Theme) => {
    setCurrentTheme(theme);
    applyTheme(theme);
    localStorage.setItem("portfolio-theme", theme);
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex gap-3">
        {themes.map((theme) => (
          <motion.button
            key={theme.id}
            onClick={() => handleThemeChange(theme.id)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`w-8 h-8 rounded-full border-2 transition-all duration-200 ${
              theme.color
            } ${
              currentTheme === theme.id
                ? "border-primary ring-2 ring-primary/50"
                : "border-foreground/30 hover:border-foreground/60"
            }`}
            aria-label={`Switch to ${theme.label} theme`}
          />
        ))}
      </div>
      <p className="text-xs text-muted-foreground italic">
        *Theme settings saved for your next visit
      </p>
    </div>
  );
};

export default ThemeSwitcher;
