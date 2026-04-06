import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import ResearchAutomation from "./pages/ResearchAutomation.tsx";
import ResearchInfrastructure from "./pages/ResearchInfrastructure.tsx";
import ResearchGovernance from "./pages/ResearchGovernance.tsx";
import ResearchInnovation from "./pages/ResearchInnovation.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/research/automation" element={<ResearchAutomation />} />
          <Route path="/research/infrastructure" element={<ResearchInfrastructure />} />
          <Route path="/research/governance" element={<ResearchGovernance />} />
          <Route path="/research/innovation" element={<ResearchInnovation />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
