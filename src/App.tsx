import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AuthProvider } from "@/context/AuthContext";
import ChatbotFab from "@/components/ChatbotFab";
import RoleBasedRoute from "@/components/RoleBasedRoute";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Unauthorized from "./pages/Unauthorized";

// Auth pages
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ForgotPassword from "./pages/auth/ForgotPassword";

// Employee
import Profile from "./pages/employee/Profile";
import MySurveys from "./pages/employee/MySurveys";
import MyFeedback from "./pages/employee/MyFeedback";

// Admin
import UserManagement from "./pages/admin/UserManagement";
import SurveyBuilder from "./pages/admin/SurveyBuilder";
import ResponsesDashboard from "./pages/admin/ResponsesDashboard";

// Analytics
import SentimentAnalytics from "./pages/analytics/SentimentAnalytics";
import AttritionRisk from "./pages/analytics/AttritionRisk";

// Surveys
import TakeSurvey from "./pages/surveys/TakeSurvey";
import ThankYou from "./pages/surveys/ThankYou";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <HelmetProvider>
        <AuthProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />

              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot" element={<ForgotPassword />} />
              <Route path="/unauthorized" element={<Unauthorized />} />

              <Route path="/dashboard/profile" element={<RoleBasedRoute roles={["employee","admin"]} element={<Profile />} />} />
              <Route path="/dashboard/surveys" element={<RoleBasedRoute roles={["employee","admin"]} element={<MySurveys />} />} />
              <Route path="/dashboard/feedback" element={<RoleBasedRoute roles={["employee","admin"]} element={<MyFeedback />} />} />

              <Route path="/admin/users" element={<RoleBasedRoute roles={["admin"]} element={<UserManagement />} />} />
              <Route path="/admin/surveys" element={<RoleBasedRoute roles={["admin"]} element={<SurveyBuilder />} />} />
              <Route path="/admin/responses" element={<RoleBasedRoute roles={["admin"]} element={<ResponsesDashboard />} />} />

              <Route path="/analytics/sentiment" element={<RoleBasedRoute roles={["admin"]} element={<SentimentAnalytics />} />} />
              <Route path="/analytics/attrition" element={<RoleBasedRoute roles={["admin"]} element={<AttritionRisk />} />} />

              <Route path="/survey/take" element={<RoleBasedRoute roles={["employee","admin"]} element={<TakeSurvey />} />} />
              <Route path="/survey/thanks" element={<RoleBasedRoute roles={["employee","admin"]} element={<ThankYou />} />} />

              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <ChatbotFab />
          </BrowserRouter>
        </AuthProvider>
      </HelmetProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
