import { css } from "styled-components";

export interface AppThemeType {
  colors: {
    primaty: string;
  };
  fonts: {
    primary: {
      80: typeof css;
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
