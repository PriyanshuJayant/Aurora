import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";
import ProductDetailPage from "@/pages/ProductDetailPage";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Greet from "@/components/Greet";

const queryClient = new QueryClient();

// Home Page Component
const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedProducts />
      </main>
      <Footer />
    </div>
  );
};

// About Page
const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-heading font-bold text-gradient-cyber mb-4">
            About Us
          </h1>
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
            Learn more about Gamer's Nexus and our mission to provide the best
            gaming gear.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

// Contact Page
const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-heading font-bold text-gradient-cyber mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
            Get in touch with our gaming specialists for support and inquiries.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

// 404 Page
const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-heading font-bold text-gradient-cyber mb-4">
          404
        </h1>
        <p className="text-xl text-foreground-secondary mb-8">Page not found</p>
        <a href="/" className="text-primary hover:text-primary-glow underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

const App = () => {
  const greetShownRef = useRef(false);

  const [showGreet, setShowGreet] = useState(() => {
    const hasBeenShown = sessionStorage.getItem("greetShown") === "true";
    if (hasBeenShown) {
      greetShownRef.current = true;
    }
    return !hasBeenShown;
  });

  useEffect(() => {
    if (showGreet) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showGreet]);

  const handleCloseGreet = () => {
    sessionStorage.setItem("greetShown", "true");
    greetShownRef.current = true;
    setShowGreet(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {showGreet && <Greet onClose={handleCloseGreet} />}
          {!showGreet && (
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          )}
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
