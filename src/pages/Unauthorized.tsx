import { Helmet } from "react-helmet-async";

const Unauthorized = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Helmet>
        <title>Unauthorized — AI HR Platform</title>
        <meta name="description" content="Unauthorized access page" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <div className="text-center p-8 border rounded-lg bg-card shadow-elevated">
        <h1 className="text-3xl font-bold mb-2">Unauthorized</h1>
        <p className="text-muted-foreground mb-4">You do not have access to this page.</p>
        <a href="/" className="text-primary underline">Go to Home</a>
      </div>
    </div>
  );
};

export default Unauthorized;
