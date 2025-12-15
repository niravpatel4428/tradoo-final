

const documents = [
    {
        title: "Sample subscription form",
        description: "Example form for digital subscription – legally signable via Skribble.",
        type: "PDF",
    },
    {
        title: "Business plan",
        description: "Detailed strategy, market, financials and roadmap 2025–2028.",
        type: "PDF",
    },
    {
        title: "Investor pitch deck",
        description: "Compact overview for investors – problem, solution, team, traction.",
        type: "PDF",
    },
    {
        title: "Term sheet",
        description: "Terms of the Seed-1 round including valuation and rights.",
        type: "PDF",
    },
    {
        title: "Risk disclosure",
        description: "Material risks and notices for investors.",
        type: "PDF",
    },
    {
        title: "Whitepaper",
        description: "Technical and economic fundamentals of Tradoo ∞ Sigma & token mechanics.",
        type: "PDF",
    },
];


const Documents = () => {
    return (
        <>
            <div className="py-42 bg-gray900">
                <div className="container max-sm:px-0">
                    <div className="grid xl:grid-cols-12 gap-6">
                        <div className="max-sm:px-4 xl:col-span-4">
                            <div className="space-y-6">
                                <h2 className='max-xs:text-3xl max-xs:leading-9 text-40 leading-11.5 tracking-[-1.20px] xl:text-56 font-semibold xl:leading-16 xl:tracking-[-1.68px] text-white'>Documents</h2>

                                <div>
                                    <p className='text-lg font-normal leading-[144%] text-gray400'>Сontext, rationale and structure behind the company and its roadmap</p>
                                </div>
                            </div>
                        </div>

                        <div className="xl:col-span-8">
                            <div className="space-y-2">
                                {documents.map((doc, index) => (
                                    <div
                                        key={index}
                                        className="flex max-md:flex-col md:items-center justify-between gap-6 bg-gray800 rounded-3xl px-4 md:px-10 py-8"
                                    >
                                        {/* Left */}
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-3">
                                                <h3 className="text-white font-semibold text-lg leading-6">
                                                    {doc.title}
                                                </h3>
                                                <span className="text-base font-medium leading-4.5 px-2 py-1.5 rounded-md bg-[#44243B] text-[#F17272]">
                                                    {doc.type}
                                                </span>
                                            </div>
                                            <p className="text-base font-normal leading-5.5 text-gray400">
                                                {doc.description}
                                            </p>
                                        </div>

                                        {/* Right */}
                                        <div className="flex max-md:flex-row-reverse max-md:justify-end items-center gap-2 shrink-0">
                                            <button className='bg-transparent capitalize py-3.5 px-7 rounded-md text-white text-base leading-5 cursor-pointer hover:bg-gray800'>view</button>


                                            <button className="flex items-center gap-2 bg-white text-gray800 py-3.5 px-7 rounded-full text-base font-medium leading-5 hover:bg-gray200 cursor-pointer transition">
                                                <Icon />
                                                Download
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const Icon = () => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5 12.5V13.5C17.5 14.9001 17.5 15.6002 17.2275 16.135C16.9878 16.6054 16.6054 16.9878 16.135 17.2275C15.6002 17.5 14.9001 17.5 13.5 17.5H6.5C5.09987 17.5 4.3998 17.5 3.86502 17.2275C3.39462 16.9878 3.01217 16.6054 2.77248 16.135C2.5 15.6002 2.5 14.9001 2.5 13.5V12.5M14.1667 8.33333L10 12.5M10 12.5L5.83333 8.33333M10 12.5V2.5" stroke="#202533" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default Documents
