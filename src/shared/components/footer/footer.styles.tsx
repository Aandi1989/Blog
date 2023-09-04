import styled from "styled-components";

export const Footer = styled.footer`
  color: ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ theme }) => theme.shadows.primary};
  ${({ theme }) => theme.fonts.primary[40]};
  transition: color 0.2s;
`;

export const Wrapper = styled.div`
  padding: 20px;
  max-width: 1240px;
  margin: 0 auto;
`;
