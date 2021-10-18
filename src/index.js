import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

// Redux
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import allReducers from "./reducers";
import thunk from "redux-thunk";
// MUI
import { createTheme, ThemeProvider } from "@mui/material/styles";
// Router
import { BrowserRouter } from "react-router-dom";

const theme = createTheme({
  typography: {
    fontFamily: `"Roboto", sans-serif`,
  },
  palette: {
    primary: {
      light: "#d3f3af",
      main: "#c8f09c",
      dark: "#8ca86d",
      contrastText: "#000",
    },
    secondary: {
      light: "#aff3ef",
      main: "#9cf0ec",
      dark: "#6da8a5",
      contrastText: "#000",
    },
  },
});

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  allReducers,
  composeEnchancer(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
