import styled from "styled-components";
import { ButtonType } from "./button.types";

export const Button = styled.button<ButtonType>`
  padding: 0 15px;
  background-color: ${({ theme }) => theme.backgrounds.primary};
  box-shadow: ${({ theme }) => theme.shadows.primary};
  line-height: 2.5;
  border-radius: 8px;
  border: none;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
  // font-weight: ${({ active }) => (active ? "600" : "300")};
`;
