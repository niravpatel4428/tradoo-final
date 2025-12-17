"use client";

import React, { useEffect, useState } from "react";
import Badge from "../components/Badge";
import Image, { StaticImageData } from "next/image";

import infocircl from "@/public/image/svg/gray-info-circle.svg";
import infoicon from "@/public/image/svg/gray-info-circle.svg";
import info from "@/public/image/svg/gray-info-circle.svg";
import logo from "@/public/image/svg/step-logo.svg";
import usdc from "@/public/image/svg/usdc.svg";
import btc from "@/public/image/svg/small-btc-general.svg";
import eth from "@/public/image/svg/small-ethereum.svg";
import portfoliograph from "@/public/image/portfolio-graph.png";
import portfoliomobilegraph from "@/public/image/portfolio-mobile-graph.png";
import colourtuneing from "@/public/image/svg/colour-tuneing.svg";
import shieldup from "@/public/image/svg/shield-up.svg";
import turning from "@/public/image/svg/turning.svg";
import graph from "@/public/image/svg/presentation-graph.svg";
import eye from "@/public/image/svg/eye.svg";
import bolt from "@/public/image/svg/bolt.svg";
import Link from "next/link";
import Button from "../components/Button";
import { ChevronRight } from "lucide-react";
import { useRef } from "react";




const items = [
  {
    icon: turning,
    title: "Stability level",
    desc: "Medium — controlled, predictable adjustments."
  },
  {
    icon: colourtuneing,
    title: "Exposure range",
    desc: "Balanced allocation across USDC, BTC and ETH."
  },
  {
    icon: shieldup,
    title: "Stress behavior",
    desc: "Reduced exposure during high volatility phases."
  },
  {
    icon: graph,
    title: "Trend behavior",
    desc: "Moderate exposure increase in stable trends."
  },
  {
    icon: eye,
    title: "Oversight protection",
    desc: "Continuous monitoring ensures positions stay within boundaries."
  },
  {
    icon: bolt,
    title: "Adjustment speed",
    desc: "Moderate — responds to clear regime changes."
  }
];

type AllocationItem = {
  id: number;
  name: string;
  icon: StaticImageData;
  min: number;
  max: number;
  color: string;
};

const allocations: AllocationItem[] = [
  {
    id: 1,
    name: "USDC",
    icon: usdc,
    min: 30,
    max: 50,
    color: "bg-[#2775CA]",
  },
  {
    id: 2,
    name: "BTC",
    icon: btc,
    min: 30,
    max: 45,
    color: "bg-[#F7931A]",
  },
  {
    id: 3,
    name: "ETH",
    icon: eth,
    min: 15,
    max: 30,
    color: "bg-[#627EEA]",
  },
];


/* ================= MAIN COMPONENT ================= */

