import { ThemeType, getTheme } from "@shared/theme";
import React, { createContext, useContext, useState } from "react";

interface ThemeContectType {
  theme: ThemeType;
  setTheme: (newValue: ThemeType) => void;
}

const themeValue: ThemeType = getTheme(ThemeType.Light);

// const theme = getTheme(ThemeType.Light);

const ThemeContext = createContext<ThemeContectType | undefined>(undefined);

export const MyThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setMyTheme] = useState<ThemeType>(themeValue);

  const updateTheme = (newValue: ThemeType) => {
    setMyTheme(newValue);
  }
};
