import { Analytics } from "@vercel/analytics/react";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

const convex = new ConvexReactClient(
  "https://original-sparrow-26.convex.cloud"
);

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ConvexProvider client={convex}>
      <App />
    </ConvexProvider>
    <Analytics />
  </StrictMode>
);
