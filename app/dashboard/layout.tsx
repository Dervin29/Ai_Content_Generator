import React from "react";
import SideNav from "./_components/SideNav";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-screen-lg mx-auto h-screen p-5 ">
      <div className="">
        <SideNav />
      </div>
      <div className=" ">
        {children}</div>
    </div>
  );
}

export default layout;
