import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Helmet } from "react-helmet-async";

const data = [
  { title: "Engagement Pulse Q1", status: "Pending", date: "2025-06-15" },
  { title: "Manager Check-in", status: "Completed", date: "2025-05-20" },
];

const MySurveys = () => {
  return (
    <DashboardLayout title="My Surveys">
      <Helmet>
        <title>My Surveys — AI HR Platform</title>
        <meta name="description" content="View and complete your surveys." />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <Card className="tilt-hover">
        <CardHeader>
          <CardTitle>Assigned Surveys</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((r) => (
                  <TableRow key={r.title}>
                    <TableCell>{r.title}</TableCell>
                    <TableCell>{r.status}</TableCell>
                    <TableCell>{r.date}</TableCell>
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

export default MySurveys;
