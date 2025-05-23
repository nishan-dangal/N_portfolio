import React from "react";
// import NavLink from "./NavLink";
// import NavBar from "./NavBar";
import TopBar from "./TopBar";
import TopLink from "./TopLink";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <TopLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;