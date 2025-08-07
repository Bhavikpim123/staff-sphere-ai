import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const series = [
  { month: "Jan", sentiment: 0.12 },
  { month: "Feb", sentiment: 0.35 },
  { month: "Mar", sentiment: 0.28 },
  { month: "Apr", sentiment: 0.52 },
  { month: "May", sentiment: 0.42 },
];

const SentimentAnalytics = () => {
  return (
    <DashboardLayout title="Sentiment Analytics">
      <Helmet>
        <title>Sentiment Analytics — AI HR Platform</title>
        <meta name="description" content="Track sentiment trends over time." />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <Card className="tilt-hover">
        <CardHeader>
          <CardTitle>Average Sentiment Over Time</CardTitle>
        </CardHeader>
        <CardContent style={{height: 320}}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={series}>
              <defs>
                <linearGradient id="colorSent" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))"/>
              <YAxis stroke="hsl(var(--muted-foreground))" domain={[0,1]} />
              <Tooltip cursor={{ stroke: 'hsl(var(--border))' }} contentStyle={{ background: 'hsl(var(--card))', borderColor: 'hsl(var(--border))' }}/>
              <Area type="monotone" dataKey="sentiment" stroke="hsl(var(--primary))" fillOpacity={1} fill="url(#colorSent)" />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default SentimentAnalytics;
