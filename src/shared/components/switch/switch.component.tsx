import React, { useContext, useState } from "react";
import * as Styled from "./switch.styles";
import { ThemeContext } from "@core/hoc";

const Switch: React.FC = () => {
  const [isToggled, setIsToggled] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext)!;
  console.log(theme);

  const onToggle = () => {
    setIsToggled(!isToggled);
    // setTheme();
  };

  return (
    <Styled.ToggleSwitchWrapper>
      <Styled.ToggleSwitchInput checked={isToggled} onChange={onToggle} />
      <Styled.ToggleSwitchSlider isToggled={isToggled} />
    </Styled.ToggleSwitchWrapper>
  );
};

export default Switch;
