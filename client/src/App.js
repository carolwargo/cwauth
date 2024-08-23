import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {UserContextProvider} from "./UserContext";
import AdminLayout from "./Layout/AdminLayout";


import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ErrorBoundary from "./components/ErrorBoundary";

import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
    <ErrorBoundary>
    <UserContextProvider>
    <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route index element={<IndexPage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
      </Routes>
      </UserContextProvider>
    </ErrorBoundary>
  </BrowserRouter>
    </div>
  );
}

// Create a component for handling not found routes
function NotFound() {
  console.error("Page not found!"); // Log error to console
  return <h1>404 - Not Found</h1>;
}

export default App;
