"use client";

import React from "react";
import Link from "next/link";
import { IoChevronDown } from "react-icons/io5";

interface NavItemProps {
  label: string;
  href?: string;         // <-- Link support
  expandable?: boolean;
  isOpen?: boolean;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({
  label,
  href = "#",           // default link
  expandable = false,
  isOpen = false,
  onClick,
}) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="nav-link inline-flex gap-1 items-center justify-between cursor-pointer select-none"
    >
      <span
        className={`text-base font-medium leading-none text-gray800 hover:text-gray ${
          expandable ? "text-base font-medium leading-none text-gray800" : "text-base font-medium leading-none text-gray800"
        }`}
      >
        {label}
      </span>

      {expandable && (
        <IoChevronDown
          className={`transition-transform duration-300 text-gray800 ${
            isOpen ? "rotate-180 text-black" : "rotate-0 text-gray-400"
          }`}
          size={18}
        />
      )}
    </Link>
  );
};

export default NavItem;
