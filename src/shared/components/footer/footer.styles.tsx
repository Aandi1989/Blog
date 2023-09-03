import styled from "styled-components";

export const Footer = styled.footer`
  background: ${({ theme }) => theme.backgrounds.primary};
  box-shadow: ${({ theme }) => theme.shadows.primary};
  ${({ theme }) => theme.fonts.primary[40]};
`;

export const Wrapper = styled.div`
  padding: 20px;
  max-width: 1240px;
  margin: 0 auto;
`;
