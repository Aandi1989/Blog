import { Header, Router } from "@shared/components";
import { ThemeType, getTheme } from "@shared/theme";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

const theme = getTheme(ThemeType.Light);

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header />
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
