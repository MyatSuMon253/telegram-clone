'use client'

import { AvatarProps } from "@/app/types";
import Image from "next/image";

const Avatar = ({ avatarId, setAvatarId }: AvatarProps) => {
  return (
    <div
      className="avatar cursor-pointer mx-auto mb-5 tooltip"
      data-tip="Click to regenerate new avatar"
      onClick={() => setAvatarId((Math.random() * 20).toFixed())}
    >
      <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <Image
          src={`https://robohash.org/${avatarId}.png`}
          width={256}
          height={256}
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Avatar;
