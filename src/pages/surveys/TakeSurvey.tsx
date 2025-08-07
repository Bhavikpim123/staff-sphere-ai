import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const schema = [
  { id: "q1", question: "How satisfied are you?", type: "single", options: ["Very", "Somewhat", "Not"] },
  { id: "q2", question: "What could be improved?", type: "text" },
];

type SingleQ = { id: string; question: string; type: "single"; options: string[] };

type AnyQ = SingleQ | { id: string; question: string; type: "text" };

const TakeSurvey = () => {
  const navigate = useNavigate();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/survey/thanks");
  };

  return (
    <DashboardLayout title="Take Survey">
      <Helmet>
        <title>Take Survey — AI HR Platform</title>
        <meta name="description" content="Answer assigned survey questions." />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <Card className="tilt-hover">
        <CardHeader>
          <CardTitle>Engagement Pulse Q1</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={submit} className="space-y-6">
            {(schema as AnyQ[]).map((q) => (
              <div key={q.id}>
                <Label className="mb-2 inline-block">{q.question}</Label>
                {q.type === "single" ? (
                  <div className="flex flex-wrap gap-2">
                    {(q as SingleQ).options.map((opt) => (
                      <label key={opt} className="inline-flex items-center gap-2 border rounded-md px-3 py-2 cursor-pointer">
                        <input type="radio" name={q.id} value={opt} />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                ) : (
                  <Textarea placeholder="Your answer" />
                )}
              </div>
            ))}
            <Button type="submit" variant="hero">Submit</Button>
          </form>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default TakeSurvey;
