import * as Styled from "./todo.style";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useTodosApi } from "@core/store";

const TodoPage: React.FC = () => {
  const { getTodosByUserId, cleanTodos, isLoading, todoIds, todoMap } = useTodosApi();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getTodosByUserId(id);
    }
    return () => cleanTodos();
  }, [getTodosByUserId, cleanTodos, id]);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <Styled.Wrapper>
      {todoIds.length ? (
        todoIds.map((id) => (
          <Styled.ItemsWrapper key={id}>
            <Styled.Item>UserId: {todoMap[id].userId}</Styled.Item>
            <Styled.Item>TodoId: {todoMap[id].id}</Styled.Item>
            <Styled.Item>Title: {todoMap[id].title}</Styled.Item>
            <Styled.Item>Completed: {todoMap[id].completed ? "true" : "false"}</Styled.Item>
          </Styled.ItemsWrapper>
        ))
      ) : (
        <div>There aren't todos for this User</div>
      )}
    </Styled.Wrapper>
  );
};

export default TodoPage;
