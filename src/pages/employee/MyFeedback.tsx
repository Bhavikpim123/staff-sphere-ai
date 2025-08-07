import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Helmet } from "react-helmet-async";

const entries = [
  { text: "Loving the new flexible hours.", sentiment: "positive" },
  { text: "The VPN is unstable sometimes.", sentiment: "negative" },
];

const color = (s: string) => (s === "positive" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800");

const MyFeedback = () => {
  return (
    <DashboardLayout title="My Feedback">
      <Helmet>
        <title>My Feedback — AI HR Platform</title>
        <meta name="description" content="Review your submitted feedback." />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <div className="grid gap-4 md:grid-cols-2">
        {entries.map((e, i) => (
          <Card key={i} className="tilt-hover">
            <CardHeader className="flex-row items-center justify-between">
              <CardTitle>Feedback</CardTitle>
              <Badge className={color(e.sentiment)}>{e.sentiment}</Badge>
            </CardHeader>
            <CardContent>{e.text}</CardContent>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default MyFeedback;
