"use client";

import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof document === "undefined") return false;
    return document.documentElement.classList.contains("dark");
  });

  const toggleTheme = () => {
    const nextIsDark = !isDark;
    const nextTheme = nextIsDark ? "dark" : "light";
    document.documentElement.classList.toggle("dark", nextIsDark);
    localStorage.setItem("theme", nextTheme);
    setIsDark(nextIsDark);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title="Toggle theme"
      className="rounded-md p-1 text-sm text-neutral-600 transition-all duration-200 hover:bg-black/5 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-white/10 dark:hover:text-neutral-100"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
