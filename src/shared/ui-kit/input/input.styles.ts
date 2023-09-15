import styled from "styled-components";

export const Input = styled.input`
  padding: 0 5px;
  background-color: ${({ theme }) => theme.backgrounds.primary};
  box-shadow: ${({ theme }) => theme.shadows.primary};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
`;
