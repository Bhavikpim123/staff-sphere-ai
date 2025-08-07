import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

export default function RoleBasedRoute({ roles, element }: { roles: ("admin"|"employee")[]; element: ReactNode }) {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) return <Navigate to="/login" replace />;
  if (roles.length && user && !roles.includes(user.role)) return <Navigate to="/unauthorized" replace />;

  return <>{element}</>;
}
