import React from "react";
import Badge from "../components/Badge";
import Button from "../components/Button";
import Image, { type StaticImageData } from "next/image";

export type StepType = {
  id: number;
  number?: number;
  icon?: string;
  title: string;
  description: string;
  list?: string[];
  className?: string;     // custom wrapper class
  titleclassName?: string;     // custom wrapper class
  subtitleclassName?: string;     // custom wrapper class
  iconBg?: string;        // ⭐ custom icon background class
  badge?: {
    text: string;
    icon: string;
    badgeVariant?: "lightgreen" | "darkgreen" | "gray"
  };
};

type StepsSectionProps = {
  badgeLabel?: string;
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  steps: StepType[];
  className?: string;
  titleclassName?: string;
  subtitleclassName?: string;
  badgeVariant?: "lightgreen" | "darkgreen" | "gray";
  buttonVariant?: "primarydefault" | "secondarydefault" | "contrastdefault"; 
  info?: {
    icon?: StaticImageData;   // ⭐ imported image
    text?: string;
    className?: string;
  };

};

const StepsSection: React.FC<StepsSectionProps> = ({
  badgeLabel,
  info,
  badgeVariant,
  buttonVariant,
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  steps,
  className = "",
  titleclassName = "",
  subtitleclassName = "",
}) => {
  return (
    <div className={`block max-xs:pb-10 max-sm:pb-24 max-xs:py-10 py-42 ${className}`}>
      <div className="container max-sm:p-0">
        <div className="grid grid-cols-12 max-sm:gap-y-10 sm:gap-7 xxl:gap-16">
          {/* LEFT */}
          <div className="col-span-12 lg:col-span-6">
            <div className="max-sm:px-4 sm:text-left sticky top-42">
              {badgeLabel && <Badge label={badgeLabel} variant={badgeVariant} />}

              {title && (
                <div className="mt-6">
                  <h2 className={`max-xs:text-3xl max-xs:leading-10 text-40 leading-12 xxl:text-56 font-semibold xxl:leading-16 tracking-[-1.68px] text-gray800 ${titleclassName}`}>
                    {title}
                  </h2>
                </div>
              )}

              {subtitle && (
                <div className="mt-8">
                  <p className={`text-lg font-normal leading-[144%] color-gray700 ${subtitleclassName}`}>
                    {subtitle}
                  </p>
                </div>
              )}

              {ctaLabel && (
                <div className="mt-8">
                  <Button label={ctaLabel} href={ctaHref || "#"} variant={buttonVariant} trailingIcon />
                </div>
              )}
            </div>
          </div>

          {/* RIGHT (Steps) */}
          <div className="col-span-12 lg:col-span-6">
            <div className="w-full lg:max-w-171 ml-auto flex flex-col gap-2">
              {steps.map((item) => (
                <div
                  key={item.id}
                  className={`rounded-3xl bg-white max-sm:py-10 max-sm:px-4 sm:p-7 xxl:p-10 flex flex-col items-start max-xs:gap-y-7 gap-y-14 ${item.className || ""}`}
                >
                  {/* ICON / NUMBER */}
                  <div>
                    {item.icon ? (
                      <div
                        className={`w-16 h-16 rounded-xl flex items-center justify-center 
                        ${item.iconBg || "bg-gray100"}`}   // ⭐ Dynamic Icon BG here
                      >
                        <Image
                          src={item.icon}
                          alt="step-icon"
                          width={32}
                          height={32}
                          className="max-w-full max-h-full"
                        />
                      </div>
                    ) : (
                      <span className="text-5xl font-semibold leading-none tracking-[-1.44px] text-romansilver">
                        {item.number}
                      </span>
                    )}
                  </div>

                  {/* TEXT PART */}
                  <div className="flex flex-col items-start gap-y-4">
                    <h4 className={`text-2xl font-semibold leading-8 tracking-[-0.24px] text-gray800 ${item.titleclassName || ""}`}>
                      {item.title}
                    </h4>

                    <p className={`text-lg font-normal leading-[144%] text-gray700 ${item.subtitleclassName || ""}`}>
                      {item.description}
                    </p>

                    {item.list && (
                      <ul className="w-full p-6 mt-2 rounded-2xl bg-gray100 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {item.list.map((li, index) => (
                          <li
                            key={index}
                            className="relative pl-5 text-lg font-medium leading-6 text-gray800 
                            after:content-[''] after:absolute after:inline-block 
                            after:h-2 after:w-2 after:rounded-full after:bg-[#0D9488]
                            after:left-0 after:align-middle after:top-2"
                          >
                            {li}
                          </li>
                        ))}
                      </ul>
                    )}

                    {item.badge && (
                      <Badge
                        className="mt-2 w-full text-lg !font-normal !bg-[#E8F3F2] !rounded-2xl !p-5"
                        label={item.badge.text}
                        icon={
                          <Image
                            src={item.badge.icon}
                            alt="badge-icon"
                            width={24}
                            height={24}
                            className="min-w-6"
                          />
                        }
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="xl:text-center mt-12 md:mt-18 max-sm:px-4">
          {info?.icon && info?.text && (
            <div
              className={`flex justify-center gap-4 ${info.className || ""
                }`}
            >
              <div className="min-w-5">
                <Image
                  src={info.icon}
                  alt="icon"
                  className="object-contain"
                />
              </div>

              <p className="text-lg font-normal leading-[144%] text-gray500">{info.text}</p>
            </div>
          )}



        </div>
      </div>
    </div>
  );
};

export default StepsSection;
