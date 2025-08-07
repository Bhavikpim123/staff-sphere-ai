import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { useAuth } from "@/context/AuthContext";

const Profile = () => {
  const { user } = useAuth();
  return (
    <DashboardLayout title="My Profile">
      <Helmet>
        <title>My Profile — AI HR Platform</title>
        <meta name="description" content="View your profile and role details." />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="tilt-hover">
          <CardHeader>
            <CardTitle>Basic Info</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div><span className="text-muted-foreground">Name:</span> {user?.name}</div>
            <div><span className="text-muted-foreground">Email:</span> {user?.email}</div>
            <div><span className="text-muted-foreground">Role:</span> {user?.role}</div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
