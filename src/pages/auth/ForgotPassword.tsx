import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`If an account exists for ${email}, you will receive reset instructions.`);
  };

  return (
    <div className="min-h-screen grid place-items-center surface-gradient">
      <Helmet>
        <title>Forgot Password — AI HR Platform</title>
        <meta name="description" content="Reset your password for the AI HR Platform." />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <div className="w-full max-w-md bg-card border border-border rounded-xl p-6 shadow-elevated tilt-hover">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold">Reset password</h1>
          <p className="text-sm text-muted-foreground">We'll email you a link</p>
        </div>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
          </div>
          <Button type="submit" variant="hero" className="w-full">Send reset link</Button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
