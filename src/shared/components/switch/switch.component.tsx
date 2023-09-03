import React, { useState } from "react";
import * as Styled from "./switch.styles";

const Switch: React.FC = () => {
  const [isToggled, setIsToggled] = useState(false);

  const onToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <Styled.ToggleSwitchWrapper>
      <Styled.ToggleSwitchInput checked={isToggled} onChange={onToggle} />
      <Styled.ToggleSwitchSlider isToggled={isToggled} />
    </Styled.ToggleSwitchWrapper>
  );
};

export default Switch;
