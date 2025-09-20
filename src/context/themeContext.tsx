"use client";
import { createContext, useState } from "react";

export const ThemeContext = createContext({});

export type ThemeContextType = {
  mode: string;
  toggle: () => void;
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState("light");

  const toggle = () => {
    setMode((prev: string) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`${mode} transition-all duration-1000 h-full`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
