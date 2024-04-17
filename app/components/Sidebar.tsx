"use client";

import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { fetchUser } from "../lib/fetchers";
import { useUser } from "../store/userStore";
import { shallow } from "zustand/shallow";
import Searchbar from "./Searchbar";
import ChatList from "./ChatList";

const Sidebar = () => {
  const [cookie, setCookie] = useCookies(["user"]);
  const { myUser, setUser } = useUser(
    (state) => ({ myUser: state.myUser, setUser: state.setUser }),
    shallow
  );

  useEffect(() => {
    fetchUser(cookie, setUser);
    console.log(myUser);
  }, [cookie, setUser, myUser]);

  return (
    <div className="w-full md:block sidebar z-10 border-r-2 border-slate-400 md:w-1/2 lg:w-1/3 p-3 bg-white">
      {/* SEARCHBAR */}
      <Searchbar user={myUser} />
      {/* CHATLIST */}
      {myUser && <ChatList mySelf={myUser} />}
    </div>
  );
};

export default Sidebar;
