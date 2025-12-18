"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { countries } from "countries-list";

interface CountrySelectFieldProps {
  label: string;
  error?: string;
}

export default function CountrySelectField({
  label,
  error,
}: CountrySelectFieldProps) {
  const [open, setOpen] = useState(false);

  // ✅ Country names array
  const countryList = Object.values(countries)
    .map((c) => c.name)
    .sort();

  const [selected, setSelected] = useState("Select country");
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Disable scroll on mobile (your logic preserved)
  useEffect(() => {
    const isMobile = window.innerWidth <= 640;
    document.body.style.overflow = open && isMobile ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="flex flex-col gap-3" ref={wrapperRef}>
      <label className="text-base leading-5.5 font-medium text-gray800">
        {label}
      </label>

      {/* Select box */}
      <div className="relative w-full">
        <div
          className={`
            w-full flex items-center justify-between gap-2 rounded-2xl py-4 px-4
            text-gray800 text-base font-medium leading-5.5 transition-all duration-300
            bg-gray100 border-[1.5px] border-transparent hover:bg-gray50
            ${open && !error ? "bg-white border-[#0D9488]! ring-[3px] ring-[#DBEFED]" : ""}
            ${error ? "bg-white border-[#C94747]! ring-[3px] ring-[#F7E4E4]" : ""}
          `}
          onClick={() => setOpen((p) => !p)}
        >
          <span className="truncate">{selected}</span>
          {open ? (
            <ChevronUp className="size-5" />
          ) : (
            <ChevronDown className="size-5" />
          )}
        </div>

        {/* Dropdown */}
        {open && (
          <div
            className="fixed w-full z-50 flex items-center justify-center
              sm:absolute max-sm:h-screen max-sm:top-1/2 max-sm:left-1/2
              max-sm:-translate-1/2 max-sm:bg-[rgba(84,91,106,0.50)]
              max-sm:backdrop-blur-[2px] sm:top-full sm:left-0"
            onClick={() => setOpen(false)}
          >
            <ul
              className="w-full max-sm:w-90/100 max-h-[360px] overflow-y-auto
                space-y-0.5 p-1 bg-white rounded-2xl shadow-sm"
              onClick={(e) => e.stopPropagation()}
            >
              {countryList.map((country) => (
                <li
                  key={country}
                  onClick={() => {
                    setSelected(country);
                    setOpen(false);
                  }}
                  className="px-5 py-4 cursor-pointer hover:bg-gray100
                    text-gray800 text-base font-medium leading-5.5
                    rounded-xl transition-all duration-300"
                >
                  {country}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {error && (
        <p className="text-[15px] font-medium text-[#C94747]">{error}</p>
      )}
    </div>
  );
}
