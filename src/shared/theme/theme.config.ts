import { css } from "styled-components";
import { ThemeType } from "./theme.type";

export const appTheme = {
  [ThemeType.Light]: {
    colors: {
      primary: "#111517",
    },
    backgrounds: {
      primary: "#ffffff",
    },
    fonts: {
      primary: {
        20: css`
          font-family: "Nunito Sans";
          font-weight: 300;
          font-size: 1rem;
        `,
        40: css`
          font-family: "Nunito Sans";
          font-weight: 600;
          font-size: 1.2rem;
        `,
        60: css`
          font-family: "Nunito Sans";
          font-weight: 800;
          font-size: 1.4rem;
        `,
      },
    },
    shadows: {
      primary: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    },
  },
  [ThemeType.Dark]: {
    colors: {
      primary: "ffffff",
    },
    backgrounds: {
      primary: "#202c37",
    },
    fonts: {
      primary: {
        20: css`
          font-family: "Nunito Sans";
          font-weight: 300;
          font-size: 1rem;
        `,
        40: css`
          font-family: "Nunito Sans";
          font-weight: 600;
          font-size: 1.2rem;
        `,
        60: css`
          font-family: "Nunito Sans";
          font-weight: 800;
          font-size: 1.4rem;
        `,
      },
    },
    shadows: {
      primary: "rgba(245, 245, 245, 0.2) 0px 0px 8px",
    },
  },
};

export const getTheme = (theme: ThemeType) => appTheme[theme];
