"use client";

import { fetchMessages } from "@/app/lib/fetchers";
import { useMessages, useSelectedUser, useUser } from "@/app/store/userStore";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useEffect } from "react";
import { io } from "socket.io-client";
import { shallow } from "zustand/shallow";
import MessageItem from "./MessageItem";

const MessageList = () => {
  const sender = useUser((state: any) => state.myUser);
  const receiver = useSelectedUser((state: any) => state.selectedUser);
  const { messages, setMessages } = useMessages(
    (state: any) => ({
      messages: state.messages,
      setMessages: state.setMessages,
    }),
    shallow
  );

  const [parent] = useAutoAnimate();

  const socket = io("http://localhost:4000");
  socket.on("refresh", () => {
    fetchMessages(sender, receiver, setMessages);
  });

  useEffect(() => {
    fetchMessages(sender, receiver, setMessages);
  }, [receiver, sender, setMessages]);

  return (
    <div
      ref={parent}
      className="w-full mb-10 flex flex-col max-h-[75vh] overflow-auto no-scrollbar"
    >
      {messages
        ? messages?.map((item: any, i: number) => (
            <MessageItem
              key={i}
              user={sender.email == item.sender ? true : false}
              message={item.message}
            ></MessageItem>
          ))
        : ""}
    </div>
  );
};

export default MessageList;
