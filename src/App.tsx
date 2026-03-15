import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import SistemasPage from "./pages/Sistemas.tsx";
import MarketingPage from "./pages/Marketing.tsx";
import CyberSecurityPage from "./pages/CyberSecurity.tsx";
import AutomacaoPage from "./pages/Automacao.tsx";
import SobrePage from "./pages/Sobre.tsx";
import ContatoPage from "./pages/Contato.tsx";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sistemas" element={<SistemasPage />} />
          <Route path="/marketing" element={<MarketingPage />} />
          <Route path="/cybersecurity" element={<CyberSecurityPage />} />
          <Route path="/automacao" element={<AutomacaoPage />} />
          <Route path="/sobre" element={<SobrePage />} />
          <Route path="/contato" element={<ContatoPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
