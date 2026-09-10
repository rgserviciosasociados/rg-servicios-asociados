import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import FaqPage from "./FaqPage.jsx";
import "./styles.css";

const currentPath = window.location.pathname.replace(/\/+$/, "");
const Page = currentPath.endsWith("/preguntas-frecuentes") ? FaqPage : App;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Page />
  </StrictMode>,
);
