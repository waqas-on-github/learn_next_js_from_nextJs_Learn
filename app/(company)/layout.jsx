import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <div className="bg-slate-950 p-[]">layout by company </div>
      {children}
    </div>
  );
};

export default layout;
