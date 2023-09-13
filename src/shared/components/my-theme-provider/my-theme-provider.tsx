import { ThemeType, getTheme, AppThemeType } from "@shared/theme";
import React, { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";

export interface ThemeContectType {
  theme: AppThemeType;
  setTheme: (newValue: AppThemeType) => void;
}

const themeValue: AppThemeType = getTheme(ThemeType.Light);

export const ThemeContext = createContext<ThemeContectType | undefined>(undefined);

export const MyThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setMyTheme] = useState<AppThemeType>(themeValue);

  const setTheme = (newValue: AppThemeType) => {
    setMyTheme(newValue);
  };

  const contextValue: ThemeContectType = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
