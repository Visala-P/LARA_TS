import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ResearchGroup from "./components/ResearchGroup";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* Use Vite's BASE_URL as the router basename so client routes work
          when the site is hosted under a repo path (e.g. /LARA_TS/). */}
      {
        (() => {
          const base = import.meta.env.BASE_URL || "/";
          const basename = base === "/" ? "" : base.replace(/\/$/, "");
          return (
            <BrowserRouter basename={basename}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/research" element={<ResearchGroup />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          );
        })()
      }
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
