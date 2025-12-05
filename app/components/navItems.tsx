import Image from "next/image";
import Link from "next/link";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

interface NavListItemProps {
  pathname: string;
  href: string;
  title: string;
  description: string;
  iconSrc: string;
  onClick?: () => void;
  isDark?: boolean;
}

export const NavListItem = ({
  pathname,
  href = "/",
  title,
  description,
  iconSrc,
  onClick,
  isDark = false,
}: NavListItemProps) => {
  return (
    <Link
      href={href} onClick={onClick}
      className={`rounded-xl cursor-pointer p-4 flex items-start gap-4 transition-all duration-300 group/card ${isDark ? "bg-gray800 hover:bg-gray700" : "bg-white hover:bg-gray100"
            }`}
    >
      <div className="bg-gray100 rounded-xl size-14 flex-none flex items-center justify-center group-hover/card:bg-white transition-all duration-300">
        <Image
          src={iconSrc}
          alt={title}
          width={32}
          height={32}
          className="size-8"
        />
      </div>

      <div className="flex flex-col flex-wrap space-y-2">
        <span className={`font-medium text-base leading-tight ${isDark ? "text-white" : "text-gray800"
            }`}>
          {title}
        </span>

        <p className={`font-normal text-base leading-snug m-0 ${isDark ? "text-white" : "text-gray700"
            }`}>
          {description}
        </p>
      </div>
    </Link>
  );
};

interface MobileNavItemProps {
  pathname: string;
  label: string;
  href?: string;
  trailingIcon?: boolean; // show the ">" icon
  onClick?: () => void;
  isDark?: boolean;
}

export const MobileNavItem: React.FC<MobileNavItemProps> = ({
  label,
  pathname,
  href = "/",
  trailingIcon = false,
  onClick,
  isDark = false,
}) => {
  const className = `w-full cursor-pointer flex items-center justify-between px-4 py-6 rounded-2xl
                    transition-all text-left ${isDark ? "bg-gray800 text-white hover:bg-gray700" : "bg-white text-gray800 hover:bg-gray100"
            }`;

  if (onClick) {
    return (
      <Link href={href} onClick={onClick} className={className}>
        <span className={`text-base font-medium leading-tight capitalize ${isDark ? "text-white" : "text-gray800!"
            } ${pathname === href ? "text-gray500!" : ""}`}>
          {label}
        </span>

        {trailingIcon && (
          <IoChevronForward size={24} className={`text-darblue ${isDark ? "text-white" : "text-darblue"
            }`} />
        )}
      </Link>
    );
  }

  return (
    <Link href={href} className={className}>
      <span className={`text-base font-medium leading-tight capitalize ${isDark ? "text-white" : "text-gray800!"
            } ${pathname === href ? "text-gray500!" : ""}`}>
        {label}
      </span>

      {trailingIcon && <IoChevronForward size={24} className={`text-darblue ${isDark ? "text-white" : "text-darblue"
            }`} />}
    </Link>
  );
};

interface MobileBackButtonProps {
  label?: string;
  onClick: () => void;
  isDark?: boolean;
}

export const MobileBackButton: React.FC<MobileBackButtonProps> = ({
  label = "Back",
  onClick,  isDark = false,
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-full cursor-pointer flex items-center gap-4 px-4 py-6 rounded-2xl
                transition-all text-left ${isDark ? "text-white bg-transparent" : "bg-gray100 text-gray800  hover:bg-gray200"
            }`}
    >
      <IoChevronBack size={24} className={`${isDark ? "text-white" : "text-darblue"
            }`} />
      <span className={`text-base font-medium ${isDark ? "text-white" : "text-gray800"
            }`}>{label}</span>
    </button>
  );
};
