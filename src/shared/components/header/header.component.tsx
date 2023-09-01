import { memo } from "react";
import { RouteNames } from "@core/constants";
import * as Styled from "./header.styles";

const Header: React.FC = () => {
  return (
    <Styled.Header>
      <Styled.NavigationLink to={RouteNames.HOME}>Home</Styled.NavigationLink>
      <Styled.NavigationLink to={RouteNames.USERS}>Users</Styled.NavigationLink>
      <Styled.NavigationLink to={RouteNames.TODOS}>Todos</Styled.NavigationLink>
      <Styled.NavigationLink to={RouteNames.NEWS}>News</Styled.NavigationLink>
    </Styled.Header>
  );
};

export default memo(Header);
