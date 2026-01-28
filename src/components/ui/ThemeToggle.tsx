"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

type ThemeValue = "light" | "system" | "dark";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme: ThemeValue = React.useMemo(() => {
    if (!mounted) return "system";
    if (theme === "light" || theme === "dark") return theme;
    return "system";
  }, [theme, mounted]);

  if (!mounted) {
    return (
      <div
        className="flex h-6 w-20 items-center rounded-full border border-border bg-muted/50 p-px"
        aria-hidden
      >
        <div className="flex h-full flex-1 items-center justify-center rounded-full text-muted-foreground">
          <Sun className="h-3 w-3" />
        </div>
        <div className="flex h-full flex-1 items-center justify-center rounded-full text-muted-foreground text-[10px] font-semibold">
          A
        </div>
        <div className="flex h-full flex-1 items-center justify-center rounded-full text-muted-foreground">
          <Moon className="h-3 w-3" />
        </div>
      </div>
    );
  }

  const options: { value: ThemeValue; icon: React.ReactNode; label: string }[] = [
    { value: "light", icon: <Sun className="h-3 w-3" />, label: "Light" },
    { value: "system", icon: <span className="text-[10px] font-semibold">A</span>, label: "Auto (system)" },
    { value: "dark", icon: <Moon className="h-3 w-3" />, label: "Dark" },
  ];

  return (
    <div
      role="group"
      aria-label="Theme selection"
      className="flex h-6 w-20 items-center rounded-full border border-border bg-muted/50 p-px shadow-sm"
    >
      {options.map(({ value, icon, label }) => (
        <button
          key={value}
          type="button"
          onClick={() => setTheme(value)}
          aria-pressed={currentTheme === value}
          aria-label={label}
          title={label}
          className={cn(
            "flex h-full flex-1 items-center justify-center rounded-full text-muted-foreground transition-all duration-200",
            "hover:bg-muted hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            currentTheme === value &&
              "bg-background text-foreground shadow-sm ring-1 ring-border"
          )}
        >
          {icon}
        </button>
      ))}
    </div>
  );
}
