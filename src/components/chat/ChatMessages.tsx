import { MessageSquare } from "lucide-react";
import classNames from "classnames";

export default function ChatMessages({
    selected,
    messages,
}: {
    selected: boolean;
    messages: { fromUser: boolean; text: string }[];
}) {
    if (!selected) {
        return (
            <div className="mt-10 flex-1 p-4 text-center text-lg text-gray-400 flex flex-col items-center justify-center">
                <MessageSquare className="w-20 h-20 mb-4 text-gray-300 dark:text-gray-600" />
                <p>Select a conversation or start a new chat</p>
            </div>
        );
    }

    return (
        <div className="flex-1 p-4 overflow-y-auto bg-gray-100 dark:bg-black space-y-3">
            {messages.map((msg, idx) => (
                <div
                    key={idx}
                    className={classNames(
                        "max-w-sm px-4 py-2 rounded-lg",
                        msg.fromUser
                            ? "bg-blue-500 text-white self-end ml-auto"
                            : "bg-blue-100 dark:bg-blue-800 text-black dark:text-white self-start mr-auto"
                    )}
                >
                    {msg.text}
                </div>
            ))}
        </div>
    );
}
