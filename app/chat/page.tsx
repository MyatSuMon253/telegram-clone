import React from "react";
import Sidebar from "../components/Sidebar";
import Messages from "../components/Chat-Threads/Messages";

const page = () => {
  return (
    <div className="min-h-screen">
      <div className="mx-auto flex">
        {/* SIDEBAR */}
        <Sidebar />
        {/* MESSAGES */}
        <Messages />
      </div>
    </div>
  );
};

export default page;
