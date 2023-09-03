import { RouteNames } from "@core/constants";
import { HomePage } from "@pages/homepage";
import { NewsPage } from "@pages/news";
import { NotFoundPage } from "@pages/not-found-page";
import { PostsPage } from "@pages/posts";
import { TodosPage } from "@pages/todos";
import { UserPage } from "@pages/user";
import { UsersPage } from "@pages/users";
import { Route, Routes } from "react-router-dom";
import { Layout } from "@shared/components";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path={RouteNames.HOME} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={RouteNames.NEWS} element={<NewsPage />} />
        <Route path={RouteNames.TODOS} element={<TodosPage />} />
        <Route path={RouteNames.USERS} element={<UsersPage />} />
        <Route path={`${RouteNames.USERS}/:id`} element={<UserPage />} />
        <Route path={RouteNames.POSTS} element={<PostsPage />} />
        <Route path={RouteNames.NOT_FOUND_PAGE} element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
