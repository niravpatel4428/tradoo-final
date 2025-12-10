// "use client";
// import React, { useEffect, useState } from "react";
// import logo from "@/public/image/svg/logo-head.svg";
// import risk from "@/public/image/svg/risk.svg";
// import strategy from "@/public/image/svg/strategy.svg";
// import Link from "next/link";
// import Image, { type StaticImageData } from "next/image";
// import Button from "./Button";
// import { IoMenu, IoClose } from "react-icons/io5";
// import { MobileBackButton, MobileNavItem, NavListItem } from "./navItems";

// import { navData } from "@/app/components/navData";


// import { usePathname } from 'next/navigation';

// const Header = () => {

//   const pathname = usePathname();

//   type SubmenuItem = {
//     href: string;
//     title: string;
//     description: string;
//     iconSrc: StaticImageData;
//   };

//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [submenuOpen, setSubmenuOpen] = useState(false);
//   const [submenuItems, setSubmenuItems] = useState<SubmenuItem[]>([]);

//   useEffect(() => {
//     if (mobileOpen) {
//       document.documentElement.classList.add("overflow-hidden");
//     } else {
//       document.documentElement.classList.remove("overflow-hidden");
//     }
//   }, [mobileOpen]);

//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);



//   return (
//     <>
//       {/* DESKTOP HEADER */}
//       <header className={`hidden xl:block fixed left-0 right-0 top-0 z-50 ${isScrolled ? "bg-gray100" : "bg-transparent"
//         }`}>
//         <div className="container">
//           <div className="flex justify-between items-center">
//             {/* Logo */}
//             <Link href="/" className="h-9 block">
//               <Image src={logo} alt="logo" className="w-full h-full" />
//             </Link>

//             {/* Desktop Menu */}
//             <ul className="flex items-center gap-10 xl:gap-12">
//               {navData.map((item, i) => (
//                 <li key={i} className="relative group">
//                   {/* Simple Link */}
//                   {!item.submenu && (
//                     <NavItem label={item.label} linkUrl={item.href!} pathname={pathname} />
//                   )}

//                   {/* Dropdown Parent */}
//                   {item.submenu && (
//                     <>
//                       <NavItem label={item.label} arrow pathname={pathname} />

//                       <div className="absolute left-0 top-full w-111 bg-white rounded-xl shadow-lg p-4 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none transition">
//                         <ul>
//                           {item.items?.map((sub, idx) => (
//                             <li key={idx}>
//                               <NavListItem
//                                 pathname={pathname}
//                                 href={sub.href}
//                                 title={sub.title}
//                                 description={sub.description}
//                                 iconSrc={sub.iconSrc.src}
//                               />
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     </>
//                   )}
//                 </li>
//               ))}
//             </ul>

//             {/* CTA */}
//             <Button
//               variant="primarydefault"
//               label="Get Early Access"
//               href="/"
//             />
//           </div>
//         </div>
//       </header>

//       {/* MOBILE HEADER */}
//       <header className={`py-5.5 xl:hidden fixed left-0 right-0 top-0 z-50 ${isScrolled ? "bg-gray100" : "bg-transparent"}`}>
//         <div className="container">
//           <div className="flex justify-between items-center">
//             {/* Logo */}
//             <Link href="/" className="h-9 block">
//               <Image src={logo} alt="logo" className="w-full h-full" />
//             </Link>

//             {/* Burger Button */}
//             <button
//               onClick={() => setMobileOpen(true)}
//               className="cursor-pointer"
//             >
//               <IoMenu size={24} className="text-gray800" />
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* MOBILE MENU OVERLAY */}
//       {mobileOpen && (
//         <div className="full-menu-block fixed inset-0 bg-gray100 z-50 p-5 animate-slideLeft">
//           <div className="flex justify-between items-center mb-8">
//             <Image src={logo} alt="logo" className="h-7 w-auto" />
//             <button
//               className="cursor-pointer"
//               onClick={() => {
//                 setMobileOpen(false);
//                 setSubmenuOpen(false);
//               }}
//             >
//               <IoClose size={24} className="text-gray800" />
//             </button>
//           </div>

//           {/* Main Menu */}
//           {!submenuOpen && (
//             <div className="space-y-3">
//               {/* <MobileBackButton onClick={() => setSubmenuOpen(false)} /> */}
//               <ul className="space-y-2">
//                 {navData.map((item, i) => (
//                   <li key={i}>
//                     {!item.submenu ? (
//                       <MobileNavItem
//                         pathname={pathname}
//                         label={item.label}
//                         href={item.href!}
//                         onClick={() => {
//                           setMobileOpen(false);
//                           setSubmenuOpen(false);
//                         }}
//                       />
//                     ) : (
//                       <MobileNavItem
//                         pathname={pathname}
//                         label={item.label}
//                         trailingIcon={true}
//                         onClick={() => {
//                           setSubmenuItems(item.items);
//                           setSubmenuOpen(true);
//                         }}
//                       />
//                     )}
//                   </li>
//                 ))}
//               </ul>

