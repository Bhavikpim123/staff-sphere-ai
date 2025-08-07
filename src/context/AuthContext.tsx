import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";

export type UserRole = "admin" | "employee";
export type User = {
  name: string;
  email: string;
  role: UserRole;
};

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string, role: UserRole) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const STORAGE_KEY = "aihr:user";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        setUser(JSON.parse(raw));
      } catch {
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);

  useEffect(() => {
    if (user) localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    else localStorage.removeItem(STORAGE_KEY);
  }, [user]);

  const login = async (email: string, _password: string) => {
    // Mock: emails containing "admin" become admins
    const role: UserRole = email.toLowerCase().includes("admin") ? "admin" : "employee";
    setUser({ name: email.split("@")[0], email, role });
  };

  const signup = async (name: string, email: string, _password: string, role: UserRole) => {
    setUser({ name, email, role });
  };

  const logout = () => setUser(null);

  const value = useMemo(
    () => ({ user, login, logout, signup, isAuthenticated: !!user }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
