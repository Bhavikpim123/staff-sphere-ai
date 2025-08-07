import { useState } from "react";
import { MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const canned: Record<string, string> = {
  "how do i apply for leave?": "Go to My Profile → Leave tab → Submit a new request.",
  "how to reset password?": "Use the Forgot Password link on the login page to receive a reset email.",
  "what surveys are pending?": "Check the My Surveys page for your pending items.",
};

export default function ChatbotFab() {
  const [open, setOpen] = useState(false);
  const [log, setLog] = useState<{ role: "user" | "bot"; text: string }[]>([
    { role: "bot", text: "Hi! Ask me about leave, password reset, or surveys." },
  ]);
  const [input, setInput] = useState("");

  const send = () => {
    const q = input.trim();
    if (!q) return;
    const reply = canned[q.toLowerCase()] ?? "Sorry, I don't know yet. Please contact HR.";
    setLog((l) => [...l, { role: "user", text: q }, { role: "bot", text: reply }]);
    setInput("");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {open && (
        <div className="w-80 h-96 bg-card border border-border rounded-lg shadow-elevated flex flex-col overflow-hidden mb-3">
          <div className="px-3 py-2 border-b">Chatbot</div>
          <div className="flex-1 p-3 space-y-2 overflow-auto">
            {log.map((m, i) => (
              <div key={i} className={m.role === "user" ? "text-right" : "text-left"}>
                <div className={`inline-block px-3 py-2 rounded-md ${m.role === "user" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>
          <div className="p-2 border-t flex items-center gap-2">
            <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message" onKeyDown={(e)=>{if(e.key==='Enter') send();}} />
            <Button variant="hero" size="icon" onClick={send} aria-label="Send"><Send /></Button>
          </div>
        </div>
      )}
      <Button variant="hero" size="icon" className="rounded-full" onClick={() => setOpen((v) => !v)} aria-label="Toggle chatbot">
        <MessageCircle />
      </Button>
    </div>
  );
}
