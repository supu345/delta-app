import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import BlogPage from "./pages/BlogPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import TeamPage from "./pages/TeamPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import FAQPage from "./pages/FAQPage";
import ErrorPage from "./pages/ErrorPage";
//import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />;
        <Route path="/about" element={<AboutPage />} />;
        <Route path="/blog" element={<BlogPage />} />;
        <Route path="/services" element={<ServicesPage />} />;
        <Route path="/contact" element={<ContactPage />} />;
        <Route path="/team" element={<TeamPage />} />;
        <Route path="/faq" element={<FAQPage />} />;
        <Route path="/error-page" element={<ErrorPage />} />;
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />;
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
