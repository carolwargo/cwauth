import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserContextProvider } from "./UserContext";
import BlackHeader from "./components/Header/BlackHeader";

import AdminPage from "./pages/AdminPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ErrorBoundary from "./ErrorBoundary";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AdminLayout from "./components/Layout/AdminLayout.jsx";
import MultiDropNav from "./components/Navgation/MultiDropNav.jsx";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ErrorBoundary>
          <MultiDropNav />
          <BlackHeader />
          <UserContextProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/admin-layout" element={<AdminLayout />}>
                <Route index element={<AdminPage />} />
              </Route>
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/contact" element={<ContactPage />} />
           
              <Route path="*" element={<NotFound />} />
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
