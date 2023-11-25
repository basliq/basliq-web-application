import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'
import {loadConfig} from "./configs";
import {RouterProvider} from "react-router-dom";
import {router} from "./routes/index.route.tsx";

loadConfig()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
