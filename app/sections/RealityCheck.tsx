import React from 'react'
import Badge from '../components/Badge'

const returnBuckets = [
    {
        height: "60%",
        percent: "18.2%",
        label: "< -50%",
        sub: "~33.5K wallets",
        highlight: false,
    },
    {
        height: "100%",
        percent: "31.5%",
        label: "-50% to -10%",
        sub: "~70.9K wallets",
        highlight: true,
    },
    {
        height: "65%",
        percent: "16.8%",
        label: "-10% to +10%",
        sub: "~30.5K wallets",
        highlight: false,
    },
    {
        height: "55%",
        percent: "12.2%",
        label: "+10% to +50%",
        sub: "",
        highlight: false,
    },
    {
        height: "75%",
        percent: "21.3%",
        label: "> +50%",
        sub: "",
        highlight: false,
    },
];

type Strategy = {
    id: number;
    name: string;
    subtitle: string;
    percent: number;
    dark?: boolean;
};

const strategies: Strategy[] = [
    { id: 1, name: "< -50%", subtitle: "~33.5K wallets", percent: 18.2 },
    {
        id: 2, name: "-50% to -10%",
        subtitle: "~70.9K wallets",
        percent: 38.5,
        dark: true,
    },
    {
        id: 3,
        name: "-10% to +10%",
        subtitle: "~30.9K wallets",
        percent: 16.8,
    },
    {
        id: 4,
        name: "+10% to +50%",
        subtitle: "",
        percent: 12.9,
    },
    {
        id: 5,
        name: "> +50%",
        subtitle: "",
        percent: 23.3,
    },
];

const MAX_HEIGHT = 249;
const MIN_BAR_HEIGHT = 42;

const maxPercent = Math.max(...strategies.map((s) => s.percent));

const RealityCheck = () => {
    return (
        <>
            <div className="max-xs:py-15 py-42">
                <div className="container max-sm:px-0">
                    <div className="space-y-16">
                        <div className='grid grid-cols-12 gap-y-8 md:gap-5'>
                            <div className='col-span-12 lg:col-span-6'>
                                <div className='max-sm:px-4 space-y-8'>
                                    <div>
                                        <Badge
                                            label="Reality Check"
                                        />
                                    </div>
                                    <div>
                                        <h2 className='max-xs:text-3xl max-xs:leading-9 text-40 leading-11.5 tracking-[-1.20px] xl:text-56 font-semibold xl:leading-16 xl:tracking-[-1.68px] text-gray800'>Performance Distribution Across All Wallets</h2>
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-12 lg:col-span-6'>
                                <div className='max-sm:px-4 flex h-full flex-col justify-end gap-y-6'>
                                    <p className='text-lg font-normal leading-[144%] text-gray700'>A visible tail of big winners — and a wide base of capital slowly eroding. Insights visualizes this distribution; the Tradoo Engine is designed to operate with that reality in mind, not against it.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-3xl py-12 px-4 md:p-10">
                            <div>
                                <p className='text-gray800 text-2xl leading-8 tracking-[-0.5px] font-semibold'>Return buckets across 184,203 tracked wallets over the 30-day period.</p>
                            </div>

                            {/* add data below */}
                            <div className="mt-16 space-y-6">
                                <div className="overflow-auto">
                                    <div className="flex items-end justify-between gap-3 xl:gap-6 min-w-200 md:min-w-228">
                                        {strategies.map((item) => {
                                            const rawHeight =
                                                (item.percent / maxPercent) * MAX_HEIGHT;
                                            const barHeight =
                                                rawHeight < MIN_BAR_HEIGHT ? MIN_BAR_HEIGHT : rawHeight;

                                            return (
                                                <div
                                                    key={item.id}
                                                    className="flex flex-col items-start relative flex-1"
                                                >
                                                    <div
                                                        className={`
                                                            relative w-full rounded-lg p-2 transition-all duration-500
                                                            ${item.dark ? "bg-gunmetal" : "bg-[#C4DCDA]"}
                                                        `}
                                                        style={{ height: `${barHeight}px` }}
                                                    >
                                                        <span
                                                            className={`
                                                            absolute bottom-2 right-2
                                                            px-3 py-1 rounded-md text-sm font-medium leading-5 whitespace-nowrap
                                                            ${item.dark ? "bg-white text-gunmetal" : "bg-gunmetal text-white"}
                                                        `}
                                                        >
                                                            +{item.percent.toFixed(1)}%
                                                        </span>
                                                    </div>


                                                    {/* Titles */}
                                                    <div className="mt-6 min-h-26 xxl:min-h-20.5 flex flex-col items-start gap-2">
                                                        <div className="flex items-center gap-2">
                                                            {/* DOT ONLY FOR DARK ITEM */}
                                                            {/* {item.dark && (
                                                                <span className="w-2 h-2 rounded-full bg-[#0D9488]"></span>
                                                            )} */}

                                                            {/* NAME */}
                                                            <p className="text-sm xl:text-lg font-medium leading-[144%] text-gunmetal">
                                                                {item.name}
                                                            </p>
                                                        </div>

                                                        {/* SUBTITLE */}
                                                        <p className="text-sm xl:text-base text-aurometalsaurus font-normal leading-[144%]">
                                                            {item.subtitle}
                                                        </p>
                                                    </div>

                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default RealityCheck
