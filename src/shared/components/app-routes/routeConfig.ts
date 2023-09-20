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
import { LoginPage } from "@pages/login";

export const routeConfig = [
  {
    path: RouteNames.HOME,
    element: Layout,
    children: [
      { path: "/", element: HomePage, roles: ["ADMIN", "TEACHER", "PARENT", "STUDENT"] },
      { path: RouteNames.TODOS, element: TodosPage, roles: ["ADMIN", "TEACHER", "PARENT", "STUDENT"] },
      { path: `${RouteNames.TODOS}/:id`, element: TodoPage, roles: ["ADMIN", "TEACHER"] },
      { path: RouteNames.USERS, element: UsersPage, roles: ["ADMIN"] },
      { path: `${RouteNames.USERS}/:id`, element: UserPage, roles: ["ADMIN"] },
      { path: RouteNames.POSTS, element: PostsPage, roles: ["ADMIN", "TEACHER", "PARENT", "STUDENT"] },
      { path: `${RouteNames.POSTS}/:id`, element: PostPage, roles: ["ADMIN", "TEACHER"] },
      { path: RouteNames.LOGIN, element: LoginPage, roles: ["ADMIN", "TEACHER", "PARENT", "STUDENT"] },
      { path: RouteNames.NOT_FOUND_PAGE, element: NotFoundPage, roles: ["ADMIN", "TEACHER", "PARENT", "STUDENT"] },
    ],
  },
];