const Riskprofilestep = () => {

  const mainRef = useRef<HTMLDivElement>(null);

  // Step control
  const [step, setStep] = useState<2 | 3>(2);

  // Loading state
  const [loading, setLoading] = useState(false);

  // Answers state
  const [answers, setAnswers] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
  });

  const allAnswered = Object.values(answers).every(Boolean);

  const handleSelect = (key: keyof typeof answers, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    if (!allAnswered) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setStep(3);
    }, 2000);
  };

  useEffect(() => {
    mainRef.current?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [step]);

  const handleStepChange = (nextStep: 2 | 3) => {
    setStep(nextStep);
  };



  return (
    <div className="h-screen w-screen bg-white overflow-hidden relative z-50 md:p-3">
      <div className="flex h-full">
        {/* ================= SIDEBAR ================= */}
        <aside className="max-lg:hidden lg:w-78 xl:w-90 xxl:w-117 bg-gray100 rounded-3xl lg:p-6 xl:p-8 xxl:p-12 stepsidebar">
          <div className="flex flex-col gap-10">
            <div className=""><Link href="/" className="inline-block"><Image src={logo} alt="iconlogo" className="" /></Link></div>

            {/* Stepper */}
            {/* <Stepper currentStep={step} /> */}
            <Stepper
              currentStep={step}
              onStepChange={handleStepChange}
            />

          </div>
        </aside>

        {/* ================= CONTENT ================= */}
        <main ref={mainRef} className="flex-1 max-sm:py-5 sm:p-4 md:p-1 lg:p-8 xl:p-12 overflow-y-auto">
          <div className="mx-auto max-w-285">
            {/* STEP 2 */}
            {step === 2 && (
              <>
                <div className="lg:hidden pt-1 mb-10 max-sm:px-4"><Link href="/" className="inline-block"><Image src={logo} alt="iconlogo" className="" /></Link></div>

                <div className="max-sm:px-4 max-lg:hidden">
                  <Badge
                    label="Step 2"
                  />
                </div>

                <div className="max-sm:px-4 lg:hidden">
                  <Badge
                    label="Step 2/3"
                  />
                </div>

                <div className="max-sm:px-4">
                  <h1 className="max-xs:text-3xl max-xs:leading-9 max-xs:tracking-normal text-40 leading-11.5 tracking-[-1.20px] xxl:text-56 font-semibold xxl:leading-16 xxl:tracking-[-1.68px] text-lightgray900 mt-6 mb-10 pb-10 border-b border-b-gray300">
                    Before we prepare your Private Beta access,
                    let&apos;s understand your risk profile.
                  </h1>
                </div>

                <p className="max-sm:px-4 text-gray700 text-lg leading-[144%] mb-10">
                  This takes less than 30 seconds and helps us personalise your experience inside Tradoo.
                  <br />No commitment. Just honest answers.
                </p>

                <div className="space-y-2">
                  <Question
                    title="How do market swings make you feel?"
                    options={["Calm", "Neutral", "Uncomfortable"]}
                    value={answers.q1}
                    onChange={(v) => handleSelect("q1", v)}
                  />

                  <Question
                    title="What do you care about most?"
                    options={["Stability", "Balance", "Higher potential"]}
                    value={answers.q2}
                    onChange={(v) => handleSelect("q2", v)}
                  />

                  <Question
                    title="If your portfolio temporarily dropped 10%, how would you react?"
                    options={["Stay calm", "Slightly worried", "Very stressed"]}
                    value={answers.q3}
                    onChange={(v) => handleSelect("q3", v)}
                  />

                  <Question
                    title="How long do you plan to invest?"
                    options={["Short-term", "Medium-term", "Long-term"]}
                    value={answers.q4}
                    onChange={(v) => handleSelect("q4", v)}
                  />

                  <Question
                    title="How often do you want your portfolio to adjust?"
                    options={[
                      "As little as possible",
                      "Occasionally",
                      "Actively",
                    ]}
                    value={answers.q5}
                    onChange={(v) => handleSelect("q5", v)}
                  />
                </div>

                {/* Submit */}
                <div className="max-sm:px-4 mt-10 max-md:flex-col max-md:gap-y-8 max-md:items-start flex items-center gap-8">
                  <button
                    disabled={!allAnswered || loading}
                    onClick={handleSubmit}
                    className={`flex min-w-59 items-center justify-center gap-2 rounded-full px-8 py-4.5 text-lg font-semibold leading-5 transition
                      ${allAnswered
                        ? "bg-lightgray900 text-white hover:bg-lightgray900"
                        : "bg-gray400 text-white cursor-not-allowed"
                      }`}
                  >
                    {loading && (
                      <span className="loader-material">
                        {Array.from({ length: 12 }).map((_, i) => (
                          <div key={i}></div>
                        ))}
                      </span>
                    )}


                    {loading
                      ? "Preparing your risk profile..."
                      : "Show My Risk Profile"}
                  </button>

                  {!allAnswered && (
                    <p className="text-base leading-5.5 font-medium text-[#C94747]">
                      Please complete all questions, so we can correctly determine your risk profile
                    </p>
                  )}

                  {allAnswered && (
                    <p className="flex gap-3 text-base leading-5.5 font-medium text-gray700">
                      <Image src={infocircl} alt="icon" className="" /> Your answers stay private and will only be used to set your risk boundaries inside the Beta.
                    </p>
                  )}
                </div>

                <div className="max-sm:py-12 max-sm:pb-7 mt-10 pt-10 xxl:pt-12 border-t border-t-gray300">
                  <ul className="max-xs:flex-col max-xs:items-center flex gap-10 justify-center">
                    {footerLinks.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className="text-base leading-5.5 text-gray700 hover:text-lightgray900"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <div className="max-sm:p-0 max-lg:p-4">

                <div className="lg:hidden pt-1 mb-10 max-sm:px-4"><Link href="/" className="inline-block"><Image src={logo} alt="iconlogo" className="" /></Link></div>

                <div className="max-sm:px-4">
                  <Badge
                    label="You’re all set"
                  />
                </div>

                <div className="max-sm:px-4">
                  <h1 className="max-xs:text-3xl max-xs:leading-9 max-xs:tracking-normal text-40 leading-11.5 tracking-[-1.20px] xxl:text-56 font-semibold xxl:leading-16 xxl:tracking-[-1.68px] text-lightgray900 mt-6 mb-6">
                    Your risk profile: Moderate
                  </h1>
                </div>

                <p className="max-sm:px-4 text-gray700 text-xl leading-[144%] mb-14">
                  Balanced exposure. Controlled adjustments. Built for long-term clarity and stability.
                </p>

                <div className="space-y-2">
                  <div className="rounded-3xl max-sm:px-4 py-8 px-10 bg-green max-xl:flex-col max-xl:items-start flex gap-10">
                    <div className="space-y-4 max-w-189">
                      <h4 className="text-2xl font-semibold leading-8 tracking-[-0.24px] text-white">See how this profile looks inside the platform</h4>
                      <p className="text-white text-lg leading-[144%]">Your Private Beta request has been received. We&apos;ll send your NDA and access instructions shortly. All early access benefits will be available to you. </p>
                    </div>
                    <div className="flex-custom flex flex-col gap-4 justify-end">
                      <Button label="Explore Dashboard" href="#" trailingIcon variant="contrastdefault" />
                    </div>
                  </div>
                  <div className="rounded-3xl p-6 bg-gray100 flex gap-3">
                    <Image src={infoicon} alt="icon" />
                    <p className="text-gray700 text-lg leading-[144%]">Portfolio execution will only be enabled once your Private Beta access is approved.</p>
                  </div>
                </div>

                <div className="space-y-8 max-sm:mt-20 mt-14">
                  <h1 className="max-sm:px-4 text-4xl leading-11 tracking-[-0.72px] xxl:text-44 font-semibold xxl:leading-13 xxl:tracking-[-0.88px] text-lightgray900">Explore your profile</h1>
                  <div className="rounded-3xl max-sm:px-4 p-8 bg-gray100">
                    <ul className="space-y-4">
                      <li className="flex items-start gap-4">
                        <span className="min-w-5 w-5 h-5 mt-0.5 rounded-full flex justify-center items-center bg-[#4A948D]">
                          <ChevronRight className="w-4 h-4 text-white" />
                        </span>
                        <span className="text-lg font-normal leading-[144%] text-gray700">Your portfolio stays withing clearly defined exposure boundaries</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="min-w-5 w-5 h-5 mt-0.5 rounded-full flex justify-center items-center bg-[#4A948D]">
                          <ChevronRight className="w-4 h-4 text-white" />
                        </span>
                        <span className="text-lg font-normal leading-[144%] text-gray700">Adjustments happen only when the market environment changes</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="min-w-5 w-5 h-5 mt-0.5 rounded-full flex justify-center items-center bg-[#4A948D]">
                          <ChevronRight className="w-4 h-4 text-white" />
                        </span>
                        <span className="text-lg font-normal leading-[144%] text-gray700">You avoid emotional decisions, speculation and unnecessary risk</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-14 mt-14">
                  <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 xl:col-span-4">
                      <div className="max-sm:px-4 space-y-4 xl:max-w-80">
                        <h4 className="text-2xl font-semibold leading-8 text-lightgray900 tracking-[-0.24px]">Typical exposure range</h4>
                        <p className="text-lg leading-[144%] text-gray700">Balanced exposure. Controlled adjustments. Built for long-term clarity and stability.</p>
                      </div>
                    </div>
                    <div className="col-span-12 xl:col-span-8">
                      <div className="max-sm:px-4 p-10 rounded-3xl bg-gray100 xxl:-ml-5">
                        <div className="space-y-10">
                          {allocations.map((item) => {
                            const width = item.max - item.min;

                            return (
                              <div key={item.id} className="space-y-3">
                                {/* Top row */}
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-3">
                                    <Image
                                      src={item.icon}
                                      alt={item.name}
                                    />
                                    <span className="text-lg leading-[144%] text-lightgray900">
                                      {item.name}
                                    </span>
                                  </div>

                                  <span className="text-lg leading-[144%] text-lightgray900">
                                    {item.min}-{item.max}%
                                  </span>
                                </div>

                                {/* Progress track */}
                                <div className="relative h-2 w-full rounded-full bg-gray200 overflow-hidden">
                                  {/* Dynamic positioned bar */}
                                  <div
                                    className={`absolute h-full rounded-full ${item.color}`}
                                    style={{
                                      left: `${item.min}%`,
                                      width: `${width}%`,
                                    }}
                                  />
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 xl:col-span-4">
                      <div className="max-sm:px-4 space-y-4 xl:max-w-80">
                        <h4 className="text-2xl font-semibold leading-8 text-lightgray900 tracking-[-0.24px]">How your profile behaves in different markets</h4>
                        <p className="text-lg leading-[144%] text-gray700">Your profile reacts differently depending on the market environment — always within your defined risk boundaries.</p>
                      </div>
                    </div>
                    <div className="col-span-12 xl:col-span-8">
                      <Image src={portfoliograph} alt="graph" className="xxl:-ml-5 max-sm:hidden" />
                      <Image src={portfoliomobilegraph} alt="graph" className="xxl:-ml-5 sm:hidden w-full max-w-98 mx-auto" />
                    </div>
                  </div>
                  <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 xl:col-span-4">
                      <div className="max-sm:px-4 space-y-4 xl:max-w-80">
                        <h4 className="text-2xl font-semibold leading-8 text-lightgray900 tracking-[-0.24px]">Profile characteristics</h4>
                        <p className="text-lg leading-[144%] text-gray700">Your profile reacts differently depending on the market environment — always within your defined risk boundaries.</p>
                      </div>
                    </div>
                    <div className="col-span-12 xl:col-span-8">
                      <div className="grid grid-cols-12 gap-2 xxl:-ml-5">

                        {items.map((item, index) => (
                          <div key={index} className="col-span-12 md:col-span-6 lg:col-span-6 xxl:col-span-4">
                            <div className="h-full gap-y-6 flex flex-col rounded-3xl max-xs:p-5 max-sm:px-4 p-8 bg-gray100">
                              <div className="min-w-12 w-12 h-12 rounded-xl p-3 bg-white flex justify-center items-center">
                                <Image
                                  src={item.icon}
                                  alt="icon"
                                  className="max-h-full"
                                />
                              </div>

                              <div className="flex flex-col gap-2">
                                <h5 className="text-lg font-semibold leading-6 text-lightgray900">
                                  {item.title}
                                </h5>
                                <p className="text-lg font-normal leading-[144%] text-gray700">
                                  {item.desc}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="max-lg:px-4 flex max-lg:flex-col max-lg:items-start items-center justify-between py-12 gap-6">
                  <div className="flex gap-3 items-center">
                    <Image src={info} alt="icon" />
                    <p className="text-base leading-5.5 text-gray700"><span className="font-medium text-lightgray900 block">Demo mode only. No execution.</span>
                      Execution features will be enabled once your Private Beta access is approved.</p>
                  </div>
                  <div className="flex-custom">
                    <Button label="Join Waitlist" href="#" trailingIcon />
                  </div>
                </div>

                <div className="max-sm:py-12 max-sm:pb-7 sm:mt-4 sm:pt-7 md:mt-10 md:pt-10 xxl:pt-12 border-t border-t-gray300">
                  <ul className="max-xs:flex-col max-xs:items-center flex gap-10 justify-center">
                    {footerLinksFinalStep.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className="text-base leading-5.5 text-gray700 hover:text-lightgray900"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Riskprofilestep;

const footerLinks = [
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    label: "Terms and Conditions",
    href: "/terms-of-use",
  },
];

const footerLinksFinalStep = [
  {
    label: "Approach",
    href: "/approach",
  },
  {
    label: "Approach",
    href: "/approach",
  },
];

/* ================= STEPPER ================= */

type StepItem = {
  id: number;
  title: string;
  description: string;
};

const steps: StepItem[] = [
  {
    id: 1,
    title: "Your email",
    description: "We’ll use it to send you instructions",
  },
  {
    id: 2,
    title: "Your risk profile",
    description:
      "Complete a 30-second questionnaire to set your risk profile",
  },
  {
    id: 3,
    title: "Confirm and proceed",
    description: "Proceed to app with your risk profile",
  },
];

// const Stepper = ({ currentStep }: { currentStep: number }) => {
//   return (
//     <div className="flex flex-col gap-2">
//       {steps.map((step, index) => {
//         const isCompleted = currentStep > step.id;
//         const isActive = currentStep === step.id;

//         return (
//           <StepperItem
//             key={step.id}
//             step={step}
//             isCompleted={isCompleted}
//             isActive={isActive}
//             isLast={index === steps.length - 1}
//           />
//         );
//       })}
//     </div>
//   );
// };

const Stepper = ({
  currentStep,
  onStepChange,
}: {
  currentStep: number;
  onStepChange: (step: 2 | 3) => void;
}) => {
  return (
    <div className="flex flex-col gap-2">
      {steps.map((step, index) => {
        const isCompleted = currentStep > step.id;
        const isActive = currentStep === step.id;

        return (
          <StepperItem
            key={step.id}
            step={step}
            isCompleted={isCompleted}
            isActive={isActive}
            isLast={index === steps.length - 1}
            onClick={() => {
              if (step.id === 2 || step.id === 3) {
                onStepChange(step.id as 2 | 3);
              }
            }}
          />
        );
      })}
    </div>
  );
};


// const StepperItem = ({
//   step,
//   isCompleted,
//   isActive,
//   isLast,
// }: {
//   step: StepItem;
//   isCompleted: boolean;
//   isActive: boolean;
//   isLast: boolean;
// }) => {
//   return (
//     <div className="flex gap-4">
//       {/* Circle + Line */}
//       <div className="flex flex-col items-center">
//         <div
//           className={`
//             flex h-7 min-w-7 w-7 items-center justify-center rounded-full text-base font-bold leading-5.5
//             ${isCompleted || isActive
//               ? "bg-green text-white"
//               : "bg-gray300 text-lightgray900"
//             }
//           `}
//         >
//           {step.id}
//         </div>

//         {!isLast && (
//           <div
//             className={`
//               mt-1 w-0.5 flex-1 rounded-full
//               ${isCompleted ? "bg-emerald-700" : "bg-gray-200"}
//             `}
//           />
//         )}
//       </div>

//       {/* Text */}
//       <div className="pb-10 space-y-2">
//         <p
//           className={`font-semibold text-lg leading-6 text-lightgray900 ${isCompleted || isActive
//             ? "text-lightgray900"
//             : "text-lightgray900"
//             }`}
//         >
//           {step.title}
//         </p>
//         <p className="text-lg leading-[144%] text-gray700">
//           {step.description}
//         </p>
//       </div>
//     </div>
//   );
// };

const StepperItem = ({
  step,
  isCompleted,
  isActive,
  isLast,
  onClick,
}: {
  step: StepItem;
  isCompleted: boolean;
  isActive: boolean;
  isLast: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className="flex gap-4 cursor-pointer select-none"
    >
      {/* Circle + Line */}
      <div className="flex flex-col items-center">
        <div
          className={`
            flex h-7 min-w-7 w-7 items-center justify-center rounded-full text-base font-bold leading-5.5
            ${isCompleted || isActive
              ? "bg-green text-white"
              : "bg-gray300 text-lightgray900 hover:bg-gray300"
            }
          `}
        >
          {step.id}
        </div>

        {!isLast && (
          <div
            className={`
              mt-1 w-0.5 flex-1 rounded-full
              ${isCompleted ? "bg-green" : "bg-gray300"}
            `}
          />
        )}
      </div>

      {/* Text */}
      <div className="pb-10 space-y-2">
        <p className="font-semibold text-lg leading-6 text-lightgray900">
          {step.title}
        </p>
        <p className="text-lg leading-[144%] text-gray700">
          {step.description}
        </p>
      </div>
    </div>
  );
};


/* ================= QUESTION ================= */

const Question = ({
  title,
  options,
  value,
  onChange,
}: {
  title: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) => {
  return (
    <div className="max-sm:py-6 max-sm:px-4 p-6 rounded-20 bg-gray100 space-y-5">
      <p className="text-base font-medium leading-5.5 text-lightgray900">{title}</p>
      <div className="max-md:flex-col flex gap-2">
        {options.map((option) => {
          const checked = value === option;

          return (
            <button
              key={option}
              onClick={() => onChange(option)}
              className={`
                flex flex-1 items-center relative gap-3 rounded-full p-3 text-base leading-5.5 cursor-pointer transition
                ${checked
                  ? "bg-green text-white shadow-[var(--shadowoption)]"
                  : "bg-white text-lightgray900 hover:bg-gray200"
                }
              `}
            >
              {/* Check Icon */}
              {checked && (
                <span className="absolute top-1/2 left-3 -translate-y-1/2 flex h-6 w-6 items-center justify-center rounded-full bg-white">
                  <svg
                    className="h-4 min-w-4 w-4 text-green"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
              )}

              {/* Option Text */}
              <span className="flex-1 text-center">{option}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
