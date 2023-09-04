import { ThemeContext } from "@core/hoc";
import { Router } from "@shared/components";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useContext } from "react";

function App() {
  const { theme } = useContext(ThemeContext)!;
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
