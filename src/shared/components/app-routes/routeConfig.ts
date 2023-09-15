import { RouteNames } from "@core/constants";
import { HomePage } from "@pages/homepage";
import { NotFoundPage } from "@pages/not-found-page";
import { PostsPage } from "@pages/posts";
import { PostPage } from "@shared/components/PostsList";
import { TodosPage } from "@pages/todos";
import { UserPage } from "@pages/user";
import { UsersPage } from "@pages/users";
import { Layout } from "@pages/layout";
import { TodoPage } from "@shared/components/TodosList";

export const routeConfig = [
  {
    path: RouteNames.HOME,
    element: Layout,
    children: [
      { path: "/", element: HomePage },
      { path: RouteNames.TODOS, element: TodosPage },
      { path: `${RouteNames.TODOS}/:id`, element: TodoPage },
      { path: RouteNames.USERS, element: UsersPage },
      { path: `${RouteNames.USERS}/:id`, element: UserPage },
      { path: RouteNames.POSTS, element: PostsPage },
      { path: `${RouteNames.POSTS}/:id`, element: PostPage },
      { path: RouteNames.NOT_FOUND_PAGE, element: NotFoundPage },
    ],
  },
];

// как сюда прикрутить private route и роутинг по ролям??
