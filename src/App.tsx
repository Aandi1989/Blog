import { router } from "@shared/components";
import { Provider } from "react-redux";
import { store } from "@core/store";
import { MyThemeProvider } from "@shared/components";
import { RouterProvider } from "react-router-dom";
import { useRoutesWithUserRole } from "@shared/components/app-routes/app-routes.component";

function App() {
  const routerWithRoles = useRoutesWithUserRole();
  return (
    // <BrowserRouter>
    <MyThemeProvider>
      <Provider store={store}>
        <RouterProvider router={routerWithRoles} />
      </Provider>
    </MyThemeProvider>
    // </BrowserRouter>
  );
}

export default App;
