"use client";

import React from "react";
import Image from "next/image";
import Badge from "../components/Badge";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SocialIcons from "../components/SocialIcons";

import { FaLinkedin } from "react-icons/fa";

// =========================
//  TEAM DATA WITH CUSTOM SOCIAL ICONS
// =========================

const leadershipMembers = [
  {
    name: "Ekon Trenchard",
    role: "President, Governance & Structure",
    img: "/image/leader-img1.jpg",
    socials: [{ icon: <FaLinkedin size={26} />, href: "https://linkedin.com" }],
  },
  {
    name: "Kael Jakobsson",
    role: "President, Governance & Structure",
    img: "/image/leader-img2.jpg",
    socials: [{ icon: <FaLinkedin size={26} />, href: "https://linkedin.com" }],
  },
  {
    name: "Kenzie Appleby",
    role: "President, Governance & Structure",
    img: "/image/leader-img3.jpg",
    socials: [{ icon: <FaLinkedin size={26} />, href: "https://linkedin.com" }],
  },
  {
    name: "Kaja Keeling",
    role: "President, Governance & Structure",
    img: "/image/leader-img4.jpg",
    socials: [{ icon: <FaLinkedin size={26} />, href: "https://linkedin.com" }],
  },
];

const boardMembers = [
  {
    name: "Kaja Keeling",
    role: "President, Governance & Structure",
    img: "/image/leader-img5.jpg",
    socials: [{ icon: <FaLinkedin size={26} />, href: "https://linkedin.com" }],
  },
  {
    name: "Ekon Trenchard",
    role: "President, Governance & Structure",
    img: "/image/leader-img1.jpg",
    socials: [{ icon: <FaLinkedin size={26} />, href: "https://linkedin.com" }],
  },
  {
    name: "Kael Jakobsson",
    role: "President, Governance & Structure",
    img: "/image/leader-img2.jpg",
    socials: [{ icon: <FaLinkedin size={26} />, href: "https://linkedin.com" }],
  },
  {
    name: "Kenzie Appleby",
    role: "President, Governance & Structure",
    img: "/image/leader-img3.jpg",
    socials: [{ icon: <FaLinkedin size={26} />, href: "https://linkedin.com" }],
  },
];

const developmentMembers = [
  {
    name: "Ekon Trenchard",
    role: "President, Geovernance & Structure",
    img: "/image/leader-img4.jpg",
    socials: [{ icon: <FaLinkedin size={26} />, href: "https://linkedin.com" }],
  },
  {
    name: "Kael Jakobsson",
    role: "President, Geovernance & Structure",
    img: "/image/leader-img5.jpg",
    socials: [{ icon: <FaLinkedin size={26} />, href: "https://linkedin.com" }],
  },
  {
    name: "Kenzie Appleby",
    role: "President, Geovernance & Structure",
    img: "/image/leader-img1.jpg",
    socials: [{ icon: <FaLinkedin size={26} />, href: "https://linkedin.com" }],
  },
  {
    name: "Kaja Keeling",
    role: "President, Geovernance & Structure",
    img: "/image/leader-img2.jpg",
    socials: [{ icon: <FaLinkedin size={26} />, href: "https://linkedin.com" }],
  },
];

// =========================
//  MERGED ARRAY WITH TITLES
// =========================

const teamSections = [
  {
    title: "Leadership",
    members: leadershipMembers,
  },
  {
    title: "Governance & Board",
    members: boardMembers,
  },
  {
    title: "Development and Advisory",
    members: developmentMembers,
  },
];

// =========================
//  CARD COMPONENT
// =========================

const MemberCard = ({ member }) => (
    <div className="block h-full max-xs:rounded-2xl rounded-3xl overflow-hidden bg-gray100">
        <div className="block max-xs:h-64 h-[340px] overflow-hidden">
            <Image
                src={member.img}
                alt={member.name}
                width={340}
                height={340}
                className="max-w-full w-full h-full object-cover object-top"
            />
        </div>

        <div className="block max-xs:p-4 p-6">
            <div className="block">
                <h5 className="font-semibold text-lg leading-snug text-gray800 mb-2">
                    {member.name}
                </h5>

                <div className="text-base leading-snug mb-4">
                    <p>{member.role}</p>
                </div>
            </div>

            {/* Social Icons */}
            <div className="block">
                <ul className="flex flex-wrap gap-4 max-xs:gap-3">
                    {member.socials.map((item, index) => (
                    <li key={index}>
                        <SocialIcons
                        icon={item.icon}
                        href={item.href}
                        className="inline-flex items-center justify-center max-xs:w-10 max-xs:h-10 w-14 h-14 max-xs:rounded-lg rounded-2xl text-gray800 bg-white hover:bg-gray800 hover:text-white hover:opacity-100"
                        />
                    </li>
                    ))}
                </ul>
            </div>
            {/* Social Icons */}
        </div>
    </div>
);

// =========================
//  MAIN COMPONENT
// =========================

const OurTeam = () => {
    return (
        <>
            <div className="block bg-white max-xs:py-12 py-14 xl:pt-[108px] xl:pb-[84px]">
                <div className="container px-0 sm:px-4">
                    <div className="block">
                        {/* Main Section Title */}
                        <div className="block px-4 sm:px-0 max-xs:mb-14 mb-[72px] xl:mb-24">
                            <Badge label="Our Team" variant="lightgreen" className="mb-6" />

                            <div className="block font-semibold text-gray800 text-40 leading-[46px] xl:text-56 xl:leading-16 max-xs:text-[32px] max-xs:leading-[40px] max-xs:mb-6 mb-10 -tracking-[1.20px]">
                                <h2>Meet the core leadership responsible for strategy, governance, and execution.</h2>
                            </div>
                        </div>

                        {/* Dynamic Sections */}
                        <div className="block">
                            {teamSections.map((section, index) => (
                            <div key={index} className="block max-xs:mb-12 mb-[72px]">
                                <div className="font-semibold max-xs:text-xl text-2xl max-xs:mb-5 mb-8 text-gray800 px-4 sm:px-0">
                                    <h4>{section.title}</h4>
                                </div>

                                <div className="block pl-4 sm:pl-0">
                                    <Swiper
                                        className="leadership-carousel"
                                        spaceBetween={8}
                                        slidesPerView={4}
                                        loop
                                        breakpoints={{
                                            20: { slidesPerView: 1.10 },
                                            576: { slidesPerView: 2 },
                                            1024: { slidesPerView: 3 },
                                            1440: { slidesPerView: 4 },
                                        }}
                                    >
                                        {section.members.map((member, i) => (
                                        <SwiperSlide key={i}>
                                            <MemberCard member={member} />
                                        </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>
                            ))}
                        </div>
                        {/* End Dynamic Sections */}
                    </div>
                </div>
            </div> 
        </>
    );
};

export default OurTeam;
