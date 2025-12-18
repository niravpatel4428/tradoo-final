"use client";

import React, { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import Image from "next/image";
import shield from "@/public/image/svg/shield-check.svg";

/* =======================
   CONSTANTS
======================= */
type Currency = "CHF" | "EUR" | "USD";

const CURRENCIES: Currency[] = ["CHF", "EUR", "USD"];
const PRESET_AMOUNTS = [500, 1000, 2500, 5000];
const SHARE_PRICE = 10; // CHF
const MIN_INVESTMENT = 500;

/* =======================
   COMPONENT (RAFCE)
======================= */
const InvestWidget: React.FC = () => {
    const [currency, setCurrency] = useState<Currency>("CHF");
    const [amount, setAmount] = useState<number | "">(500);
    const [customActive, setCustomActive] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const inputRef = useRef<HTMLInputElement>(null);

    const shares =
        typeof amount === "number"
            ? Math.floor(amount / SHARE_PRICE)
            : 0;

    /* Developer note behavior */
    useEffect(() => {
        if (customActive) {
            inputRef.current?.focus();
        }
    }, [customActive]);

    const handleAmountChange = (value: number | "") => {
        setAmount(value);
        setCustomActive(true);

        if (value === "" || value < MIN_INVESTMENT) {
            setError(`Minimum investment is ${MIN_INVESTMENT} CHF`);
        } else {
            setError("");
        }
    };

    const handlePresetClick = (value: number) => {
        setAmount(value);
        setCustomActive(false);
        setError("");
    };

    const [currencyOpen, setCurrencyOpen] = useState(false);
    const currencyRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                currencyRef.current &&
                !currencyRef.current.contains(e.target as Node)
            ) {
                setCurrencyOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);



    return (
        <main className="">
            <div className="grid grid-cols-12 gap-2">
                {/* LEFT CARD */}
                <div className="col-span-12 lg:col-span-4 max-sm:rounded-20 max-sm:py-10 max-sm:px-4 rounded-3xl bg-white p-7 xxl:p-12">
                    <div className="flex flex-col h-full justify-between gap-4">
                        <div className="space-y-4">
                            <h2 className="max-xs:text-3xl max-xs:leading-9 text-4xl leading-11 tracking-normal xxl:text-44 font-semibold xxl:leading-13 xxl:tracking-[-0.88px] text-lightgray900">
                                Choose your ownership amount
                            </h2>

                            <p className="text-base text-gray700 leading-5.5 mt-6">
                                Choose investment amount and proceed in 3 simple steps. Pay, sign digitally & receive confirmation.
                            </p>

                            <div className="mt-6 rounded-xl bg-gray100 p-5 xl:p-6 text-sm xxl:text-base">
                                <div className="flex items-center gap-4 py-1">
                                    <span className="text-gray700 leading-5.5 min-w-32 xl:min-w-41">Share price</span>
                                    <span className="font-medium leading-5.5 text-lightgray900">10 CHF</span>
                                </div>

                                <div className="flex items-center gap-4 py-1">
                                    <span className="text-gray700 leading-5.5 min-w-32 xl:min-w-41">Minimum Investment</span>
                                    <span className="font-medium leading-5.5 text-lightgray900">500 CHF</span>
                                </div>

                                <div className="flex items-center gap-4 py-1">
                                    <span className="text-gray700 leading-5.5 min-w-32 xl:min-w-41">Seed-1 Bonus</span>
                                    <span className="font-medium leading-5.5 text-lightgray900">+10% Token</span>
                                </div>
                            </div>


                            <span className="mt-2.5 inline-block rounded-md bg-lightgreen px-3 py-2 text-base font-medium leading-4.5 text-green">
                                ~ 2 min to subscribe
                            </span>
                        </div>
                        <div className="flex gap-3 items-start">
                            <Image src={shield} alt="icon"/>
                            <span className="text-base leading-5.5 text-gray700">Structured in accordance with FinSA/FinIA guidelines</span>
                        </div>
                    </div>
                </div>

                {/* RIGHT CARD */}
                <div className="col-span-12 lg:col-span-8 max-sm:rounded-20 max-sm:py-10 max-sm:px-4 rounded-3xl bg-white p-7 xxl:p-12 space-y-6">
                    {/* INPUT */}
                    <div>
                        <div className="mb-8 md:hidden block">
                            <h3 className="text-2xl font-semibold leading-8 tracking-[-0.24px] text-lightgray900">Start investment</h3>
                        </div>

                        <label className="block text-base font-medium leading-5.5 text-lightgray900 mb-2">
                            Investment amount
                        </label>

                        <p className="text-base text-gray700 leading-5.5 mb-3">
                            Displayed amount is for reference. Payment is processed in CHF.
                        </p>

                        <div className={`flex w-full rounded-2xl border px-5 py-4 ${error ? "border-[#C94747] shadow-[var(--shadowinput)]" : "border-gray100 bg-gray100"
                            }`}>
                            <input
                                ref={inputRef}
                                type="number"
                                value={amount === 0 ? "" : amount}
                                onChange={(e) => {
                                    const val = e.target.value;
                                    handleAmountChange(
                                        val === "" ? "" : Number(val)
                                    );
                                }}
                                className={`w-full outline-none text-base leading-5.5 teat-lightgray900`}
                            />

                            {/* DROPDOWN */}
                            {/* CURRENCY DROPDOWN */}
                            <div ref={currencyRef} className="relative">
                                <button
                                    type="button"
                                    onClick={() => setCurrencyOpen((prev) => !prev)}
                                    className="flex cursor-pointer items-center gap-2 px-3 text-base leading-5.5 text-lightgray900 outline-none"
                                >
                                    {currency}

                                    {/* Arrow */}
                                    <svg className={`ml-1 h-4 w-4 transition-transform duration-200 ${currencyOpen ? "rotate-180" : ""
                                        }`} width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.75 0.75L6.75 6.75L12.75 0.75" stroke="#202533" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>


                                {/* Dropdown */}
                                {currencyOpen && (
                                    <div className="absolute right-0 top-full mt-6 -mr-5 w-35 rounded-2xl bg-white shadow-[var(--shadowdropdown)] overflow-hidden z-10">
                                        {CURRENCIES.map((cur) => (
                                            <button
                                                key={cur}
                                                type="button"
                                                onClick={() => {
                                                    setCurrency(cur);
                                                    setCurrencyOpen(false);
                                                }}
                                                className="w-full cursor-pointer px-5 py-4 text-left text-base leading-5.5 text-lightgray900 hover:bg-gray100"
                                            >
                                                {cur}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                        </div>

                        {/* ERROR */}
                        {error && (
                            <p className="mt-1 text-xs text-red-500">
                                {error}
                            </p>
                        )}
                    </div>

                    {/* PRESET CHIPS */}
                    <div className="flex flex-wrap gap-2">
                        {/* <div className={`${error ? "opacity-70" : ""}`}> */}
                        {PRESET_AMOUNTS.map((value) => (
                            <button
                                key={value}
                                onClick={() => handlePresetClick(value)}
                                className={`rounded-20 cursor-pointer px-5 py-2 text-base leading-5.5 border ${!customActive && amount === value
                                    ? "bg-[#1D2333] text-white"
                                    : "border-gray200 text-lightgray900"
                                    }`}
                            >
                                {value.toLocaleString()} CHF
                            </button>
                        ))}
                        {/* </div> */}

                        <button
                            onClick={() => setCustomActive(true)}
                            className={`cursor-pointer rounded-20 px-5 py-2 text-base leading-5.5 border ${customActive
                                ? "bg-[#1D2333] text-white"
                                : "border-gray200 text-lightgray900"
                                }`}
                        >
                            Custom
                        </button>
                    </div>

                    {/* SHARES */}
                    <div className="max-sm:mb-2">
                        <p className="text-base font-medium leading-5.5 text-lightgray900 mb-1">
                            Shares you receive
                        </p>

                        <div className="flex justify-between items-center border-gray100 bg-gray100 rounded-2xl py-4 px-5">
                            <span className="text-base leading-5.5 text-lightgray900">
                                {shares}
                            </span>
                            <span className="text-base leading-5.5 text-gray500">
                                Shares per 10 CHF
                            </span>
                        </div>
                    </div>

                    {/* SUMMARY */}
                    <div className="grid max-sm:grid-cols-1 grid-cols-2 gap-2 mb-2">
                        <div className="rounded-3xl bg-gray100 max-sm:py-8 max-sm:px-4 py-6 px-8 space-y-1">
                            <p className="text-base text-gray700 leading-5.5">
                                Shares you receive
                            </p>
                            <p className="text-4xl font-semibold leading-none tracking-[-1.08px] text-lightgray900">
                                {shares}
                            </p>
                        </div>

                        <div className="rounded-3xl bg-gray100 max-sm:py-8 max-sm:px-4 py-6 px-8 space-y-1">
                            <p className="text-base text-gray700 leading-5.5">
                                You invest
                            </p>
                            <p className="text-4xl font-semibold leading-none tracking-[-1.08px] text-lightgray900">
                                {typeof amount === "number"
                                    ? `${amount.toLocaleString()} CHF`
                                    : "—"}
                            </p>
                        </div>
                    </div>

                    {/* INFO */}
                    <div className="rounded-3xl bg-[#E9F2F1] max-sm:py-6 max-sm:px-4 py-6 px-8 text-base leading-5.5 text-green">
                        <span className="font-medium">Seed+ Benefit:</span> in addition to the shares, you receive
                        priority access to the token (&lt;$0.10), public sale
                        planned – $0.40, +10% bonus on token allocation, and
                        guaranteed whitelist access.
                    </div>

                    <div className="mt-8 max-xl:flex-col max-xl:items-start flex items-center max-sm:gap-y-10 max-xl:gap-6 xl:gap-10">
                        {/* CTA */}
                        <Button
                            href="#"
                            disabled={!!error}
                            className="disabled:opacity-40"
                            label="Become a Co-Owner"
                            trailingIcon
                        />

                        <p className="md:text-center text-lg text-gray700 leading-6">
                            You become a shareholder of <span className="font-semibold text-lightgray900">Tradoo AG</span>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default InvestWidget;
