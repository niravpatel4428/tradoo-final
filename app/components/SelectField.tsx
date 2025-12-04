"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface SelectFieldProps {
    label: string;
    options: string[];
    error?: string;
}

export default function SelectField({ label, options, error }: SelectFieldProps) {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("");
    const wrapperRef = useRef<HTMLDivElement>(null);

    // ⭐ Disable scroll when dropdown is open
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    // ⭐ Disable scroll only on mobile
    useEffect(() => {
        const isMobile = window.innerWidth <= 640; // sm breakpoint

        if (open && isMobile) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);


    return (
        <div className="flex flex-col gap-3" ref={wrapperRef}>
            <label className="text-base leading-5.5 font-medium text-gray800 capitalize">
                {label}
            </label>

            {/* Select Box */}
            <div className="relative w-full">
                <div
                    className={`
                    w-full flex items-center justify-between gap-2 rounded-2xl py-4 px-4
                    text-gray800 text-base font-medium leading-5.5 transition-all duration-300
                    bg-gray100 border-[1.5px] border-transparent hover:bg-gray50
                    ${open && !error ? "bg-white border-[#0D9488]! ring-[3px] ring-[#DBEFED]" : ""}
                    ${error ? "bg-white border-[#C94747]! ring-[3px] ring-[#F7E4E4]" : ""}
                `}
                    onClick={() => setOpen((prev) => !prev)}
                >
                    <span className="text-gray800">
                        {selected || "Select option"}
                    </span>

                    <span className="flex-none">
                        {open ? (
                            <ChevronUp className="size-5 text-gray800" />
                        ) : (
                            <ChevronDown className="size-5 text-gray800" />
                        )}
                    </span>
                </div>

                {/* Dropdown */}
                {open && (
                    <div className="fixed w-full z-50 flex items-center justify-center sm:absolute max-sm:h-screen max-sm:top-1/2 max-sm:left-1/2 max-sm:-translate-1/2 max-sm:backdrop-blur-[2px] max-sm:bg-[rgba(84,91,106,0.50)] sm:top-full sm:left-0"
                    onClick={() => setOpen(false)} // close on overlay click
                    >
                        <ul className="w-full max-sm:w-90/100 space-y-0.5 p-1 bg-white rounded-2xl shadow-sm z-2"
                        onClick={(e) => e.stopPropagation()} // prevent closing when clicking list
                        >
                            {options.map((opt) => (
                                <li
                                    key={opt}
                                    onClick={() => {
                                        setSelected(opt);
                                        setOpen(false);
                                    }}
                                    className="px-5 py-4 cursor-pointer hover:bg-gray100 text-gray800 
                                       text-base font-medium leading-5.5 rounded-xl transition-all duration-300"
                                >
                                    {opt}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            {/* Error */}
            {error && (
                <p className="text-[15px] font-medium text-[#C94747]">
                    {error}
                </p>
            )}
        </div>
    );
}
