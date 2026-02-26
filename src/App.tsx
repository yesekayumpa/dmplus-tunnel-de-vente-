import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Thanks from "@/pages/Thanks";
import { useEffect } from 'react';
import ReactPixel from 'react-facebook-pixel';
import './styles/animations.css';

const queryClient = new QueryClient();

// Création d'un composant séparé pour le contenu des routes
function AppContent() {
  const location = useLocation();

  useEffect(() => {
    const pixelId = import.meta.env.VITE_FB_PIXEL_ID || '768484349176151';
    if (import.meta.env.PROD && pixelId) {
      ReactPixel.init(pixelId, undefined, { 
        autoConfig: true, 
        debug: false 
      });
      ReactPixel.pageView();
      if(location.pathname === '/merci') {
        ReactPixel.track('Purchase', {
          value: 4900, 
          currency: 'XOF'
        });
      }
    }
  }, [location]);

  return (
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/merci" element={<Thanks />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;