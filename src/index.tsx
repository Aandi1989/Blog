import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { MyThemeProvider } from "@core/hoc";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <MyThemeProvider>
    <App />
  </MyThemeProvider>
);
