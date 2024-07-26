import { UserProfile } from "@clerk/nextjs";
import React from "react";

const Settings = () => {
  return (
    <div className=" flex justify-center items-center h-auto w-full p-5">
      <UserProfile />

    </div>
  );
};

export default Settings;
