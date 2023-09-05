import * as Styled from "./todos.styles";
import { useTodosApi } from "@core/store";
import { useEffect } from "react";

const TodosPage: React.FC = () => {
  const { getAllTodos, cleanTodos, isLoading, todoIds, todoMap } = useTodosApi();

  useEffect(() => {
    getAllTodos();
    return () => {
      cleanTodos();
    };
  }, [getAllTodos, cleanTodos]);
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <Styled.Wrapper>
      {!!todoIds.length &&
        todoIds.map((id) => (
          <Styled.TodoLink key={id} to={`/todos/${id}`}>
            {todoMap[id].title}
          </Styled.TodoLink>
        ))}
    </Styled.Wrapper>
  );
};

export default TodosPage;
