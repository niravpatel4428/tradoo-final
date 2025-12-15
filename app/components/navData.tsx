import risk from "@/public/image/svg/risk.svg";
import strategy from "@/public/image/svg/strategy.svg";

export const navData = [
  { label: "Product", href: "/product", submenu: false, },
  { label: "About", href: "/about", submenu: false, },
  { label: "Approach", href: "/approach", submenu: false, },

  {
    label: "Automated Investing",
    href: "/riskprofiles",
    submenu: true,
    items: [
      {
        href: "/riskprofiles",
        title: "Risk Profiles",
        description: "Choose the profile that matches your risk tolerance",
        iconSrc: risk,

      },
      {
        href: "/strategy-framework",
        title: "Strategy Framework",
        description:
          "See how Tradoo integrates proven principles behind the scenes",
        iconSrc: strategy,

      },
    ],
  },

  {
    label: "Professionals", href: "/professional",
    submenu: true,
    items: [
      {
        href: "/professional",
        title: "Professionals1",
        description: "Choose the profile that matches your risk tolerance",
        iconSrc: risk,

      },
      {
        href: "/professional",
        title: "Professionals2",
        description:
          "See how Tradoo integrates proven principles behind the scenes",
        iconSrc: strategy,

      },
    ],
  },

  { label: "Investors", href: "/invest", submenu: false, },
];
