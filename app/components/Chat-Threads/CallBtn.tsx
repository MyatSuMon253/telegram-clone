"use client";

import { useSelectedUser, useUser } from "@/app/store/userStore";
import { PhoneIcon } from "@/app/utils/icons";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";
import { io } from "socket.io-client";

const CallBtn = () => {
  const router = useRouter();
  const socket = io("http://localhost:4000");
  const [cookie] = useCookies(["user"]);
  const selectedUser = useSelectedUser((state: any) => state.selectedUser);
  const myUser = useUser((state: any) => state.myUser);

  function handleClick() {
    socket.emit(
      "private message",
      selectedUser?.email,
      myUser.name + " is calling " + selectedUser.name,
      cookie.user
    );
    router.push('/chat/room')
  }
  return (
    <button onClick={handleClick}>
      <PhoneIcon />
    </button>
  );
};

export default CallBtn;
