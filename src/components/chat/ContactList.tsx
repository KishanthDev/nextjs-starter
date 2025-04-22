import { CircleUser } from "lucide-react";
import classNames from "classnames";
import Contact from "../../types/Contact";

type Props = {
  contacts: Contact[];
  selectedContact: Contact | null;
  onSelect: (contact: Contact) => void;
};

const statusColor = {
  online: "bg-green-500",
  offline: "bg-gray-400",
  busy: "bg-red-500",
};

export default function ContactList({
  contacts,
  selectedContact,
  onSelect,
}: Props) {
  return (
    <div className="w-1/3 border-r border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-900">
      <h2 className="p-6 text-xl font-normal text-blue-500">Chats</h2>
      {contacts.map((contact) => (
        <div
          key={contact.id}
          onClick={() => onSelect(contact)}
          className={classNames(
            "flex cursor-pointer items-center gap-3 p-3 hover:bg-gray-200 dark:hover:bg-zinc-700",
            selectedContact?.id === contact.id
                ? "bg-gray-200 shadow dark:bg-zinc-700"
              : "",
            "border-b border-gray-300 dark:border-zinc-800",
          )}
        >
          <div className="relative">
            <CircleUser className="h-10 w-10 text-gray-600 dark:text-gray-300" />
            <span
              className={classNames(
                "absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white dark:border-black",
                statusColor[contact.status],
              )}
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <span className="font-medium">{contact.name}</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {contact.time}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="w-[140px] truncate text-sm text-gray-600 dark:text-gray-400">
                {contact.recentMsg}
              </span>
              {contact.unread > 0 && (
                <span className="ml-2 rounded-full bg-green-500 px-2 text-xs text-white">
                  {contact.unread}
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
