import React from "react";
import Badge from "../components/Badge";
import Image from "next/image";
import Button, { ButtonVariant } from "../components/Button";



type ButtonType = {
  label: string;
  href?: string;          // ✅ OPTIONAL
  onClick?: () => void;   // ✅ ALLOWED
  variant?: ButtonVariant;
  trailingIcon?: boolean;
};


type BadgeType = {
  label: string;
  icon?: string; // src path
};

type BannerSectionProps = {
  badge?: BadgeType;
  title?: string;
  titleContainer?: string;
  description?: string;
  descContainer?: string;
  buttons: ButtonType[];
};

const CommonBannerSection: React.FC<BannerSectionProps> = ({
  badge,
  title,
  titleContainer,
  description,
  descContainer,
  buttons,
}) => {
  return (
    <div className="max-xs:pt-30 max-xs:pb-12 pt-46 pb-24">
      <div className="container">
        <div className="sm:text-center">

          {/* Badge */}
          {badge?.label && (
            <Badge
              label={badge.label}
              icon={
                badge.icon ? (
                  <Image
                    src={badge.icon}
                    alt="badge-icon"
                    width={15}
                    height={15}
                  />
                ) : undefined
              }
            />
          )}

          {/* Title */}
          <div className={`mt-8 ${titleContainer}`}>
            <h1 className="max-xs:text-3xl max-xs:leading-9 text-5xl leading-13 xxl:text-80 font-semibold xxl:leading-22 tracking-[-1.44px] xxl:tracking-[-2.40px] text-gray800">
              {title}
            </h1>
          </div>

          {/* Description */}
          {description && <div className={`mt-8 w-full lg:max-w-230 sm:mx-auto ${descContainer}`}>
            <p className="text-lg xxl:text-xl font-normal leading-7 text-gray700">
              {description}
            </p>
          </div>}

          {/* Buttons */}
          <div className="max-xs:mt-5 mt-12 xxl:mt-18 max-sm:flex-col max-sm:items-start flex gap-4 justify-center">
            {buttons.map((btn, i) => (
              <Button
                key={i}
                label={btn.label}
                href={btn.href}
                onClick={btn.onClick}
                variant={btn.variant}
                trailingIcon={btn.trailingIcon}
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default CommonBannerSection;
