import { PropsWithChildren } from "react";
import { Helmet } from "react-helmet-async";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function DashboardLayout({ children, title }: PropsWithChildren<{ title?: string }>) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <SidebarProvider>
      <Helmet>
        <title>{title ? `${title} — AI HR Platform` : "Dashboard — AI HR Platform"}</title>
        <meta name="description" content="AI HR Platform dashboard for surveys, feedback and analytics." />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <SidebarInset>
          <header className="h-14 border-b flex items-center justify-between px-3">
            <div className="flex items-center gap-2">
              <SidebarTrigger />
              <span className="text-sm text-muted-foreground">AI HR Platform</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm">{user?.name} ({user?.role})</span>
              <Button variant="subtle" size="sm" onClick={handleLogout}>Logout</Button>
            </div>
          </header>
          <main className="p-4">{children}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
