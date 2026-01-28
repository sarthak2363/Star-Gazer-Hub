import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Stargazing from "@/pages/Stargazing";
import CorporateStargazing from "@/pages/CorporateStargazing";
import SchoolPrograms from "@/pages/SchoolPrograms";
import Astrotour from "@/pages/Astrotour";
import LadakhAstrotour from "@/pages/LadakhAstrotour";
import aeromodelling from "@/pages/aeromodelling";
import AstronomicalCalendar from "@/pages/AstronomicalCalendar";
import TermsConditions from "@/pages/TermsConditions";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import RefundPolicy from "@/pages/RefundPolicy";
import AboutUs from "@/pages/AboutUs";
import StudentSpecial from "@/pages/StudentSpecial";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={AboutUs} />
      <Route path="/stargazing" component={Stargazing} />
      <Route path="/stargazing/corporate" component={CorporateStargazing} />
      <Route path="/stargazing/school" component={SchoolPrograms} />
      <Route path="/stargazing/studentspecial" component={StudentSpecial} />
      <Route path="/astrotour" component={Astrotour} />
      <Route path="/astrotour/ladakh" component={LadakhAstrotour} />
      <Route path="/aeromodelling" component={aeromodelling} />
      <Route path="/calendar" component={AstronomicalCalendar} />
      <Route path="/terms" component={TermsConditions} />
      <Route path="/privacy" component={PrivacyPolicy} />
      <Route path="/refund" component={RefundPolicy} />
      <Route path="/student-special" component={StudentSpecial} />
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
