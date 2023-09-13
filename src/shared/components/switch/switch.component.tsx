import React, { useContext, useState } from "react";
import * as Styled from "./switch.styles";
import { ThemeContext } from "@shared/components";
import { ThemeType, getTheme } from "@shared/theme";

const Switch: React.FC = () => {
  const [istoggled, setIsToggled] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext)!;
  const lightTheme = getTheme(ThemeType.Light);
  const darkTheme = getTheme(ThemeType.Dark);

  const onToggle = () => {
    setIsToggled(!istoggled);
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
        <Styled.ToggleSwitchInput checked={istoggled} onChange={onToggle} />
        <Styled.ToggleSwitchSlider istoggled={istoggled} />
      </Styled.ToggleSwitchWrapper>
      <Styled.Moon />
    </Styled.Wrapper>
  );
};

export default Switch;
