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
import PricingLayout from "./components/Layout/ServicesLayout.jsx";
import DigitalMarketingLayout from "./components/Layout/DigitalMarketingLayout.jsx";
import WebPricing from "./pages/WebPricing.jsx";
import MultiDropNav from "./components/Navgation/MultiDropNav.jsx";
import HomeLayout from "./components/Layout/MainLayout.jsx";

import GraphicsPage from "./pages/services/GraphicsPage.jsx";
import WebDevPage from "./pages/services/WebDevPage.jsx";
import DigitalMarketingPage from "./pages/services/DigitalMarketingPage.jsx";
import ITPage from "./pages/services/ITPage.jsx";
import SEOAnalyticsPage from "./pages/services/SEOAnalyticsPage.jsx";
import ContentCreationPage from "./pages/services/ContentCreationPage.jsx";

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

              <Route path="/digital-marketing" element={<DigitalMarketingLayout />}>
                <Route index element={<DigitalMarketingPage />} />
              </Route>
              
              <Route path="/pricing" element={<PricingLayout />}>
                <Route index element={<WebPricing />} />
              </Route>
              <Route path="/web-pricing" element={<WebPricing />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/contact" element={<ContactPage />} />

              <Route path="/graphics" element={<GraphicsPage />} />
              <Route path="/web-dev" element={<WebDevPage />} />
              <Route path="/digital-marketing" element={<DigitalMarketingPage />} />
              <Route path="/it" element={<ITPage />} />
              <Route path="/seo-analytics" element={<SEOAnalyticsPage />} />
              <Route path="/content-creation" element={<ContentCreationPage />} />
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
