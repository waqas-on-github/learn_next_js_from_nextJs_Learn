import React from "react";
import NavLink from "./NavLink";

const Header = () => {
  return (
    <div className="p-4 bg-slate-300 flex items-center gap-5">
      <NavLink href="/about"> About </NavLink>
      <NavLink href="/team"> Team </NavLink>
      <NavLink href="/posts"> Blog</NavLink>
    </div>
  );
};

export default Header;
