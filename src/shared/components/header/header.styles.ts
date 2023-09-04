import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.div`
  box-shadow: ${({ theme }) => theme.shadows.primary};
  ${({ theme }) => theme.fonts.primary[60]};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  max-width: 1240px;
  margin: 0 auto;
`;

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  transition: color 0.2s;
  &:hover {
    text-decoration: underline;
  }
  &.active {
    color: #2bc6ff;
  }
`;
