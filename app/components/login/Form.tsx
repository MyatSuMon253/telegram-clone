"use client";

import { useState } from "react";
import Avatar from "./Avatar";
import { handleSubmit } from "@/app/lib/fetchers";
import { useRouter } from "next/navigation";

const Form = () => {
  const [avatarId, setAvatarId] = useState((Math.random() * 20).toFixed());
  const router = useRouter();

  return (
    <form
      onSubmit={(e) => handleSubmit(e, router, avatarId)}
      className="flex flex-col gap-5"
    >
      {/* AVATAR */}
      <Avatar avatarId={avatarId} setAvatarId={setAvatarId} />
      <div className="flex flex-col xl:flex-row gap-5">
        <div className="form-control w-full">
          <label htmlFor="" className="label">
            <span className="label-text text-lg">What is your name?</span>
          </label>
          <input
            type="text"
            placeholder="Username"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control w-full">
          <label htmlFor="" className="label">
            <span className="label-text text-lg">Put your email</span>
          </label>
          <input
            type="text"
            placeholder="Email"
            className="input input-bordered w-full"
            required
          />
        </div>
      </div>
      <button className="btn">Login</button>
    </form>
  );
};

export default Form;
