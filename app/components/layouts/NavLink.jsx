"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, ...rest }) => {
  // will give current path where im on
  const pathname = usePathname();
  console.log(pathname);
  const isActive = href === pathname;

  return (
    <div>
      <Link href={href} {...rest} className={isActive ? "text-cyan-600" : ""} />
    </div>
  );
};

export default NavLink;
