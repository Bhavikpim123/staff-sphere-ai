import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Helmet } from "react-helmet-async";

type Question = { id: string; text: string; type: "single" | "multiple" | "text" };

const SurveyBuilder = () => {
  const [title, setTitle] = useState("New Pulse Survey");
  const [questions, setQuestions] = useState<Question[]>([]);

  const addQuestion = () => {
    setQuestions((q) => [
      ...q,
      { id: crypto.randomUUID(), text: "", type: "single" },
    ]);
  };

  const update = (id: string, patch: Partial<Question>) => {
    setQuestions((q) => q.map((x) => (x.id === id ? { ...x, ...patch } : x)));
  };

  const remove = (id: string) => setQuestions((q) => q.filter((x) => x.id !== id));

  const save = () => {
    const payload = { title, questions };
    // Mock save
    console.log("Survey JSON", payload);
    alert("Survey JSON printed to console");
  };

  return (
    <DashboardLayout title="Survey Builder">
      <Helmet>
        <title>Survey Builder — AI HR Platform</title>
        <meta name="description" content="Create and edit pulse surveys." />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <Card className="tilt-hover">
        <CardHeader className="flex-row items-center justify-between">
          <CardTitle>Builder</CardTitle>
          <div className="space-x-2">
            <Button variant="subtle" onClick={addQuestion}>Add Question</Button>
            <Button variant="hero" onClick={save}>Save</Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input value={title} onChange={(e)=>setTitle(e.target.value)} />
          {questions.map((q) => (
            <div key={q.id} className="border rounded-md p-3 grid md:grid-cols-4 gap-3">
              <div className="md:col-span-3">
                <Input placeholder="Question text" value={q.text} onChange={(e)=>update(q.id,{ text: e.target.value })} />
              </div>
              <div>
                <Select value={q.type} onValueChange={(v)=>update(q.id,{ type: v as Question["type"] })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="single">Single Choice</SelectItem>
                    <SelectItem value="multiple">Multiple Choice</SelectItem>
                    <SelectItem value="text">Text</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="md:col-span-4 text-right">
                <Button variant="destructive" size="sm" onClick={()=>remove(q.id)}>Remove</Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default SurveyBuilder;
