import React from 'react'
import Badge from "../components/Badge";
import Image from "next/image";
import Button from '../components/Button';
import FooterGradient from "@/public/image/footer-top-gradient.png";
import { SlidersVertical, Layers, Lock } from "lucide-react";

const VaultsBanner: React.FC = () => {
    interface claims {
        id: number;
        color: string;
        count: string;
        text: string;
        icon: React.ComponentType<{ className?: string }>;
    }

    const claims = [
        { id: 1, color: "blue", count: "6+1", text: "Risk profiles on BTC / ETH / USDC", icon: SlidersVertical },
        { id: 2, color: "purple", count: "15+", text: "Strategy modules for core, growth, hedging", icon: Layers },
        { id: 3, color: "green", count: "100%", text: "Non custodial smart vaults, risk-first", icon: Lock },
    ];


    return (
        <div className="max-xs:pt-30 max-xs:pb-12 max-sm:pb-24 pt-46 pb-42 bg-gray900 relative">
            <div className="container">
                <div className="sm:text-center">
                    <div className="">
                        <Badge
                            label="FOR ASSET MANAGERS, FAMILY OFFICES & CRYPTO FUNDS"
                            variant='darkgreen'
                        />
                    </div>
                    <div className="mt-8">
                        <h1 className="max-xs:text-3xl max-xs:tracking-wider max-xs:leading-9 text-5xl leading-13 xxl:text-80 font-semibold xxl:leading-22 tracking-[-1.44px] xxl:tracking-[-2.40px] text-white">Institutional Strategy Vaults for Professional Investors</h1>
                    </div>
                    <div className="mt-8 w-full max-w-230 mx-auto">
                        <p className="text-lg xxl:text-xl font-normal leading-7 text-gray400">Build and manage non custodial digital asset portfolios using our strategy toolbox with 6+1 risk profiles, 15+ modules and a narrow universe of BTC, ETH and USDC.</p>
                    </div>
                    <div className='relative z-10 mt-12 md:mt-18'>
                        <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-5xl mx-auto">
                            {claims.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.id}
                                        className={`relative h-full group claim-${item.color}`}
                                    >
                                        <div
                                            className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
                                            style={{ background: "linear-gradient(to bottom right, var(--claim-bg), transparent)" }}
                                        />

                                        <div className="relative h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all">
                                            <div className="flex justify-center items-center gap-4 mb-3">
                                                <div className="flex h-12 w-12 items-center justify-center rounded-xl claim-box-bg claim-box-text shrink-0">
                                                    <Icon className="h-6 w-6" />
                                                </div>

                                                <span className="text-3xl font-light claim-count-text">
                                                    {item.count}
                                                </span>
                                            </div>

                                            <p className="text-sm md:text-base text-center font-medium text-white leading-relaxed">
                                                {item.text}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className='relative z-10 mt-12 md:mt-18 max-sm:flex-col max-sm:items-start flex gap-4 justify-center'>
                        <Button label="Request Institutional Demo" href="#" trailingIcon variant='contrastdefault' />
                        <Button label="Apply as Design Partner" href="#" />
                    </div>
                </div>
            </div>
            <div className="max-sm:hidden absolute w-full max-w-480 mx-auto bottom-0 left-1/2 -translate-x-1/2 h-[452px] overflow-hidden">
                <Image
                    src={FooterGradient}
                    alt="Footer Gradient"
                    className="w-auto h-full object-cover object-center"
                />
            </div>
        </div>
    )
}

export default VaultsBanner
