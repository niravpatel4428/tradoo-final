"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface SelectFieldProps {
    label: string;
    options: string[];
    error?: string;
}

export default function SelectField({ label, options, error }: SelectFieldProps) {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("");

    return (
        <div className="flex flex-col gap-3">
            <label className="text-base leading-5.5 font-medium text-gray800 capitalize">
                {label}
            </label>

            {/* Select Box */}
            <div className="relative w-full">
                <div
                    className={`
                    w-full flex items-center justify-between gap-2 rounded-2xl py-4 px-4
                    text-gray800 text-base font-medium leading-5.5 transition-all duration-300

                    bg-gray100 border-[1.5px] border-transparent
                    hover:bg-gray50

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
                    <ul className="absolute top-full left-0 w-full space-y-0.5 p-1 bg-white rounded-2xl shadow-sm z-2">
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
