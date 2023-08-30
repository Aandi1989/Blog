import { DefaultTheme, ThemedCssFunction } from "styled-components";

export interface AppThemeType {
  colors: {
    primaty: string;
  };
  fonts: {
    primary: {
      80: ThemedCssFunction<DefaultTheme>;
    };
  };
  background: {
    primary: string;
  };
}

export enum ThemeType {
  Dark = "DARK",
  Light = "LIGHT",
}
