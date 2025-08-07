import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { dept: "Sales", highRisk: 5 },
  { dept: "Engineering", highRisk: 2 },
  { dept: "HR", highRisk: 1 },
  { dept: "Support", highRisk: 4 },
];

const AttritionRisk = () => {
  return (
    <DashboardLayout title="Attrition Risk">
      <Helmet>
        <title>Attrition Risk — AI HR Platform</title>
        <meta name="description" content="Monitor attrition risk across departments." />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <Card className="tilt-hover">
        <CardHeader>
          <CardTitle>High‑Risk Employees by Department</CardTitle>
        </CardHeader>
        <CardContent style={{height: 320}}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="dept" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip cursor={{ fill: 'hsl(var(--muted)/0.3)' }} contentStyle={{ background: 'hsl(var(--card))', borderColor: 'hsl(var(--border))' }}/>
              <Bar dataKey="highRisk" fill="hsl(var(--accent))" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default AttritionRisk;
