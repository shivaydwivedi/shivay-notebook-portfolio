"use client";

import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  return (
    <form
      className="grid gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const subject = encodeURIComponent(String(data.get("subject") || "Portfolio contact"));
        const body = encodeURIComponent(String(data.get("message") || ""));
        window.location.href = `mailto:shivay@example.com?subject=${subject}&body=${body}`;
      }}
    >
      <label className="grid gap-2 text-sm font-medium">
        Name
        <input className="h-11 rounded-md border border-border bg-background px-3 outline-none focus:ring-2 focus:ring-ring" name="name" required />
      </label>
      <label className="grid gap-2 text-sm font-medium">
        Email
        <input className="h-11 rounded-md border border-border bg-background px-3 outline-none focus:ring-2 focus:ring-ring" name="email" type="email" required />
      </label>
      <label className="grid gap-2 text-sm font-medium">
        Subject
        <input className="h-11 rounded-md border border-border bg-background px-3 outline-none focus:ring-2 focus:ring-ring" name="subject" required />
      </label>
      <label className="grid gap-2 text-sm font-medium">
        Message
        <textarea className="min-h-32 rounded-md border border-border bg-background p-3 outline-none focus:ring-2 focus:ring-ring" name="message" required />
      </label>
      <Button type="submit" className="w-fit">
        <Send className="size-4" /> Send note
      </Button>
    </form>
  );
}
