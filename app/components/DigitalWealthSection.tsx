"use client";

import React from "react";
import Button from "../components/Button";
import type { ButtonVariant, ButtonSize } from "../components/Button";

type ButtonType = {
    label: string;
    href: string;
    variant?: ButtonVariant;
    size?: ButtonSize;
    trailingIcon?: boolean;
};

type DigitalWealthProps = {
    containerClass?: string;
    title?: string;
    description?: string;
    buttons: ButtonType[];
    bgColor?: string; // optional override
};

const DigitalWealthSection: React.FC<DigitalWealthProps> = ({ containerClass,
    title,
    description,
    buttons,
    bgColor = "bg-darkjunglegreen",
}) => {
    return (
        <div className={`block max-xs:py-16 py-24 xxl:pt-42 relative ${bgColor}`}>
            <div className="container">
                <div className={`flex flex-wrap flex-col md:text-center max-xs:gap-6 gap-10 relative z-10 ${containerClass} mx-auto`}>

                    {/* Title */}
                    <div className={`block font-semibold text-white text-40 leading-[46px] -tracking-[1.20px] 
              max-xs:text-[32px] max-xs:leading-10 max-xs:-tracking-[0.7px] 
              xl:text-56 xl:leading-16 xl:-tracking-[1.68px]`}>
                        <h2>{title}</h2>
                    </div>

                    {/* Description */}
                    {description && <div className="flex flex-wrap flex-col gap-4 text-lg leading-snug text-gray200 max-w-[685px] w-full mx-auto">
                        <p>{description}</p>
                    </div>}

                    {/* Buttons */}
                    <div className="max-sm:justify-start flex flex-wrap justify-center gap-4">
                        {buttons.map((btn, index) => (
                            <Button
                                key={index}
                                label={btn.label}
                                href={btn.href}
                                trailingIcon={btn.trailingIcon}
                                variant={btn.variant}
                                size={btn.size}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DigitalWealthSection;
