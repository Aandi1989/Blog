import { Route, Routes, createBrowserRouter } from "react-router-dom";
import { routeConfig } from "./routeConfig";

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
  {
    path: "/",
    element: <Router />,
  },
]);

export default router;

// как сюда прикрутить private route и роутинг по ролям??
