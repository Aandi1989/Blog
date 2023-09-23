import { router } from "@shared/components";
import { Provider } from "react-redux";
import { store } from "@core/store";
import { MyThemeProvider } from "@shared/components";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <MyThemeProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </MyThemeProvider>
  );
}

export default App;
