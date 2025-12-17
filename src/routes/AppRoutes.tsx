import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/main/Home";
import MainLayout from "../layout/MainLayout";
import Register from "../pages/main/Register";
import Login from "../pages/main/Login";
import Contact from "../pages/main/Contact";
import About from "../pages/main/About";
import RegisterConfirmation from "../pages/main/RegisterConfirmation";
import AccountVerification from "../pages/main/AccountVerification";
import Services from "../pages/main/Services";
import Request from "../pages/main/Request";
import PrivacyPolicy from "../pages/main/PrivacyPolicy";
import Terms from "../pages/main/Terms";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route
          path="registration-confirmation"
          element={<RegisterConfirmation />}
        />
        <Route path="account-verification" element={<AccountVerification />} />
        <Route path="services" element={<Services />} />
        <Route path="request" element={<Request />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-and-condition" element={<Terms />} />
      </Route>
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}

export default AppRoutes;
