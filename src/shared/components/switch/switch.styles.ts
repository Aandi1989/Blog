import styled from "styled-components";
import { BsMoon } from "react-icons/bs";
import { FiSun } from "react-icons/fi";

type Props = {
  isToggled: boolean;
};

export const Wrapper = styled.div`
  width: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ToggleSwitchWrapper = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;
  margin: 0 0.75rem;
`;

export const ToggleSwitchInput = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

export const ToggleSwitchSlider = styled.span<Props>`
  position: absolute;
  cursor: pointer;
  background-color: ${({ isToggled }) => (isToggled ? "#2bc6ff" : "#b6b6b6")};
  border-radius: 25px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: background-color 0.2s ease;

  &::before {
    position: absolute;
    content: "";
    left: 2px;
    top: 2px;
    width: 21px;
    height: 21px;
    background-color: #333;
    border-radius: 50%;
    transform: ${({ isToggled }) => (isToggled ? "translateX(25px)" : "none")};
    transition: transform 0.3s ease;
  }
`;

export const Moon = styled(BsMoon)`
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.colors.primary};
  transition: color 0.2s ease;
`;

export const Sun = styled(FiSun)`
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.colors.primary};
  transition: color 0.2s ease;
`;
