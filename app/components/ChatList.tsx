import { useEffect } from "react";
import { io } from "socket.io-client";
import { shallow } from "zustand/shallow";
import { fetchUsers } from "../lib/fetchers";
import { useAllUsers } from "../store/userStore";
import { userProps } from "../types";
import ChatItem from "./ChatItem";

const ChatList = ({ mySelf }: { mySelf: userProps }) => {
  const { users, setUsers } = useAllUsers(
    (state: any) => ({ users: state.users, setUsers: state.setUsers }),
    shallow
  );

  const socket = io("http://localhost:4000");
  useEffect(() => {
    socket.on("new-user", () => {
      fetchUsers(mySelf, setUsers);
    });
  }, []);

  useEffect(() => {
    fetchUsers(mySelf, setUsers);
    console.log(users);
  }, [users]);

  return (
    <div className="my-5 flex flex-col">
      {/* ChatItem */}
      {users ? (
        users
          ?.reverse()
          ?.map((user: any) => <ChatItem key={user._id} user={user} />)
      ) : (
        <span className="loading loading-ring w-16"></span>
      )}
    </div>
  );
};

export default ChatList;
