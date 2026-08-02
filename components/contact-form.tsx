"use client";

import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactForm({ recipientEmail }: { recipientEmail?: string }) {
  const disabled = !recipientEmail;

  return (
    <form
      className="grid gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        if (!recipientEmail) return;

        const data = new FormData(event.currentTarget);
        const name = String(data.get("name") || "");
        const sender = String(data.get("sender") || "");
        const subject = encodeURIComponent(String(data.get("subject") || "Portfolio contact"));
        const message = String(data.get("message") || "");
        const body = encodeURIComponent(`Name: ${name}\nSender email: ${sender}\n\n${message}`);
        window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
      }}
    >
      <label className="grid gap-2 text-sm font-medium">
        Name
        <input className="h-11 rounded-md border border-border bg-background px-3 outline-none focus:ring-2 focus:ring-ring" name="name" required disabled={disabled} />
      </label>
      <label className="grid gap-2 text-sm font-medium">
        Email
        <input className="h-11 rounded-md border border-border bg-background px-3 outline-none focus:ring-2 focus:ring-ring" name="sender" type="email" required disabled={disabled} />
      </label>
      <label className="grid gap-2 text-sm font-medium">
        Subject
        <input className="h-11 rounded-md border border-border bg-background px-3 outline-none focus:ring-2 focus:ring-ring" name="subject" required disabled={disabled} />
      </label>
      <label className="grid gap-2 text-sm font-medium">
        Message
        <textarea className="min-h-32 rounded-md border border-border bg-background p-3 outline-none focus:ring-2 focus:ring-ring" name="message" required disabled={disabled} />
      </label>
      <Button type="submit" className="w-fit" disabled={disabled}>
        <Send className="size-4" aria-hidden="true" /> {disabled ? "Contact pending" : "Open email client"}
      </Button>
    </form>
  );
}
