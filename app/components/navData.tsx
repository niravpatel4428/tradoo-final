import risk from "@/public/image/svg/risk.svg";
import strategy from "@/public/image/svg/strategy.svg";

export const navData = [
  { label: "Product", href: "/", submenu: false, },
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
        title: "Stablecoin Treasury Infrastructure",
        description: "USDC lending via on-chain credit markets for CFOs and treasuries.",
        iconSrc: risk,

      },
      {
        href: "/vaults",
        title: "Institutional Strategy Vaults",
        description:
          "Digital asset portfolios for asset managers and family offices.",
        iconSrc: strategy,

      },
    ],
  },

  { label: "Insignts", href: "/insights", submenu: false, },
];
