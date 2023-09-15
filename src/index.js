import React from "react";
import ReactDOM from "react-dom/client";
import { SnackbarProvider } from "notistack";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <SnackbarProvider
        maxSnack={2}
        autoHideDuration={3000}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        style={{
          fontSize: "1.085rem",
          maxWidth: "80%",
          fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
        }}
      >
        <App />
      </SnackbarProvider>
    </Router>
  </React.StrictMode>
);