//               <div className="pt-6">
//                 <Button
//                   onClick={() => {
//                     setMobileOpen(false);
//                     setSubmenuOpen(false);
//                   }}
//                   variant="primarydefault"
//                   label="Get Early Access" 
//                   href="/"
//                 />
//               </div>
//             </div>
//           )}
//           {submenuOpen && (
//             <div className="space-y-3">
//               <MobileBackButton onClick={() => setSubmenuOpen(false)} />
//               <ul className="space-y-3">
//                 {submenuItems?.map((sub, i) => (
//                   <li key={i}>
//                     <NavListItem
//                       pathname={pathname}
//                       href={sub.href}
//                       title={sub.title}
//                       description={sub.description}
//                       iconSrc={sub.iconSrc.src}
//                       onClick={() => {
//                         setMobileOpen(false);
//                         setSubmenuOpen(false);
//                       }}
//                     />
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       )}
//     </>
//   );
// };

// /* ----------------- SMALL COMPONENTS ------------------ */

// type NavItemProps = {
//   pathname: string;
//   label: React.ReactNode | string;
//   arrow?: boolean;
//   linkUrl?: string;
// };

// const NavItem: React.FC<NavItemProps> = ({ pathname, label, arrow, linkUrl = "/" }) => {
//   const isActive = pathname === linkUrl;

//   return (
//     <Link
//       href={linkUrl}
//       className={`cursor-pointer flex items-center gap-2 text-gray800 text-base font-medium leading-tight hover:text-gray500 py-8.5 -mb-2 group transition ${isActive ? "!text-gray500" : ""
//         }`}
//     >
//       {label}
//       {arrow && <ArrowDown active={isActive} />}
//     </Link>
//   );
// };


// const ArrowDown = ({ active = false }: { active?: boolean }) => (
//   <svg width="11" height="7" viewBox="0 0 11 7" fill="none">
//     <path
//       className="group-hover:stroke-[#8B909C]"
//       d="M1 1L5.5 5.5L10 1"
//       stroke={active ? "#8B909C" : "#101729"}   // 👈 active = hover color
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );


// export default Header;


