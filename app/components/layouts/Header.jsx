import React from "react";
import NavLink from "./NavLink";
import dynamic from "next/dynamic";
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
      <ThemeButton />
    </div>
  );
};

export default Header;
