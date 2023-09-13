import { Router } from "@shared/components";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@core/store";
import { MyThemeProvider } from "@shared/components";

function App() {
  return (
    <BrowserRouter>
      <MyThemeProvider>
        <Provider store={store}>
          <Router />
        </Provider>
      </MyThemeProvider>
    </BrowserRouter>
  );
}

export default App;
