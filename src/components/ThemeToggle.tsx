import { useEffect, useState } from "react";
import { LuSun, LuMoon } from "react-icons/lu";

type Theme = "dark" | "light";

function getSystemTheme(): Theme {
  if (
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches
  ) {
    return "light";
  }
  return "dark";
}

function getStoredTheme(): Theme | null {
  try {
    const val = localStorage.getItem("theme");
    if (val === "dark" || val === "light") {
      return val;
    }
  } catch {
    // localStorage unavailable or blocked
  }
  return null;
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof document !== "undefined") {
      const currentAttr = document.documentElement.getAttribute("data-theme");
      if (currentAttr === "dark" || currentAttr === "light") {
        return currentAttr;
      }
    }
    const stored = getStoredTheme();
    if (stored) return stored;
    return getSystemTheme();
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");

    const handleChange = (e: MediaQueryListEvent) => {
      // Only follow system changes if the user hasn't explicitly saved a preference
      if (!getStoredTheme()) {
        const next = e.matches ? "light" : "dark";
        setTheme(next);
        document.documentElement.setAttribute("data-theme", next);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    try {
      localStorage.setItem("theme", nextTheme);
    } catch {
      // localStorage is blocked or unavailable
    }
  };

  const isDark = theme === "dark";
  const actionLabel = isDark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      type="button"
      className="theme-toggle-btn"
      onClick={toggleTheme}
      aria-label={actionLabel}
      title={actionLabel}
    >
      {isDark ? (
        <LuSun aria-hidden="true" className="theme-toggle-icon" />
      ) : (
        <LuMoon aria-hidden="true" className="theme-toggle-icon" />
      )}
    </button>
  );
}
