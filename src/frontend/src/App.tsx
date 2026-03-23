import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import HairTipsPage from "./pages/HairTipsPage";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";

function ScrollReveal() {
  useEffect(() => {
    const observe = () => {
      const elements = document.querySelectorAll(".fade-in-up");
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) entry.target.classList.add("visible");
          }
        },
        { threshold: 0.1 },
      );
      for (const el of elements) observer.observe(el);
      return () => observer.disconnect();
    };
    const cleanup = observe();
    return cleanup;
  }, []);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollReveal />
      <div className="flex flex-col min-h-screen bg-background">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hair-tips" element={<HairTipsPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
