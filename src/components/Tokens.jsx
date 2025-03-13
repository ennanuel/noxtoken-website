import React from "react";

import { cubicBezier, motion } from "framer-motion";

import { PiHandDepositLight, PiHandWithdraw, PiMoneyLight } from "react-icons/pi";
import { RxTokens } from "react-icons/rx";
import { SiBitcoin, SiDogecoin, SiEthereum, SiLitecoin } from "react-icons/si";
import { TbCurrencyBitcoin, TbCurrencyDogecoin, TbCurrencyDollarAustralian, TbCurrencyLitecoin } from "react-icons/tb";
import Title from "./Title";
import SubTitle from "./SubTitle";
import Slash from "./Slash";
import SectionTitle from "./SectionTitle";


const TOKEN_STEPS = [
    {
        title: "Deposit",
        Icon: PiHandDepositLight
    },
    {
        title: "Autocompound",
        Icon: RxTokens
    },
    {
        title: "Withdraw",
        Icon: PiHandWithdraw
    },
    {
        title: "Earn rewards",
        Icon: PiMoneyLight
    }
];

const TOKENS = [
    {
        exchange: "ETH / BTC",
        TokenIcon1: SiEthereum,
        token1: "text-purple-400 border-purple-400/30",
        TokenIcon2: TbCurrencyBitcoin,
        token2: "text-yellow-400 border-yellow-400/30"
    },
    {
        exchange: "LTC / ETH",
        TokenIcon1: TbCurrencyLitecoin,
        token1: "text-blue-400 border-blue-400/30",
        TokenIcon2: SiEthereum,
        token2: "text-purple-400 border-purple-400/30"
    },
    {
        exchange: "AUD / LTC",
        TokenIcon1: TbCurrencyDollarAustralian,
        token1: "text-green-400 border-green-400/30",
        TokenIcon2: SiLitecoin,
        token2: "text-blue-400 border-green-400/30"
    },
    {
        exchange: "BTC / DOGE",
        TokenIcon1: TbCurrencyBitcoin,
        token1: "text-yellow-400 border-yellow-400/30",
        TokenIcon2: TbCurrencyDogecoin,
        token2: "text-orange-400 border-orange-400/30"
    },
    {
        exchange: "ETH / BTC",
        TokenIcon1: SiEthereum,
        token1: "text-purple-400 border-purple-400/30",
        TokenIcon2: TbCurrencyBitcoin,
        token2: "text-yellow-400 border-yellow-400/30"
    },
]

const EASE = cubicBezier(.16, 1, 3, 1);

export default function Tokens () {
    
    return (
        <section className="relative lg:min-h-screen flex flex-col gap-20 mt-[160px] px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center md:gap-8">
                <Title text="We Currate Nox Tokens" />
                <div className="flex-1 flex items-center gap-4">
                    <Slash />
                    <SubTitle text="NoxCoin is a revolutionary DEX unlike any other. We currate the highest perfoming and most robust liquidity pools to create a one-stop for astute investors." />
                </div>
            </div>
            <div className="flex flex-col gap-10">
                <div className="flex justify-end">
                    <SectionTitle text="Tokens" />
                </div>
                <div className="flex-col md:flex-row flex justify-between md:items-center gap-20 md:gap-4 lg:gap-10">
                    <motion.ul 
                        initial={{ opacity: 0 }} 
                        whileInView={{ opacity: 1 }} 
                        transition={{ duration: 1, ease: EASE }}
                        viewport={{ once: true }}
                        className="relative flex-1 h-fit flex flex-col gap-6 before:absolute before:left-4 before:top-1/2 before:-translate-y-1/2 before:h-[calc(100%_-_40px)] before:w-[1px] before:bg-white/20"
                    >
                        {
                            TOKEN_STEPS.map(({ title, Icon }, index) => (
                                <li key={index} style={{ '--color': index === 0 ? 'white' : 'rgba(255, 255, 255, 0.5)' }} className="flex-1">
                                    <div className="relative flex-1 flex gap-8 items-start justify-start">
                                        <motion.span
                                            initial={{ opacity: 0 }} 
                                            whileInView={{ opacity: 1 }} 
                                            transition={{ duration: 2, ease: EASE, delay: (index + 2) / 10 }}
                                            viewport={{ once: true }}
                                            className="h-8 bg-black text-[var(--color)] aspect-square flex items-center justify-center rounded-xl"
                                        >
                                            <Icon size={20} />
                                        </motion.span>
                                        <div className="flex flex-col gap-2">
                                            <motion.h4 
                                                initial={{ opacity: 0 }} 
                                                whileInView={{ opacity: 1 }} 
                                                transition={{ duration: 2, ease: EASE, delay: (index + 3) / 10 }} 
                                                viewport={{ once: true }}
                                                className="text-[var(--color)] text-base h-8 tracking-tight font- flex items-center"
                                            >{title}</motion.h4>
                                            {
                                                index === 0 ?
                                                    <motion.p
                                                        initial={{ opacity: 0 }} 
                                                        whileInView={{ opacity: 1 }} 
                                                        transition={{ duration: 2, ease: EASE, delay: (index + 4.5) / 10 }} 
                                                        viewport={{ once: true }}
                                                        className="text-white/60 tracking-tight font-light text-sm max-w-[48ch]"
                                                    >Insert your fund using our custodial or non-custodial wallet options into the NoxCoin pools.<br /> Start earning some the highest rewards available simply by connecting your wallet and offering your assets as liquidity for our pools.</motion.p> :
                                                    null
                                            }
                                        </div>
                                        
                                    </div>
                                </li>
                            ))
                        }
                    </motion.ul>
                        <div className="flex-1">
                        <ul className="flex-1 flex flex-col items-center gap-2 p-0 sm:p-6 md:p-0 lg:p-6">
                            {
                                TOKENS.map(({ exchange, TokenIcon1, TokenIcon2, token1, token2 }, index, arr) => (
                                    <motion.li
                                        key={index}
                                        initial={{ scale: .8, y: '100%' }}
                                        whileInView={{ scale: 1, y: '0%' }}
                                        transition={{ duration: 2, ease: EASE, delay: (index / 20) }}
                                        style={{ width: `calc(100% - ${index * 10}px)` }}
                                        viewport={{ once: true }}
                                    >
                                        <div style={{ opacity: 1 - (index / arr.length) }} className="font-poppins flex items-center gap-4 bg-white/10 p-4 rounded-2xl">
                                            <div className="flex items-center">
                                                <span className={`${token1} border bg-black flex items-center justify-center w-10 aspect-square rounded-full backdrop-blur`}>
                                                    <TokenIcon1 size={18} />
                                                </span>
                                                <span className={`${token2} border bg-black flex -ml-4 items-center justify-center w-10 aspect-square rounded-full`}>
                                                    <TokenIcon2 size={18} />
                                                </span>
                                            </div>
                                            <div className="flex-1 flex justify-between gap-4">
                                                <div className="flex flex-col gap-1">
                                                    <span className="text-xs text-white/80 tracking-tight">{exchange}</span>
                                                    <span className="text-white/50 text-[.7rem] tracking-tight font-light">PancakeSwap</span>
                                                </div>    
                                                <div className="flex flex-col items-end gap-1">
                                                    <span className="text-xs text-white/80 tracking-tight">32.17%</span>
                                                    <span className="text-white/50 text-[.7rem] tracking-tight font-light">APY</span>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}