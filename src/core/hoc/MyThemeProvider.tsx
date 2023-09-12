import { ThemeType, getTheme, AppThemeType } from "@shared/theme";
import React, { createContext, useState } from "react";

/* TODO: 
  Не правильный нейминг файла. 
  1) MyThemeProvider -> my-theme-provider.component.ts + 
  2) вынести в папку components 
  3) папку hoc удалить
*/

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
  // TODO: ThemeProvider только тут
  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};
