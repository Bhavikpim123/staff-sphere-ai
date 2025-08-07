import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth, UserRole } from "@/context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import PublicNavbar from "@/components/layout/PublicNavbar";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<UserRole>("employee");
  const { signup } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signup(name, email, password, role);
    navigate(role === "admin" ? "/admin/users" : "/dashboard/profile");
  };

  return (
    <>
      <PublicNavbar />
      <div className="min-h-[calc(100vh-3.5rem)] grid place-items-center surface-gradient">
        <Helmet>
          <title>Sign Up — AI HR Platform</title>
          <meta name="description" content="Create an account to use the AI HR Platform." />
          <link rel="canonical" href={window.location.href} />
        </Helmet>
        <div className="w-full max-w-md bg-card border border-border rounded-xl p-6 shadow-elevated tilt-hover">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-semibold">Create your account</h1>
            <p className="text-sm text-muted-foreground">Join the platform</p>
          </div>
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" value={name} onChange={(e)=>setName(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="role">Role</Label>
              <select id="role" className="w-full h-10 rounded-md border border-input bg-background px-3" value={role} onChange={(e)=>setRole(e.target.value as UserRole)}>
                <option value="employee">Employee</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <Button type="submit" variant="hero" className="w-full">Create Account</Button>
          </form>
          <div className="mt-4 text-sm text-center">
            <Link to="/login" className="text-primary underline">Already have an account? Sign in</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
