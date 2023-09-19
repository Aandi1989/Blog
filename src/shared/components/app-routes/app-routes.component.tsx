import { Route, Routes, createBrowserRouter, useRouteError } from "react-router-dom";

import { routeConfig } from "./routeConfig";
import { UsersPage } from "@pages/users";
import { UserPage } from "@pages/user";
import { HomePage } from "@pages/homepage";

const Router: React.FC = () => {
  return (
    <Routes>
      {routeConfig.map((route) => (
        <Route key={route.path} path={route.path} element={<route.element />}>
          {route.children?.map((childRoute) => (
            <Route key={childRoute.path} path={childRoute.path} element={<childRoute.element />} />
          ))}
        </Route>
      ))}
    </Routes>
  );
};

const router = createBrowserRouter([
  // TODO: Тут была ошибка (все по документации)
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/users",
    element: <UsersPage />,
  },
  {
    path: "users/hui",
    element: <div children="hui" />,
  },
  {
    path: "users/:id",
    element: <UserPage />,
  },
]);

export default router;

// как сюда прикрутить private route и роутинг по ролям??
// Изи. Чисто методы js
// PSEUDOCODE

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        {/* @ts-ignore */}
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

const adminRoutes = [
  {
    path: "/users",
    element: <UsersPage />,
  },
  {
    path: "users/hui",
    element: <div children="hui" />,
  },
  {
    path: "users/:id",
    element: <UserPage />,
  },
];

const loxEbaniRoutes = [
  {
    path: "/",
    element: <HomePage />,
    errorElement: <h1>404 No page. blya</h1>,
  },
  {
    path: "users/hui",
    element: <div children="hui" />,
  },
];

enum UserRoles {
  Admin = "ADMIN",
  LohEbani = "LOX_EBANII",
}

const useProfile = () => {
  return {
    firstName: "Hui",
    lastName: "Blyat",
    role: UserRoles.LohEbani,
  };
};

export const useRoutesWithUserRole = () => {
  const { role } = useProfile();
  const routes = [...loxEbaniRoutes, ...(role === UserRoles.Admin ? adminRoutes : [])];
  return createBrowserRouter(routes);
};
