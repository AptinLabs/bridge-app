import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./App";
import BackgroundImage from "./components/BackgroundImage";
import { theme } from "./muiTheme";
import "./styles-light.css";
import "./styles-dark.css";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <HashRouter>
      <BackgroundImage />
      <App />
    </HashRouter>
  </ThemeProvider>,
  document.getElementById("root")
);
