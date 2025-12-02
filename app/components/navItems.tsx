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
}

export const NavListItem = ({
  pathname,
  href = "/",
  title,
  description,
  iconSrc,
  onClick,
}: NavListItemProps) => {
  return (
    <Link
      href={href} onClick={onClick}
      className="rounded-xl cursor-pointer bg-white p-4 flex items-start gap-4 hover:bg-gray100 transition-all duration-300 group/card"
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
        <span className={`text-gray800 font-medium text-base leading-tight`}>
          {title}
        </span>

        <p className="text-gray700 font-normal text-base leading-snug m-0">
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
}

export const MobileNavItem: React.FC<MobileNavItemProps> = ({
  label,
  pathname,
  href = "/",
  trailingIcon = false,
  onClick,
}) => {
  const className = `w-full cursor-pointer flex items-center justify-between px-4 py-6 rounded-2xl
                  bg-white hover:bg-gray100 transition-all text-left`;

  if (onClick) {
    return (
      <Link href={href} onClick={onClick} className={className}>
        <span className={`text-gray800 text-base font-medium leading-tight capitalize ${pathname === href ? "text-gray500!" : ""}`}>
          {label}
        </span>

        {trailingIcon && (
          <IoChevronForward size={24} className="text-darblue" />
        )}
      </Link>
    );
  }

  return (
    <Link href={href} className={className}>
      <span className={`text-gray800 text-base font-medium leading-tight capitalize ${pathname === href ? "text-gray500!" : ""}`}>
        {label}
      </span>

      {trailingIcon && <IoChevronForward size={24} className="text-darblue" />}
    </Link>
  );
};

interface MobileBackButtonProps {
  label?: string;
  onClick: () => void;
}

export const MobileBackButton: React.FC<MobileBackButtonProps> = ({
  label = "Back",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="w-full cursor-pointer flex items-center gap-4 px-4 py-6 rounded-2xl
                 bg-gray100 hover:bg-gray200 transition-all text-left"
    >
      <IoChevronBack size={24} className="text-darblue" />
      <span className="text-base font-medium text-gray800">{label}</span>
    </button>
  );
};
