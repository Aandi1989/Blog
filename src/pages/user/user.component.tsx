import { useUsersApi } from "@core/store";
import { Button } from "@shared/ui-kit/button"; // TODO: import { Button, Zalupa } from '@shared/ui-kit'
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as Styled from "./user.styles";
import { PostPage } from "../post";
import { TodoPage } from "../todo";

enum Tabs {
  Initial = "INITIAL",
  Posts = "POSTS",
  Todos = "TODOS",
}

const UserPage: React.FC = () => {
  const { id } = useParams();
  const { getUserById, cleanCurrentUser, isLoading, currentUser } = useUsersApi();
  const [currentTab, setCurrentTab] = useState(Tabs.Initial);

  const onTabClick = (tab: Tabs) => () => {
    setCurrentTab(tab);
  };

  useEffect(() => {
    if (id) {
      getUserById(id);
    }
    return () => {
      cleanCurrentUser();
    };
  }, [getUserById, cleanCurrentUser, id]);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    !!currentUser && (
      <Styled.Wrapper>
        <Styled.Header>Current user</Styled.Header>
        <Styled.Item>Name: {currentUser.name}</Styled.Item>
        <Styled.Item>Phone: {currentUser.phone}</Styled.Item>
        <Styled.Item>Email: {currentUser.email}</Styled.Item>
        <Styled.Item>UserId: {currentUser.id}</Styled.Item>
        <Styled.ButtonsWrapper>
          <Button onClick={onTabClick(Tabs.Posts)} children={"Posts"} />
          <Button onClick={onTabClick(Tabs.Todos)} children={"Todos"} />
        </Styled.ButtonsWrapper>
        {currentTab === Tabs.Posts && <PostPage />}
        {currentTab === Tabs.Todos && <TodoPage />}
      </Styled.Wrapper>
    )
  );
};

export default UserPage;
