"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

type FooterLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

const FooterLink: React.FC<FooterLinkProps> = ({ href, children, className = "" }) => {
  const pathname = usePathname();

  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={`
        text-gray400
        hover:!text-greenlight 
        transition-colors 
        duration-200  
        taxt-base
        font-medium
        leading-5
        ${isActive ? "text-greenlight" : ""}
        ${className}
      `}
    >
      {children}
    </Link>
  );
};

export default FooterLink;