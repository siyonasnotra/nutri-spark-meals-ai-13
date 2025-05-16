
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import OnboardingFlow from "./pages/Onboarding/OnboardingFlow";
import Dashboard from "./pages/Dashboard/Dashboard";
import ScanFood from "./pages/Scan/ScanFood";
import Profile from "./pages/Profile/Profile";
import Grocery from "./pages/Grocery/Grocery";
import RecipeFinder from "./pages/RecipeFinder/RecipeFinder";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/onboarding" element={<OnboardingFlow />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/scan" element={<ScanFood />} />
          <Route path="/grocery" element={<Grocery />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/recipe-finder" element={<RecipeFinder />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
