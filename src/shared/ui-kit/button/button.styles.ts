import styled from "styled-components";

export const Button = styled.button`
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
`;
