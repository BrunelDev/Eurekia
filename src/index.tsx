import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { Analytics } from "@vercel/analytics/react";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <App />
    <Analytics />
  </StrictMode>
);
