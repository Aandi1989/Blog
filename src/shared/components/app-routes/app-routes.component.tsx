import { Route, Routes } from "react-router-dom";
import { routeConfig } from "./routeConfig";
import { PrivateRoute } from "@shared/components";

const Router: React.FC = () => {
  const isAuthenticated = true; //  получаем статус авторизации пользователя во время авторизации
  return (
    <Routes>
      {routeConfig.map((route) => (
        <Route key={route.path} path={route.path} element={<route.element />}>
          {route.children?.map((childRoute) => (
            <PrivateRoute
              element={childRoute.element}
              isAuthenticated={isAuthenticated}
              roles={childRoute.roles}
              path={childRoute.path}
            />
          ))}
        </Route>
      ))}
    </Routes>
  );
};

export default Router;
