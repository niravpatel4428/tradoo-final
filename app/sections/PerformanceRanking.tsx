import React from 'react'
import Badge from '../components/Badge'

type Conviction = "High" | "Medium" | "Low";

interface RankingRow {
    rank: number;
    name: string;
    address: string;
    category: string;
    roi: string;
    hitRate: string;
    trades: number;
    avgPos: string;
    conviction: Conviction;
}

const rankingData: RankingRow[] = [
    {
        rank: 1,
        name: "Alpha Trader",
        address: "0x7a16...9F2E",
        category: "Prediction",
        roi: "287.4%",
        hitRate: "78.2%",
        trades: 156,
        avgPos: "$45.2K",
        conviction: "High",
    },
    {
        rank: 2,
        name: "Sigma Capital",
        address: "0x7a16...9F2E",
        category: "On-Chain Protocols",
        roi: "194.6%",
        hitRate: "71.5%",
        trades: 89,
        avgPos: "$128.5K",
        conviction: "High",
    },
    {
        rank: 3,
        name: "0x7a16...9F2E",
        address: "0x7a16...9F2E",
        category: "Mixed",
        roi: "156.2%",
        hitRate: "68.9%",
        trades: 234,
        avgPos: "$321K",
        conviction: "Medium",
    },
    {
        rank: 4,
        name: "0x7a16...9F2E",
        address: "0x7a16...9F2E",
        category: "Prediction",
        roi: "134.8%",
        hitRate: "72.1%",
        trades: 67,
        avgPos: "$215.0K",
        conviction: "High",
    },
    {
        rank: 5,
        name: "0x7a16...9F2E",
        address: "0x7a16...9F2E",
        category: "Stablecoin",
        roi: "98.7%",
        hitRate: "65.4%",
        trades: 312,
        avgPos: "$18.9K",
        conviction: "Medium",
    },
    {
        rank: 6,
        name: "0x7a16...9F2E",
        address: "0x7a16...9F2E",
        category: "Mixed",
        roi: "87.3%",
        hitRate: "61.8%",
        trades: 445,
        avgPos: "$8.8K",
        conviction: "Medium",
    },
    {
        rank: 7,
        name: "DCA Master",
        address: "0x7a16...9F2E",
        category: "On-Chain Protocols",
        roi: "76.5%",
        hitRate: "58.2%",
        trades: 178,
        avgPos: "$54.3K",
        conviction: "Medium",
    },
    {
        rank: 8,
        name: "0x7a16...9F2E",
        address: "0x7a16...9F2E",
        category: "Prediction",
        roi: "68.9%",
        hitRate: "55.7%",
        trades: 523,
        avgPos: "$12.4K",
        conviction: "Medium",
    },
    {
        rank: 9,
        name: "Steady Hands",
        address: "0x7a16...9F2E",
        category: "Stablecoin",
        roi: "54.2%",
        hitRate: "52.3%",
        trades: 89,
        avgPos: "$167.0K",
        conviction: "Low",
    },
    {
        rank: 10,
        name: "0x7a16...9F2E",
        address: "0x7a16...9F2E",
        category: "Mixed",
        roi: "47.8%",
        hitRate: "49.8%",
        trades: 267,
        avgPos: "$23.6K",
        conviction: "Low",
    },
];

const convictionColors: Record<Conviction, string> = {
    High: "bg-darkgreen text-greenlight",
    Medium: "bg-gunmetal text-[#F6BA60]",
    Low: "bg-[#44243B] text-[#F17272]",
};


