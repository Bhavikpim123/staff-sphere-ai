import PublicNavbar from "@/components/layout/PublicNavbar";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>AI HR Platform — Modern Employee Experience</title>
        <meta name="description" content="AI-powered HR platform with surveys, feedback, analytics, and chatbot." />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <PublicNavbar />
      <main className="flex-1 flex items-center justify-center">
        <section className="text-center max-w-3xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Empower your teams with AI‑driven HR</h1>
          <p className="text-lg text-muted-foreground mb-8">Run pulse surveys, gather feedback, and visualize sentiment and attrition risks in a beautiful, responsive dashboard.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild variant="hero"><Link to="/login">Sign In</Link></Button>
            <Button asChild variant="outline"><Link to="/signup">Create Account</Link></Button>
          </div>
          <div className="mt-6 text-sm text-muted-foreground">
            Explore after sign-in: Profile, Surveys, Feedback (Employee) or Users, Survey Builder, Analytics (Admin)
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
