import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TodoLink = styled(Link)`
  margin: 5px;
  width: fit-content;
  text-decoration: none;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.primary};
  &:hover {
    text-decoration: underline;
  }
`;
