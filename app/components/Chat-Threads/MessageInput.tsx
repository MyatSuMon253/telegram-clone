"use client";

import { useSelectedUser } from "@/app/store/userStore";
import { SendMsIcon, SmileFaceIcon } from "@/app/utils/icons";
import dynamic from "next/dynamic";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { io } from "socket.io-client";

const Picker = dynamic(
  () => {
    return import("emoji-picker-react");
  },
  { ssr: false }
);

const MessageInput = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [showEmojies, setShowEmojies] = useState(false);
  const selectedUser = useSelectedUser((state: any) => state.selectedUser);
  const [cookie, setCookie] = useCookies(["user"]);
  const socket = io("http://localhost:4000");

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    socket.emit("private message", selectedUser.email, inputValue);
    setInputValue("");
  }

  function onEmojiClick(emojiObject: { emoji: string | number }) {
    setInputValue((pre) => pre + emojiObject.emoji);
  }

  return (
    <form className="mt-auto relative" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Message"
          className="input w-full pl-14 input-bordered "
        />
      </div>
      <button
        type="button"
        onClick={() => setShowEmojies(!showEmojies)}
        className="absolute top-1/2 left-5 -translate-y-1/2"
      >
        <SmileFaceIcon />
      </button>
      {showEmojies && (
        <div className="absolute bottom-full">
          <Picker onEmojiClick={onEmojiClick} />
        </div>
      )}
      <button
        type="submit"
        className="absolute top-1/2 right-5 -translate-y-1/2"
      >
        <SendMsIcon />
      </button>
    </form>
  );
};

export default MessageInput;
