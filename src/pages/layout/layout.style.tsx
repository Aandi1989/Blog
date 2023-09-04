import styled from "styled-components";

export const Layout = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.backgrounds.primary};
  transition: background 0.2s;
`;

export const Main = styled.main`
  flex: 1 0 auto;
  padding: 20px;
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.primary};
  ${({ theme }) => theme.fonts.primary[20]};
  transition: color 0.2s;
`;
