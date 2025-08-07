import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Helmet } from "react-helmet-async";

const data = [
  { respondent: "Alice", title: "Engagement Pulse Q1", date: "2025-05-22" },
  { respondent: "Bob", title: "Manager Check-in", date: "2025-05-20" },
];

const ResponsesDashboard = () => {
  return (
    <DashboardLayout title="Responses">
      <Helmet>
        <title>Responses — AI HR Platform</title>
        <meta name="description" content="View survey responses." />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <Card className="tilt-hover">
        <CardHeader>
          <CardTitle>Responses</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Respondent</TableHead>
                  <TableHead>Survey</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((r, i) => (
                  <TableRow key={i}>
                    <TableCell>{r.respondent}</TableCell>
                    <TableCell>{r.title}</TableCell>
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

export default ResponsesDashboard;
