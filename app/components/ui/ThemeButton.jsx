"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme();

  //   const [mounted, setmounted] = useState(false);
  //   useEffect(() => {
  //     setmounted(true);
  //   }, []);
  //   if (!mounted) {
  //     return null;
  //   }

  return (
    <button
      onClick={() => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
      }}
    >
      {resolvedTheme === "dark" ? "light" : "dark"}
    </button>
  );
};

export default ThemeButton;
