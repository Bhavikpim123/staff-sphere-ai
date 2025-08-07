import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";

const ThankYou = () => {
  return (
    <DashboardLayout title="Thank You">
      <Helmet>
        <title>Thank You — AI HR Platform</title>
        <meta name="description" content="Survey submitted successfully." />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <Card className="max-w-lg mx-auto">
        <CardContent className="p-8 text-center">
          <div role="alert" className="p-4 rounded-md bg-green-100 text-green-800">Thank you! Your survey has been submitted.</div>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default ThankYou;
