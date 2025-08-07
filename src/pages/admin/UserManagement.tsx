import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

const rows = [
  { name: "Alice", email: "alice@example.com", role: "employee" },
  { name: "Bob", email: "bob.admin@example.com", role: "admin" },
];

const UserManagement = () => {
  return (
    <DashboardLayout title="User Management">
      <Helmet>
        <title>User Management — AI HR Platform</title>
        <meta name="description" content="Manage users and roles." />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <Card className="tilt-hover">
        <CardHeader>
          <CardTitle>Users</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rows.map((u) => (
                  <TableRow key={u.email}>
                    <TableCell>{u.name}</TableCell>
                    <TableCell>{u.email}</TableCell>
                    <TableCell>{u.role}</TableCell>
                    <TableCell className="space-x-2">
                      <Button size="sm" variant="subtle">Edit</Button>
                      <Button size="sm" variant="destructive">Delete</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default UserManagement;
