"use client";

import { useContext } from "react";
import { ThemeContext, ThemeContextType } from "@/context/themeContext";

const DarkModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext) as ThemeContextType;

  return (
    <div className="text-xl cursor-pointer" onClick={toggle}>
      {mode === "dark" ? "🌙" : "☀️"}
    </div>
  );
};

export default DarkModeToggle;
