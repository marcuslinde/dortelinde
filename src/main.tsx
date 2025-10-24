import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const rootEl = document.getElementById("root");
if (!rootEl) {
  // If the root is missing, show a clear error in the page and console.
  const msg = "Root element (#root) not found in index.html";
  // eslint-disable-next-line no-console
  console.error(msg);
  document.body.innerHTML = `<div style="padding:16px;color:#b91c1c;background:#fff0f0;font-family:system-ui;">${msg}</div>`;
  throw new Error(msg);
}

const root = createRoot(rootEl);

function showFatalError(err: unknown) {
  const message = String(err instanceof Error ? `${err.name}: ${err.message}` : err);
  // eslint-disable-next-line no-console
  console.error("Fatal render error:", err);
  document.body.innerHTML = `
    <div style="padding:20px;font-family:system-ui;background:#fff0f0;color:#b91c1c;">
      <h2 style="margin:0 0 8px 0">Application Error</h2>
      <pre style="white-space:pre-wrap;margin:0">${message}</pre>
      <p style="margin-top:12px;color:#6b7280">Check your terminal & browser console for stack traces and missing imports.</p>
    </div>
  `;
}

// Render with try/catch to surface sync render errors.
try {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
} catch (err) {
  showFatalError(err);
}

// Global handlers for uncaught errors and unhandled promise rejections.
window.addEventListener("error", (event) => {
  // eslint-disable-next-line no-console
  console.error("Uncaught error event:", event.error || event.message, event);
  showFatalError(event.error || event.message);
});

window.addEventListener("unhandledrejection", (event) => {
  // eslint-disable-next-line no-console
  console.error("Unhandled promise rejection:", event.reason, event);
  showFatalError(event.reason || "Unhandled promise rejection");
});