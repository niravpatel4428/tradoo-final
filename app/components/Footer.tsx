"use client";
import React, { use } from "react";
import Link from "next/link";
import Image from "next/image";

import Logo from "@/public/image/svg/logo.svg";
import RedPlusIcon from "@/public/image/svg/red-plus-icon.svg";
import FooterGradient from "@/public/image/footer-top-gradient.png";
import { usePathname } from "next/navigation";

// Icons from react-icons
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

import SocialIcons from "@/app/components/SocialIcons";
import FooterLink from "./FooterLink";

// Social icons array
const socialItems = [
  { icon: <BsTwitterX size={26} />, href: "https://twitter.com" },
  { icon: <FaLinkedin size={26} />, href: "https://linkedin.com" },
];

// Footer Columns array
const footerColumns = [
  {
    groups: [
      {
        title: "For Individuals",
        links: [{ label: "Personal Wealth", href: "/" }],
      },
      {
        title: "For Professionals",
        links: [
          { label: "Stablecoin Treasury", href: "/" },
          { label: "Institutional Vaults", href: "/" },
        ],
      },
    ],
  },

  {
    groups: [
      {
        title: "Product",
        links: [
          { label: "Approach", href: "/approach" },
          { label: "Dashboard", href: "/" },
          { label: "Risk Profiles", href: "/riskprofiles" },
          { label: "Strategy Framework", href: "/strategy-framework" },
          { label: "Docs", href: "/" },
        ],
      },
    ],
  },

  {
    groups: [
      {
        title: "Company",
        links: [
          { label: "About Us", href: "/" },
          { label: "Careers", href: "/career" },
          { label: "Contacts", href: "/" },
          { label: "Support", href: "/" },
          { label: "Become and Investor", href: "/" },
          { label: "Join the Waitlist", href: "/" },
        ],
      },
    ],
  },

  {
    groups: [
      {
        title: "Legal",
        links: [
          { label: "Private Beta Terms", href: "/privatebetaterms" },
          { label: "Terms of Use", href: "/terms-of-use" },
          { label: "Risk Disclosure", href: "/risk-disclosure" },
          { label: "Privacy Policy", href: "/privacy-policy" },
          { label: "Imprint", href: "/imprint" },
          { label: "Cookie Policy", href: "/cookie-policy" },
        ],
      },
    ],
  },
];


// Footer Bottom Left array
const fbLeftList = [
  "© 2025 Tradoo Ltd",
  "All rights reserved",
  <Link href="/" className="flex gap-2 hover:opacity-75">
    Registered in Switzerland <Image src={RedPlusIcon} alt="icon" />
  </Link>,
];

// Footer Bottom Right array
const fbRightList = [
  "Zug, Switzerland",
  <Link href="/" className="flex gap-2 hover:opacity-75">
    CHE-216.713.957
  </Link>,
];

