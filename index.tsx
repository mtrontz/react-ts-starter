import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

   if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker
        .register("/service-worker.js")
        .then(() => {
        console.log("SW has been registered");
      })
      .catch(() => {
        console.log("SW failed");
      });
    });
  }