const PerformanceRanking = () => {
    return (
        <>
            <div className="max-sm:py-16 py-42 bg-gray900">
                <div className="container">
                    <div className='grid grid-cols-12 gap-y-8 md:gap-5'>
                        <div className='col-span-12 lg:col-span-6'>
                            <div className='max-sm:px-4 space-y-8'>
                                <div>
                                    <Badge
                                        label="Performance Ranking"
                                        variant='darkgreen'
                                    />
                                </div>
                                <div>
                                    <h2 className='max-xs:text-3xl max-xs:leading-9 text-40 leading-11.5 tracking-[-1.20px] xl:text-56 font-semibold xl:leading-16 xl:tracking-[-1.68px] text-white'>Top smart wallets by performance</h2>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6'>
                            <div className='max-sm:px-4 flex h-full flex-col justify-end gap-y-6'>
                                <p className='text-lg font-normal leading-[144%] text-gray400'>On-chain performance of selected high-conviction wallets over the chosen timeframe. Purely analytical — no copy trading, no recommendations.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10 md:mt-16">
                    <div className="container">
                        <div className="">
                            <div className="bg-[#1A1F2B] p-4 rounded-3xl text-gray800 overflow-x-auto">

                                <table className="w-full min-w-3xl">
                                    <thead>
                                        <tr className="text-white text-sm xl:text-base font-medium leading-6.5 whitespace-nowrap border-b border-[#383D49]">
                                            <th className="text-left py-1.5 xl:py-3.75 px-3 xl:px-6">Rank</th>
                                            <th className="text-left py-1.5 xl:py-3.75 px-3 xl:px-6">Wallet</th>
                                            <th className="text-left py-1.5 xl:py-3.75 px-3 xl:px-6">ROI %</th>
                                            <th className="text-left py-1.5 xl:py-3.75 px-3 xl:px-6">Hit Rate</th>
                                            <th className="text-left py-1.5 xl:py-3.75 px-3 xl:px-6">Trades</th>
                                            <th className="text-left py-1.5 xl:py-3.75 px-3 xl:px-6">Avg Position</th>
                                            <th className="text-left py-1.5 xl:py-3.75 px-3 xl:px-6">Conviction</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {rankingData.map((row, i) => (
                                            <tr
                                                key={i}
                                                className="overflow-hidden border-b border-[#383D49] last:border-transparent"
                                            >
                                                {/* Rank */}
                                                <td className="py-2 xl:py-4 px-3 xl:px-6">
                                                    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray700 text-white text-sm xl:text-base font-semibold">
                                                        {row.rank}
                                                    </div>
                                                </td>

                                                {/* Wallet */}
                                                <td className="py-2 xl:py-4 px-3 xl:px-6">
                                                    <div className="flex flex-row items-center gap-2">
                                                        <span className="text-white text-sm xl:text-base font-medium whitespace-nowrap">{row.name}</span>
                                                        <span className="text-gray400 text-sm xl:text-base font-medium whitespace-nowrap">{row.address}</span>
                                                        <span className="mt-1 bg-[#272E41] px-2 py-1 rounded-md w-fit text-gray400 text-sm xl:text-base whitespace-nowrap">
                                                            {row.category}
                                                        </span>
                                                    </div>
                                                </td>

                                                {/* ROI */}
                                                <td className="py-2 xl:py-4 px-3 xl:px-6">
                                                    <div className="flex items-center gap-2 text-white">
                                                        <ArrowGreen />
                                                        <span className="font-medium">{row.roi}</span>
                                                    </div>
                                                </td>

                                                {/* Hit Rate */}
                                                <td className="py-2 xl:py-4 px-3 xl:px-6">
                                                    <p className='font-normal text-sm xl:text-base leading-5.5 text-gray400'>
                                                        {row.hitRate}
                                                    </p>
                                                </td>

                                                {/* Trades */}
                                                <td className="py-2 xl:py-4 px-3 xl:px-6">
                                                    <p className='font-normal text-sm xl:text-base leading-5.5 text-gray400'>
                                                        {row.trades}
                                                    </p>
                                                </td>

                                                {/* Avg Position */}
                                                <td className="py-2 xl:py-4 px-3 xl:px-6">
                                                    <p className='font-normal text-sm xl:text-base leading-5.5 text-gray400'>
                                                        {row.avgPos}
                                                    </p>
                                                </td>

                                                {/* Conviction */}
                                                <td className="py-2 xl:py-4 px-3 xl:px-6">
                                                    <span className={`text-sm xl:text-base leading-5.5 px-3 py-2 rounded-md font-medium ${convictionColors[row.conviction]}`} >
                                                        {row.conviction}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                            </div>
                            {/* Footer Disclaimer */}
                            <div className="px-10 py-8 rounded-3xl bg-[#1A1F2B] mt-2">
                                <div className="flex items-center gap-6 text-gray400 text-lg font-medium leading-6.5">
                                    <span className="size-5 flex-none bg-gray700 rounded-full flex justify-center items-center"><Iicon /></span>
                                    <p>
                                        Data is aggregated from public on-chain activity and third-party
                                        sources believed to be reliable. This leaderboard is for
                                        informational purposes only and is not a Tradoo investment
                                        product, recommendation, or copy-trading feature.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const ArrowGreen = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

const Iicon = () => {
    return (
        <svg width="2" height="10" viewBox="0 0 2 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.75 8.75V4.75M0.75 0.75H0.76" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

export default PerformanceRanking
