import React from "react";

import { cubicBezier, motion } from "framer-motion";

import { BiSolidBadgeCheck } from "react-icons/bi";
import { HiArrowUpRight } from "react-icons/hi2";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { SiBlockchaindotcom, SiEthereum } from "react-icons/si";

import Title from "./Title";
import SectionTitle from "./SectionTitle";
import SubTitle from "./SubTitle";

const WHY_CHOOSE_US = [
    {
        title: "Cross Chain & Multi-Chain",
        desc: "Allow your assets to seamlessly move within and between the Blockchains.",
        color: "#a58cb3",
        Icon: SiEthereum
    },
    {
        title: "Baskets",
        desc: "Our aggregated index baskets offer a simple and easy-to-earn rewards by offering liquidity to our pools.",
        color: "#e4d98a",
        Icon: SiBlockchaindotcom
    },
    {
        title: "Simplicity",
        desc: "Our platform is easy to use and offers users many options to earn rewards on your assets.",
        color: "#8280c8",
        Icon: BiSolidBadgeCheck
    },
    {
        title: "Fiat On and Off Ramping",
        desc: "Getting started is easy. We accept deposits from your bank accounts, PayID, credit card or digital wallet.",
        color: "#d18882",
        Icon: FaMoneyBillTransfer
    },
];

const EASE = cubicBezier(.16, 1, 3, 1);

export default function WhatMakesUsDifferent() {


    return (
        <section className="relative min-h-screen mt-[160px] py-10 px-4 md:px-6 flex flex-col gap-10 items-end">
            <div className="flex w-fit flex-col gap-8 float-right">
                <Title text="What makes us different?" />
                <div className="flex flex-col md:flex-row pl-6 md:pl-0 justify-between gap-4 md:gap-12">
                    <SectionTitle text="companies" />
                    <SubTitle longerTitle text="Our mission is to make DeFi so simple that anyone can feel confident to participate. We have created a platform that removes the complexity and allows everyone to earn passive rewards on their digital assets." />
                </div> 
            </div>           
            <ul className="w-full flex-1 mt-20 grid grid-rows-4 md:grid-rows-2 grid-cols-1 md:grid-cols-3 gap-4">
                {
                    WHY_CHOOSE_US.map(({ title, Icon, color }, index) => (
                        <motion.li 
                            key={index}
                            initial={{ y: '15%', opacity: 0 }} 
                            whileInView={{ y: '0%', opacity: 1 }}  
                            transition={{ duration: 1, ease: EASE, delay: index/10 }}
                            viewport={{ once: true }}
                            style={{ '--color': color }}
                            className={`group ${index === 0 ? 'md:col-span-full' : ''} relative min-h-[200px] flex group p-6 text-black before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-2xl before:bg-[var(--color)] overflow-hidden`}
                        >
                            <div className="z-[2] relative w-full flex flex-col justify-between gap-4">
                                <div className="flex justify-between items-start gap-4">
                                    <span className="flex items-center justify-center">
                                        <Icon size={20} className="text-inherit" />
                                    </span>
                                    <span className="w-16 md:w-20 aspect-square border border-black aspect-square rounded-full flex justify-center items-center">
                                        <span className="min-w-[32px] w-[32px] aspect-square relative flex items-center justify-center w-fit overflow-hidden">
                                            <HiArrowUpRight size={32} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 transition-transform ease-expo duration-500 group-hover:origin-bottom-left origin-top-right" />
                                            <HiArrowUpRight size={32} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-100 group-hover:scale-0 transition-transform ease-expo duration-500 group-hover:origin-top-right origin-bottom-left" />
                                        </span>
                                    </span>
                                </div>
                                <div className="flex flex-1 flex-col justify-end">
                                    <h3 className="font-poppins text-lg tracking-tight md:translate-y-full md:group-hover:translate-y-0 transition-transform ease-expo duration-500">{title}</h3>
                                    <div className="overflow-hidden">
                                        <p className="font-light max-w-[40ch] opacity-60 text-sm tracking-tight md:translate-y-full md:group-hover:translate-y-0 transition-transform ease-expo duration-500 group-hover:delay-200">Learn more about this topic</p>
                                    </div>
                                </div>
                            </div>
                        </motion.li>
                    ))
                }
            </ul>
        </section>
    )
}