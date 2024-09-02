import Logo from "@/images/logo";
import Link from "next/link";
import React from "react";

const Header = ({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) => {
  return (
    <div className=" relative flex flex-auto justify-between p-6 w-full h-[85px] bg-gradient-to-b from-black via-black/70 to-transparent">
      <Link href={"/"}>
        <Logo className="absolute cursor-pointer size-20 top-0 bottom-0 left-6 right-0 origin-top-left" />
      </Link>
      <div className="space-x-5 flex justify-end items-start max-w-full">
        {children}
      </div>
    </div>
  );
};

export default Header;
