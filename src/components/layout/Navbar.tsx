import React, { type ReactElement } from "react";

const pages = [
  { name: "Home", url: "/" },
  { name: "Review", url: "/review" },
  { name: "About", url: "/about" },
];

function Navbar(): ReactElement {
  return (
    <div className="min-h-[5rem] bg-orange-500 text-white flex font-semibold">
      <div className="flex justify-between items-center max-w-7xl w-full mx-auto">
        <h1 className="text-2xl ">Curtain Measure</h1>

        <div className="flex space-x-2 cursor-pointer">
          {pages.map((page) => (
            <p key={page.name} className="hover:text-orange-900">
              {page.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
