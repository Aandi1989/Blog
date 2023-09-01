import { RuleSet } from "styled-components/dist/types";

export interface AppThemeType {
  colors: {
    primary: string;
  };
  fonts: {
    primary: {
      20: RuleSet<object>;
      40: RuleSet<object>;
      60: RuleSet<object>;
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
