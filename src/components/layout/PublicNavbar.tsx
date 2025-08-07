import { Link } from "react-router-dom";

export default function PublicNavbar() {
  return (
    <header className="w-full border-b bg-background/80 backdrop-blur">
      <nav className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <Link to="/" className="font-semibold">AI HR Platform</Link>
        <div className="flex items-center gap-4 text-sm">
          <Link to="/login" className="text-muted-foreground hover:text-foreground">Login</Link>
          <Link to="/signup" className="text-primary hover:underline">Sign Up</Link>
        </div>
      </nav>
    </header>
  );
}
