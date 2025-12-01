"use client";

import Image, { StaticImageData } from "next/image";
import React, { useState, useRef, useEffect, JSX } from "react";
import { FiUser, FiZap, FiTrendingUp } from "react-icons/fi";
import ac1 from "@/public/image/svg/shield-keyhole.svg";
import ac2 from "@/public/image/svg/shield-keyhole.svg";
import ac3 from "@/public/image/svg/shield-keyhole.svg";

interface AccordionItem {
  id: number;
  header: string;
  title: string;
  description: string;
  bodyIcon?: string;
  headerIcon: JSX.Element;
}

const accordionData: AccordionItem[] = [
  {
    id: 1,
    header: "User",
    title: "Dedicated Smart Contract Vault",
    description: "Your personal on-chain vault",
    headerIcon: <FiUser className="text-gray-600" size={20} />,
    bodyIcon: ac1,
  },
  {
    id: 2,
    header: "Execution layer",
    title: "Dedicated Smart Contract Vault",
    description: "Your personal on-chain vault",
    headerIcon: <FiZap className="text-gray-600" size={20} />,
    bodyIcon: ac2,
  },
  {
    id: 3,
    header: "Market (On-chain execution)",
    title: "Dedicated Smart Contract Vault",
    description: "Your personal on-chain vault",
    headerIcon: <FiTrendingUp className="text-gray-600" size={20} />,
    bodyIcon: ac3,
  },
];

const FullOwnership = () => {
  const [active, setActive] = useState<number | null>(null); // initially, no item is open
  const [height, setHeight] = useState<number>(0); // state to hold the height of the open item

  // Ref to measure content height
  const contentRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const toggleItem = (id: number) => {
    setActive((prev) => (prev === id ? null : id)); // Toggle the active item
  };

  useEffect(() => {
    if (active !== null && contentRefs.current[active]) {
      const contentHeight = contentRefs.current[active]?.scrollHeight || 0;
      setHeight(contentHeight); // Set the height when an item is opened
    } else {
      setHeight(0); // Reset height when closing the item
    }
  }, [active]); // Recalculate height when active item changes

  return (
    <div className="block max-xs:py-16 py-[168px] bg-white">
      <div className="container">
        <div className="space-y-16">
          {/* Section Main Title */}
          <div className="flex max-lg:flex-col flex-wrap items-end gap-10 lg:gap-5">
            <div className="flex-none w-full lg:flex-1">
              <h2 className="font-semibold text-gray800 text-40 leading-[46px] xl:text-56 xl:leading-16 max-xs:text-[32px] max-xs:leading-[40px] -tracking-[1.20px]">
                Full Ownership. <br />
                Full Transparency. <br />
                <span className="text-gray500">One Vault per User.</span>
              </h2>
            </div>
            <div className="flex-none w-full lg:flex-1">
              <p className="max-xs:text-base text-lg leading-snug text-gray700">
                Your assets remain in your dedicated smart-contract vault at all
                times. No pooled funds, no middlemen, full transparency. No
                platform custody.
              </p>
            </div>
          </div>
          {/* End Section Main Title */}

          {/* Section Main Content */}
          <div className="flex flex-wrap max-lg:flex-col-reverse gap-16 lg:gap-5">
            {/* Feature List */}
            <div className="max-md:flex-none w-full flex-1">
              <ul className="flex flex-col gap-6 font-semibold max-xs:text-xl text-2xl leading-snug text-gray800">
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
                      className="cursor-pointer relative z-2 flex w-full items-center text-start gap-4 text-gray700 font-semibold max-xs:text-base text-lg leading-snug p-3 lg:p-6"
                      aria-expanded={active === item.id}
                      aria-controls={`accordion-body-${item.id}`}
                    >
                      {item.headerIcon}
                      <span>{item.header}</span>
                    </button>

                    {/* Accordion Body */}
                    <div
                      ref={(el) => {
                        contentRefs.current[item.id] = el;
                      }} // Assign the ref for content
                      id={`accordion-body-${item.id}`}
                      className={`overflow-hidden transition-all duration-300 ease-out`}
                      style={{
                        maxHeight: active === item.id ? `${height}px` : "0px", // Dynamic height calculation
                      }}
                    >
                      <div
                        className={`overflow-hidden rounded-2xl bg-white shadow-[0px_8px_32px_#DCDFE4] p-4.5 lg:p-8 border border-gray-100`}
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
                          <div className="bg-gray100 flex-none size-8.5 lg:size-16 p-2 lg:p-3 rounded-md lg:rounded-xl flex justify-center items-center">
                            {item.bodyIcon && (
                              <Image
                                src={item.bodyIcon}
                                alt="icon"
                                className="w-4 lg:w-8"
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* End Section Main Content */}
        </div>
      </div>
    </div>
  );
};

export default FullOwnership;
