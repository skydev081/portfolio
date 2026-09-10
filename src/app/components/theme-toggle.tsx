"use client";

import { MdDarkMode, MdLightMode } from "react-icons/md";

function ThemeToggle() {
  const toggleTheme = () => {
    const root = document.documentElement;
    const isDark = root.classList.toggle("dark");

    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {
      // Ignore storage errors (private mode, disabled cookies, ...)
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle light and dark mode"
      title="Toggle light and dark mode"
      className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border border-line text-foreground transition-colors duration-300 hover:border-accent hover:text-accent"
    >
      <MdLightMode size={18} className="hidden dark:block" />
      <MdDarkMode size={18} className="block dark:hidden" />
    </button>
  );
}

export default ThemeToggle;
