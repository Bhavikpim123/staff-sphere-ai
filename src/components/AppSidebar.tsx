import { NavLink, useLocation } from "react-router-dom";
import { LayoutDashboard, User, ClipboardList, MessageSquare, Users, ClipboardType, BarChart3 } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { useAuth } from "@/context/AuthContext";

const items = {
  common: [
    { title: "Dashboard", url: "/dashboard/profile", icon: LayoutDashboard },
  ],
  employee: [
    { title: "My Profile", url: "/dashboard/profile", icon: User },
    { title: "My Surveys", url: "/dashboard/surveys", icon: ClipboardList },
    { title: "My Feedback", url: "/dashboard/feedback", icon: MessageSquare },
  ],
  admin: [
    { title: "User Management", url: "/admin/users", icon: Users },
    { title: "Survey Builder", url: "/admin/surveys", icon: ClipboardType },
    { title: "Responses", url: "/admin/responses", icon: ClipboardList },
    { title: "Sentiment Analytics", url: "/analytics/sentiment", icon: BarChart3 },
    { title: "Attrition Risk", url: "/analytics/attrition", icon: BarChart3 },
  ],
};

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const { user } = useAuth();
  const location = useLocation();

  const allItems = [
    ...items.common,
    ...(user?.role === "admin" ? items.admin : items.employee),
  ];

  const isActive = (path: string) => location.pathname === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium" : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground";

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {allItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className="mr-2 h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
