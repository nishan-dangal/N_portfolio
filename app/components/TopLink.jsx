"use client";
import Link from "next/link";
import React, { useState } from "react";
import MenuOverlay from "./MenuOverlay";
import TopBar from "./TopBar";

export const TopLink = ({ href, title }) => {
  return (
    <Link href={href} >
    <span className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">
      {title}
    </span>
    </Link>
  );
};

export default TopLink;
