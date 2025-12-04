"use client";

import Link from "next/link";

interface DSLinkProps {
    href: string;
    children: React.ReactNode;
    variant?: "primary" | "green" | "contrast";
    size?: "16" | "18";
    className?: string;
}

export default function DSLink({
    href,
    children,
    variant = "primary",
    size = "16",
    className = "",
}: DSLinkProps) {

    const base = "font-medium transition-all duration-200";

    const sizes = {
        "16": "text-base leading-[1.4]",
        "18": "text-lg leading-[1.4]",
    };

    const variants = {
        primary: `
      text-gray800 
       hover:underline hover:underline-offset-2
    `,
        green: `
      text-[#0D9488] 
       hover:underline hover:underline-offset-2
    `,
        contrast: `
      text-white 
       hover:underline hover:underline-offset-2
    `,
    };

    return (
        <Link
            href={href}
            className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
        >
            {children}
        </Link>
    );
}
