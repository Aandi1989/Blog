import React, { useContext, useState } from "react";
import * as Styled from "./switch.styles";
import { ThemeContext } from "@core/hoc";
import { ThemeType, getTheme } from "@shared/theme";

const Switch: React.FC = () => {
  const [isToggled, setIsToggled] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext)!;
  const lightTheme = getTheme(ThemeType.Light);
  const darkTheme = getTheme(ThemeType.Dark);

  const onToggle = () => {
    setIsToggled(!isToggled);
    if (theme.type === "LIGHT") {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  };

  return (
    <Styled.Wrapper>
      <Styled.Sun />
      <Styled.ToggleSwitchWrapper>
        <Styled.ToggleSwitchInput checked={isToggled} onChange={onToggle} />
        <Styled.ToggleSwitchSlider isToggled={isToggled} />
      </Styled.ToggleSwitchWrapper>
      <Styled.Moon />
    </Styled.Wrapper>
  );
};

export default Switch;
