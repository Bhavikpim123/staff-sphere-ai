import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PublicNavbar from "@/components/layout/PublicNavbar";
import { toast } from "@/hooks/use-toast";
import { useAuth } from "@/context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login, user } = useAuth();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
    toast({ title: "Welcome back!", description: "You are now signed in." });
    const to = email.toLowerCase().includes("admin") ? "/admin/users" : "/dashboard/profile";
    navigate(to);
  };

  return (
    <>
      <PublicNavbar />
      <div className="min-h-[calc(100vh-3.5rem)] grid place-items-center surface-gradient">
        <Helmet>
          <title>Sign In — AI HR Platform</title>
          <meta name="description" content="Login to the AI HR Platform to access your dashboard." />
          <link rel="canonical" href={window.location.href} />
        </Helmet>
        <div className="w-full max-w-md bg-card border border-border rounded-xl p-6 shadow-elevated tilt-hover">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-semibold">Welcome Back</h1>
            <p className="text-sm text-muted-foreground">Sign in to continue</p>
          </div>
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required placeholder="you@company.com" />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required placeholder="••••••••" />
            </div>
            <Button type="submit" variant="hero" className="w-full">Sign In</Button>
          </form>
          <div className="mt-4 text-sm flex justify-between">
            <Link to="/forgot" className="text-primary underline">Forgot password?</Link>
            <Link to="/signup" className="text-primary underline">Create account</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
