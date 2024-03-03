import React from "react";
import NavLink from "./NavLink";
import dynamic from "next/dynamic";
import SignInSignUp from "../SignInSignUp";
// every component either its server/client component server side renderd at first which cause
// hydration for client specific components
const ThemeButton = dynamic(() => import("../../components/ui/ThemeButton"), {
  ssr: false,
});

const Header = () => {
  return (
    <div className="p-4 flex items-center gap-5">
      <NavLink href="/about"> About </NavLink>
      <NavLink href="/team"> Team </NavLink>
      <NavLink href="/posts"> Blog</NavLink>
      <NavLink href="/guestbook"> Gusetbook </NavLink>
      <div className="flex items-center gap-4 ">
        <ThemeButton />
        <SignInSignUp />
      </div>
    </div>
  );
};

export default Header;
