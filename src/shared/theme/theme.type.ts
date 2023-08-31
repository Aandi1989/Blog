import { css } from "styled-components";

export interface AppThemeType {
  colors: {
    primaty: string;
  };
  fonts: {
    primary: {
      number: typeof css;
    };
  };
  backgrounds: {
    primary: string;
  };
  shadows: {
    primary: string;
  };
}

export enum ThemeType {
  Dark = "DARK",
  Light = "LIGHT",
}
