"use client";
import { createContext } from "react";

type ThemeType = "dark" | "light" | "system";
const ThemeContext = createContext<ThemeType>("system");

export default function ThemeProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeContext value={"dark"}>{children}</ThemeContext>;
}
