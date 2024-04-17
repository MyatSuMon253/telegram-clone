import { userProps } from "@/app/types";
import { FlashIcon } from "@/app/utils/icons";
import Image from "next/image";
import CallBtn from "./CallBtn";

const Topbar = ({ selectedUser }: { selectedUser: userProps }) => {
  function handleClick() {
    document.querySelector(".messages")?.classList.add("hidden");
    document.querySelector(".sidebar")?.classList.add("hidden");
  }

  return (
    <div className={`bg-white ${selectedUser ? "" : "md:hidden"}`}>
      <div className="w-full px-10 py-3 flex justify-between items-center">
        <div className="flex gap-3">
          <button onClick={handleClick} className="md:hidden">
            <FlashIcon />
          </button>
          <div className="avatar ml-3 cursor-auto">
            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <Image
                src={selectedUser?.imageId || ""}
                width={256}
                height={256}
                alt="avatar"
              />
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h3 className="font-semibold text-black text-md">
              {selectedUser?.name}
            </h3>
            <p className="text-[#797991]">online</p>
          </div>
        </div>
        {/* CALLBTN */}
        <CallBtn />
      </div>
    </div>
  );
};

export default Topbar;
