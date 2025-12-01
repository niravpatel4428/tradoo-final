"use client";

import Image from "next/image";
import React, { useState, JSX } from "react";
import { FiUser, FiZap, FiTrendingUp } from "react-icons/fi";

interface AccordionItem {
  id: number;
  header: string;
  title: string;
  description: string;
  bodyIcon?: JSX.Element;
  headerIcon: JSX.Element;
}

const accordionData: AccordionItem[] = [
  {
    id: 1,
    header: "User",
    title: "Dedicated Smart Contract Vault",
    description: "Your personal on-chain vault",
    headerIcon: <FiUser className="text-gray-600" size={20} />,
    bodyIcon: (
      <div className="inline-flex items-center justify-center p-3 rounded-xl bg-gray-100 max-sm:w-14 max-sm:h-14 w-16 h-16">
        <Image
          src="/image/svg/shield-keyhole.svg"
          width={32}
          height={32}
          alt="Shield Keyhole"
          className="max-w-full max-h-full"
        />
      </div>
    ),
  },
  {
    id: 2,
    header: "Execution layer",
    title: "Dedicated Smart Contract Vault",
    description: "Your personal on-chain vault",
    headerIcon: <FiZap className="text-gray-600" size={20} />,
    bodyIcon: (
      <div className="inline-flex items-center justify-center p-3 rounded-xl bg-gray-100 max-sm:w-14 max-sm:h-14 w-16 h-16">
        <Image
          src="/image/svg/shield-keyhole.svg"
          width={32}
          height={32}
          alt="Shield Keyhole"
          className="max-w-full max-h-full"
        />
      </div>
    ),
  },
  {
    id: 3,
    header: "Market (On-chain execution)",
    title: "Dedicated Smart Contract Vault",
    description: "Your personal on-chain vault",
    headerIcon: <FiTrendingUp className="text-gray-600" size={20} />,
    bodyIcon: (
      <div className="inline-flex items-center justify-center p-3 rounded-xl bg-gray-100 max-sm:w-14 max-sm:h-14 w-16 h-16">
        <Image
          src="/image/svg/shield-keyhole.svg"
          width={32}
          height={32}
          alt="Shield Keyhole"
          className="max-w-full max-h-full"
        />
      </div>
    ),
  },
];

const FullOwnership = () => {
  const [active, setActive] = useState<number | null>(1);

  const toggleItem = (id: number) => {
    setActive((prev) => (prev === id ? null : id));
  };

  return (
    <div className="block max-xs:py-16 py-[168px]">
      <div className="flex flex-wrap flex-col gap-16">
        {/* Section Main Title */}
        <div className="container">
          <div className="flex flex-wrap items-end gap-10">
            <div className="flex-none w-full md:flex-1">
              <h2 className="font-semibold text-gray800 text-40 leading-[46px] xl:text-56 xl:leading-16 max-xs:text-[32px] max-xs:leading-[40px] -tracking-[1.20px]">
                Full Ownership. <br />
                Full Transparency. <br />
                <span className="text-gray500">One Vault per User.</span>
              </h2>
            </div>
            <div className="flex-none w-full md:flex-1">
              <p className="max-xs:text-base text-lg leading-snug text-gray700">
                Your assets remain in your dedicated smart-contract vault at all
                times. No pooled funds, no middlemen, full transparency. No
                platform custody.
              </p>
            </div>
          </div>
        </div>
        {/* End Section Main Title */}

        {/* Section Main Content */}
        <div className="container">
          <div className="flex flex-wrap flex-row-reverse gap-6">
            {/* Accordion */}
            <div className="max-sm:flex-none w-full flex-1">
              <div className="block space-y-4 bg-gray50 rounded-3xl p-2">
                {accordionData.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-gray300 p-2"
                  >
                    {/* Accordion Header */}
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="flex w-full items-center gap-4 text-gray700 font-semibold max-xs:text-base text-lg leading-snug p-6"
                      aria-expanded={active === item.id}
                      aria-controls={`accordion-body-${item.id}`}
                    >
                      {item.headerIcon}
                      <span>{item.header}</span>
                    </button>
                    {/* Accordion Body */}
                    {active === item.id && (
                      <div
                        id={`accordion-body-${item.id}`}
                        className="rounded-2xl bg-white shadow-[0px_8px_32px_#DCDFE4] p-8 border border-gray-100"
                      >
                        <div className="flex items-center justify-between">
                          <div className="space-y-2">
                            <h5 className="font-semibold text-lg text-gray800">
                              {item.title}
                            </h5>
                            <p className="max-xs:text-base text-lg leading-snug text-gray700">
                              {item.description}
                            </p>
                          </div>
                          {item.bodyIcon}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Feature List */}
            <div className="max-md:flex-none w-full flex-1">
              <ul className="flex flex-col gap-6 font-semibold text-2xl leading-snug text-gray800">
                {[
                  "Non-pooled architecture",
                  "Individual vault per user",
                  "Withdraw anytime",
                  "Transparent on-chain structure",
                  "Secure, audit-friendly",
                  "Consistent user ownership",
                ].map((feature, index) => (
                  <li
                    key={index}
                    className="relative pl-14 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-8 before:h-8 before:bg-[url('/image/green-checkmark.png')] before:bg-no-repeat before:bg-[length:100%_100%]"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* End Section Main Content */}
      </div>
    </div>
  );
};

export default FullOwnership;
