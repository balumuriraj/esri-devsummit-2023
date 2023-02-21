import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { setAssetPath } from "@esri/calcite-components/dist/components";
setAssetPath(window.location.href);

const strictMode = import.meta.env.MODE === "production";
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  strictMode ? (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  ) : (
    <App />
  )
);
