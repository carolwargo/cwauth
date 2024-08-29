import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserContextProvider } from "./UserContext";

import Calendly from './pages/Calendly.jsx';
import AdminPage from "./pages/AdminPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ErrorBoundary from "./ErrorBoundary";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AdminLayout from "./components/Layout/AdminLayout.jsx";
import MultiDropNav from "./components/Navgation/MultiDropNav.jsx";
import HomeLayout from "./components/Layout/MainLayout.jsx";
import Footer from "./components/Footer.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ErrorBoundary>
          <MultiDropNav />
          <UserContextProvider>
            <Routes>
            <Route element={<HomeLayout />} >
            <Route path="/" element={<HomePage />} />
         
          </Route>
          <Route path="/calendly" element={<Calendly />} />
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<AdminPage />} />
              </Route>
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/contact" element={<ContactPage />} />
           
              <Route path="*" element={<NotFound />} />
            </Routes>
          </UserContextProvider>
          <Footer/>
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
