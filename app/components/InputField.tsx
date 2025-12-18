"use client";

import { useState } from "react";

interface InputFieldProps {
    label: string;
    type: string;
    placeholder?: string;
    error?: string;
}

export default function InputField({ type = "text" , label, placeholder, error }: InputFieldProps) {
    const [value, setValue] = useState("");

    return (
        <div className="flex flex-col gap-3">
            <label className="text-base leading-5.5 font-medium text-gray800 capitalize">{label}</label>

            <input
                type={type}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={placeholder}
                className={`
          w-full rounded-2xl px-5 py-4 text-gray800 text-base font-medium leading-5.5 transition-all outline-none placeholder:text-gray500

          bg-gray100 border-[1.5px] border-transparent 

          hover:bg-gray50 hover:border-transparent

          focus:bg-white focus:border-[#0D9488] focus:ring-[3px] focus:ring-[#DBEFED]

          ${error ? "border-[#C94747]! bg-white! ring-[3px] ring-[#F7E4E4]!" : ""}
        `}
            />

            {/* error message */}
            {error && <p className="text-[15px] font-medium text-[#C94747]">{error}</p>}
        </div>
    );
}
