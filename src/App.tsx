import { ThemeContext } from "@core/hoc";
import { Router } from "@shared/components";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useContext } from "react";
import { Provider } from "react-redux";
import { store } from "@core/store";

function App() {
  const { theme } = useContext(ThemeContext)!;
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Router />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
