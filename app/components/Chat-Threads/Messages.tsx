"use client";

import { useSelectedUser } from "@/app/store/userStore";
import MessageInput from "./MessageInput";
import MessageList from "./MessageList";
import Topbar from "./Topbar";

const Messages = () => {
  const selectedUser = useSelectedUser((state: any) => state.selectedUser);

  return (
    <div className="bg-image messages w-full min-h-screen z-0 hidden md:w-1/2 lg:w-2/3 md:flex flex-col">
      {/* TOPBAR */}
      <Topbar selectedUser={selectedUser} />
      <div
        className={`max-w-sm md:max-w-3xl w-full mx-auto mt-auto mb-10 ${
          selectedUser ? "" : "md:hidden"
        }`}
      >
        {/* MESSAGE LIST */}
        <MessageList />
        {/* MESSAGE INPUT */}
        <MessageInput />
      </div>
    </div>
  );
};

export default Messages;
