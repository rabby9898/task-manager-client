import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Router.jsx";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./Provider/AuthProvider/AuthProvider.jsx";
import "./sass/main.scss";
import { DragDropProvider } from "./Provider/DragDropProvider/DragDropProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <DragDropProvider>
        <RouterProvider router={router} />
        <Toaster />
      </DragDropProvider>
    </AuthProvider>
  </React.StrictMode>
);
