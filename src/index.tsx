import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import "./index.css";
import { Container } from "@mui/material";
import "animate.css/animate.min.css";
import "react-toastify/dist/ReactToastify.css";
import { cssTransition, ToastContainer } from "react-toastify";
import "./Toast.css";

const fade = cssTransition({
  enter: "animate__animated animate__fadeIn",
  exit: "animate__animated animate__fadeOutRight",
});

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Container maxWidth={"xl"} sx={{ height: "100vh" }}>
        <App />
        <ToastContainer
          pauseOnHover
          bodyStyle={{ width: "100vw" }}
          position="top-right"
        />
      </Container>
    </Provider>
  </React.StrictMode>
);
