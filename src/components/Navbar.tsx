import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navbar = () => {
  const user = false; // You can set this based on your authentication logic.

  return (
    <div className="h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40">
      {/* MOBILE MENU */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* LOGO */}
      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href="/">Massimo</Link>
      </div>
      {/* RIGHT LINKS */}
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">

        {/* LEFT LINKS */}
        <div className="hidden md:flex gap-4 flex-1 justify-end">
          <Link href="/">Home</Link>
          <Link href="/About">About</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/pages">Pages</Link>
          <Link href="/Blog">Blog</Link>
          <Link href="/">Contact</Link>
        </div>

        <div className="flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md">
          <Image src="/phone.png" alt="" width={20} height={20} />
          <Link href="/Reservation"> {/* Use the Link component */}
            <span>Find Reservation</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
