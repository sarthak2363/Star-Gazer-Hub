import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Stargazing from "@/pages/Stargazing";
import Astrotour from "@/pages/Astrotour";
import Aeromodelling from "@/pages/Aeromodelling";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/stargazing" component={Stargazing} />
      <Route path="/astrotour" component={Astrotour} />
      <Route path="/aeromodelling" component={Aeromodelling} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