const Footer = () => {

  const pathname = usePathname();

  // PAGES where you want to HIDE gradient
  const hideGradientPages = ["/career", "/privatebetaterms" , "/terms-of-use" , "/risk-disclosure", "/privacy-policy", "/imprint", "/cookie-policy"];

  const showGradient = !hideGradientPages.includes(pathname);

  return (
    <footer className="block max-xs:pt-8 pt-[60px] bg-darkjunglegreen relative z-0">
      {showGradient && (
        <div className="absolute w-full max-w-480 mx-auto bottom-full left-1/2 -translate-x-1/2 h-[452px] overflow-hidden">
          <Image
            src={FooterGradient}
            alt="Footer Gradient"
            className="w-auto h-full object-cover object-center"
          />
        </div>
      )}
      {/* Footer Top */}
      <div className="block overflow-hidden">
        <div className="container">
          <div className="block max-xs:py-10 pt-20 pb-14 border-b border-primary">
            <div className="flex flex-wrap max-xs:gap-10 gap-20 -mx-4">
              {/* Left Column */}
              <div className="flex-none w-full lg:max-w-64 xl:max-w-72 xxl:max-w-[360px] px-4">
                <div className="flex flex-wrap flex-col gap-6">
                  {/* Logo */}
                  <div className="block">
                    <Link href="/" className="inline-block">
                      <Image
                        src={Logo}
                        alt="Logo"
                        className="max-w-[138px] w-full"
                      />
                    </Link>
                  </div>

                  {/* Description */}
                  <div className="block text-base leading-[22px] max-xs:text-[14px] max-xs:leading-[20px] text-gray-500">
                    <p>
                      Purpose-built infrastructure for modern digital wealth.
                      Structured, transparent and fully user-controlled.
                    </p>
                  </div>

                  {/* Social Icons */}
                  <div className="block mt-4">
                    <ul className="flex flex-wrap gap-4 max-xs:gap-3">
                      {socialItems.map((item, index) => (
                        <li key={index}>
                          <SocialIcons icon={item.icon} href={item.href} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right Columns */}
              <div className="flex-1 px-4">
                <div className="flex flex-wrap xl:justify-end -mx-3">

                  {footerColumns.map((column, colIndex) => (
                    <div
                      key={colIndex}
                      className={`flex-none w-full max-w-[224px] px-3 mb-6
          ${column.groups.length > 1 ? "" : ""}`}
                    >
                      <div className="flex flex-wrap flex-col max-sm:gap-6 gap-10 max-xs:gap-4">

                        {column.groups.map((group, gIndex) => (
                          <div key={gIndex} className="flex flex-col gap-6 max-xs:gap-4">

                            {/* Column Title */}
                            <div className="block fontInter font-medium text-base leading-[22px] max-xs:text-[14px] max-xs:leading-[20px] text-white">
                              <span>{group.title}</span>
                            </div>

                            {/* Column Links */}
                            <div className="block text-base leading-[22px] max-xs:text-[14px] max-xs:leading-[20px] leading-5">
                              <ul className="flex flex-wrap flex-col gap-4 max-xs:gap-3">
                                {group.links.map((item, index) => (
                                  <li key={index}>
                                    <FooterLink href={item.href}>{item.label}</FooterLink>
                                  </li>
                                ))}
                              </ul>
                            </div>

                          </div>
                        ))}

                      </div>
                    </div>
                  ))}

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      {/* Footer Top */}

      {/* Footer Bottom */}
      <div className="block">
        <div className="container">
          <div className="flex flex-wrap flex-col gap-8 max-xs:py-10 pt-20 pb-14">
            <div className="block text-justify text-base leading-[22px] max-xs:text-[14px] max-xs:leading-[20px] text-gray500">
              <p>
                Tradoo is currently offered through a closed private beta under
                NDA, with access limited to selected users from the{" "}
                <Link
                  href="/"
                  className="underline duration-200 hover:no-underline"
                >
                  waitlist
                </Link>{" "}
                . Tradoo provides information for general educational purposes
                only. Nothing on this website is financial, legal, or tax
                advice, and nothing should be interpreted as an offer or
                recommendation to buy or sell digital assets. All investment
                decisions involve risk, including the possible loss of capital.
                Tradoo does not hold customer assets. All portfolios are
                executed through user-controlled smart contract vaults.
                Ownership always remains with the user, and Tradoo cannot access
                or transfer funds on a user's behalf. On-chain data is sourced
                from third-party protocols believed to be reliable, but Tradoo
                cannot guarantee accuracy or completeness. Digital assets may
                carry regulatory, technological, and market risks. Users should
                evaluate their personal risk tolerance and, where necessary,
                consult independent advisors. Past behavior of risk profiles
                does not predict future results. Illustrations are for
                informational purposes only. By using this website, you agree to
                our{" "}
                <Link
                  href="/"
                  className="underline duration-200 hover:no-underline"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/"
                  className="underline duration-200 hover:no-underline"
                >
                  Privacy Policy
                </Link>{" "}
                Some features may depend on supported wallets, network
                availability, and jurisdiction. The Tradoo platform is operated
                by Tradoo Ltd., registered in Switzerland, 6300 Zug.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-8 max-xs:gap-6 text-base leading-[22px] max-xs:text-[14px] max-xs:leading-[20px] text-white">
              <div className="flex-none w-full sm:w-auto">
                <ul className="flex flex-wrap gap-x-6 gap-y-2">
                  {fbLeftList.map((item, index) => (
                    <li
                      key={index}
                      className="relative before:absolute before:content-[''] before:-right-[18px] before:top-1/2 before:-translate-1/2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-aurometalsaurus last:before:hidden"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-none w-full sm:w-auto">
                <ul className="flex flex-wrap gap-x-6 gap-y-2">
                  {fbRightList.map((item, index) => ( 
                    <li
                      key={index}
                      className="relative before:absolute before:content-[''] before:-right-[18px] before:top-1/2 before:-translate-1/2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-aurometalsaurus last:before:hidden"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
    </footer>
  );
};

export default Footer;
