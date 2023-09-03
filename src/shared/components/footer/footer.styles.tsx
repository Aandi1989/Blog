import styled from "styled-components";

export const Footer = styled.footer`
  background: ${({ theme }) => theme.backgrounds.primary};
  box-shadow: ${({ theme }) => theme.shadows.primary};
  ${({ theme }) => theme.fonts.primary[40]};
`;
