"use client";

import { useState } from "react";
import Contact from "../../types/Contact";
import ContactData from "../../data/Contact.json";
import ContactList from "./ContactList";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";

const sampleContacts: Contact[] = ContactData.map((contact) => ({
  ...contact,
  status: contact.status as "online" | "offline" | "busy",
}));

const sampleMessages: { fromUser: boolean; text: string }[] = [
  { fromUser: false, text: "Hi!" },
  { fromUser: false, text: "Sure thing! I'm gonna call you in 5, is it okay?" },
  { fromUser: true, text: "Awesome! Call me in 5 minutes.." },
  { fromUser: true, text: "👍🏻" },
];

export default function ChatUI() {
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  return (
    <div className="flex h-[calc(100vh-5rem)] border border-gray-300 bg-white text-black transition-colors dark:border-gray-700 dark:bg-zinc-900 dark:text-white">
      <ContactList
        contacts={sampleContacts}
        selectedContact={selectedContact}
        onSelect={setSelectedContact}
      />
      <div className="flex flex-1 flex-col min-h-0"> {/* min-h-0 prevents unwanted scrolling */}
        <ChatHeader contact={selectedContact} />
        <ChatMessages selected={!!selectedContact} messages={sampleMessages} />
        {selectedContact && <ChatInput />}
      </div>
    </div>
  );
}