"use client";
import React, { useEffect, useState } from "react";
import logo from "@/public/image/svg/logo-head.svg";
import logoDark from "@/public/image/svg/logo-head-dark.svg"; //  add dark logo 
import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import Button from "./Button";
import { IoMenu, IoClose } from "react-icons/io5";
import { MobileBackButton, MobileNavItem, NavListItem } from "./navItems";
import { navData } from "@/app/components/navData";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  /** ---------------------------------
   *   🔥 DEFINE PAGES THAT USE DARK HEADER
   * ----------------------------------*/
  const darkPages = ["/professional"];

  const isDark = darkPages.includes(pathname);

  /** ---------------------------------
   *   Mobile + scroll logic (unchanged)
   * ----------------------------------*/
  const [mobileOpen, setMobileOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [submenuItems, setSubmenuItems] = useState<SubmenuItem[]>([]);

  useEffect(() => {
    if (mobileOpen) document.documentElement.classList.add("overflow-hidden");
    else document.documentElement.classList.remove("overflow-hidden");
  }, [mobileOpen]);

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 10);
  };
 
  // Run once on mount (covers page refresh / direct load)
  handleScroll();
 
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  /** ---------------------------------
   *   Dynamic classes for styles
   * ----------------------------------*/
  // const headerBg = isDark
  //   ? "bg-transparent"
  //   : isScrolled
  //     ? "bg-gray100"
  //     : "bg-transparent";

  const headerBg = isDark
    ? (isScrolled ? "bg-gray800" : "bg-transparent")
    : (isScrolled ? "bg-gray100" : "bg-transparent");

    const isScroll = isDark
    ? (isScrolled ? "bg-gray800" : "bg-transparent")
    : (isScrolled ? "bg-gray100" : "bg-transparent");


  const textColor = isDark ? "text-white" : "text-gray800";
  const hoverColor = isDark ? "hover:text-gray300" : "hover:text-gray500";

  const dropdownBg = isDark
    ? "bg-gray900 text-white"
    : "bg-white text-gray800";

  const buttonVariant = isDark
    ? "bg-white text-black hover:bg-gray200"
    : "bg-black text-white hover:bg-gray800";

  const logoSrc = isDark ? logoDark : logo;

  return (
    <>
      {/* DESKTOP HEADER */}
      <header
        className={`hidden xl:block fixed left-0 right-0 top-0 z-50 ${headerBg} ${isScroll}`}
      >
        <div className="container">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="h-9 block">
              <Image src={logoSrc} alt="logo" className="w-full h-full" />
            </Link>

            {/* Desktop Menu */}
            <ul className="flex items-center gap-10 xl:gap-12">
              {navData.map((item, i) => (
                <li key={i} className="relative group">
                  {/* Simple Link */}
                  {!item.submenu && (
                    <NavItem
                      label={item.label}
                      linkUrl={item.href!}
                      pathname={pathname}
                      isDark={isDark}
                    />
                  )}

                  {/* Dropdown Parent */}
                  {item.submenu && (
                    <>
                      <NavItem
                        label={item.label}
                        linkUrl={item.href!}
                        arrow
                        pathname={pathname}
                        isDark={isDark}
                      />

                      <div
                        className={`absolute left-0 top-full w-111 rounded-xl shadow-lg p-4 opacity-0 transition pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto ${dropdownBg}`}
                      >
                        <ul>
                          {item.items?.map((sub, idx) => (
                            <li key={idx}>
                              <NavListItem
                                pathname={pathname}
                                href={sub.href}
                                title={sub.title}
                                description={sub.description}
                                iconSrc={sub.iconSrc.src}
                                isDark={isDark}
                              />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Button
              variant={isDark ? "contrastdefault" : "primarydefault"}
              label="Get Early Access"
              href="/"
            />
          </div>
        </div>
      </header>

      {/* MOBILE HEADER */}
      <header
        className={`py-5.5 xl:hidden fixed left-0 right-0 top-0 z-50 ${headerBg}`}
      >
        <div className="container">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="h-9 block">
              <Image src={logoSrc} alt="logo" className="w-full h-full" />
            </Link>

            {/* Burger Button */}
            <button onClick={() => setMobileOpen(true)} className="cursor-pointer">
              <IoMenu size={24} className={textColor} />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      {mobileOpen && (
        <div
          className={`full-menu-block fixed inset-0 z-50 p-5 animate-slideLeft ${isDark ? "bg-gray900 text-white" : "bg-gray100 text-gray800"
            }`}
        >
          <div className="flex justify-between items-center mb-8">
            <Image src={logoSrc} alt="logo" className="h-7 w-auto" />
            <button
              className="cursor-pointer"
              onClick={() => {
                setMobileOpen(false);
                setSubmenuOpen(false);
              }}
            >
              <IoClose size={24} className={textColor} />
            </button>
          </div>

          {/* Main Menu */}
          {!submenuOpen && (
            <div className="space-y-3">
              <ul className="space-y-2">
                {navData.map((item, i) => (
                  <li key={i}>
                    {!item.submenu ? (
                      <MobileNavItem
                        pathname={pathname}
                        label={item.label}
                        href={item.href!}
                        isDark={isDark}
                        onClick={() => {
                          setMobileOpen(false);
                          setSubmenuOpen(false);
                        }}
                      />
                    ) : (
                      <MobileNavItem
                        pathname={pathname}
                        label={item.label}
                        trailingIcon
                        isDark={isDark}
                        onClick={() => {
                          setSubmenuItems(item.items ?? []);
                          setSubmenuOpen(true);
                        }}
                      />
                    )}
                  </li>
                ))}
              </ul>

              <div className="pt-6">
                <Button
                  variant={isDark ? "contrastdefault" : "primarydefault"}
                  label="Get Early Access"
                  href="/"
                />
              </div>
            </div>
          )}

          {/* Submenu */}
          {submenuOpen && (
            <div className="space-y-3">
              <MobileBackButton
                isDark={isDark}
                onClick={() => setSubmenuOpen(false)}
              />

              <ul className="space-y-3">
                {submenuItems?.map((sub, i) => (
                  <li key={i}>
                    <NavListItem
                      pathname={pathname}
                      href={sub.href}
                      title={sub.title}
                      description={sub.description}
                      iconSrc={sub.iconSrc.src}
                      isDark={isDark}
                      onClick={() => {
                        setMobileOpen(false);
                        setSubmenuOpen(false);
                      }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </>
  );
};

/* ----------------- SMALL COMPONENTS ------------------ */

type SubmenuItem = {
  href: string;
  title: string;
  description: string;
  iconSrc: StaticImageData;
};

type NavItemProps = {
  pathname: string;
  label: React.ReactNode | string;
  arrow?: boolean;
  linkUrl?: string;
  isDark?: boolean;
};

const NavItem: React.FC<NavItemProps> = ({
  pathname,
  label,
  arrow,
  linkUrl = "/",
  isDark,
}) => {
  const isActive = pathname === linkUrl;

  return (
    <Link
      href={linkUrl}
      className={`cursor-pointer flex items-center gap-2 text-base font-medium leading-tight py-8.5 -mb-2 group transition 
        ${isDark ? "text-white hover:text-gray300" : "text-gray800 hover:text-gray500"}
        ${isActive ? (isDark ? "!text-gray300" : "!text-gray500") : ""}
      `}
    >
      {label}
      {arrow && <ArrowDown active={isActive} isDark={isDark} />}
    </Link>
  );
};

const ArrowDown = ({
  active = false,
  isDark,
}: {
  active?: boolean;
  isDark?: boolean;
}) => (
  <svg width="11" height="7" viewBox="0 0 11 7" fill="none">
    <path
      d="M1 1L5.5 5.5L10 1"
      stroke={
        active
          ? isDark
            ? "#E0E0E0"
            : "#8B909C"
          : isDark
            ? "#FFFFFF"
            : "#101729"
      }
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="group-hover:stroke-gray300"
    />
  </svg>
);

export default Header;
