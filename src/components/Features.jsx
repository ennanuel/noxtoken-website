import React from "react";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { FaArrowLeft, FaArrowRight, FaStaylinked } from "react-icons/fa6";
import { GoPeople } from "react-icons/go";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { HiOutlineDocumentChartBar } from "react-icons/hi2";
import { IoIosTrendingUp } from "react-icons/io";
import { IoPeopleOutline } from "react-icons/io5";
import { MdOutlineArrowOutward } from "react-icons/md";
import { PiMoneyLight } from "react-icons/pi";

import Title from "./Title";
import SubTitle from "./SubTitle";
import Slash from "./Slash";



function generateRadialBackground({ steps, spacing, colors, position } = { steps: 10, spacing: 2, colors: { main: [255, 255, 255, 1], inBetween: "transparent" } , position: { x: '0', y: '0' } }) {
    const backgrounds = [];

    for(let i = 0; i < steps; i++) {
        const colorPercentage = Math.max(0.2, (i / steps).toFixed(2));
        const start = ((Math.pow(i, spacing) / Math.pow(steps, spacing)) * 100).toFixed(2);
        const end = ((Math.pow(i + 1, spacing) / Math.pow(steps, spacing)) * 100).toFixed(2);

        const rgbaColors = colors.main.map((color, index) => index < 3 ? Math.floor(Number(colorPercentage) * color) : color).slice(0, 4).join(", ");
        const background = `${colors.inBetween} ${start}%, ${colors.inBetween} calc(${end}% - 1px), rgba(${rgbaColors}) calc(${end}% - 1px), rgba(${rgbaColors}) ${end}%`;
        backgrounds.push(background);
    };

    const result = `radial-gradient(circle at ${position.x} ${position.y}, ${backgrounds.join(', ')})`;
    return result;
};

function FirstFeature() {
    return (
        <article className="pt-0 col-span-full lg:col-span-1">
            <div className="lg:sticky top-[180px] lg:min-h-[calc(100vh_-200px)] h-full lg:h-auto flex flex-col justify-end">
                <div className="flex-1 h-full min-h-[400px] max-h-[720px] flex flex-col rounded-[32px] backdrop-blur-md border border-white/10 px-6 py-4">
                    <span className="font-light text-2xl tracking-tight">01.</span>
                    <div className="flex-1 flex items-center justify-between">
                        <span className="flex-1"></span>
                        <div className="flex flex-col relative before:absolute before:top-1/2 before:-translate-y-1/2 before:right-20 before:z-[10] before:w-40 before:h-[1px] before:bg-gradient-to-l before:from-white/10 before:via-white/20 before:to-white/10">
                            <span className="relative w-20 flex aspect-square rounded-full p-4 border border-white/20 before:absolute before:top-[calc(50%_-_1px)] before:right-full before:w-1/2 before:h-16 before:rounded-tl-[32px] before:border-t before:border-l before:border-white/20">
                                <span className="rounded-full bg-white/10 w-full h-full flex items-center justify-center">
                                    <GoPeople size={20} />
                                </span>
                            </span>
                            <span className="relative ml-16 -mt-4 w-20 flex aspect-square rounded-full p-4 border border-white/20">
                                <span className="rounded-full bg-white/10 w-full h-full flex items-center justify-center">
                                    <PiMoneyLight size={20} />
                                </span>
                            </span>
                            <span className="relative -mt-4 w-20 flex aspect-square rounded-full p-4 border border-white/20 before:absolute before:bottom-[calc(50%_-_1px)] before:right-full before:w-1/2 before:h-16 before:rounded-bl-[32px] before:border-l before:border-b before:border-white/20">
                                <span className="rounded-full bg-white/10 w-full h-full flex items-center justify-center">
                                    <HiOutlineDocumentChartBar size={20} />
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className="flex items-end justify-between gap-4">
                        <div className="flex flex-col gap-2">
                            <h3 className="text-4xl font-light tracking-tight">Publish your Collective</h3>
                            <p className="text-sm font-light tracking-tight text-white/50 max-w-[50ch]">showcase your collective expertise and insights in the dynamic world of cryptocurrency</p>
                        </div>
                        <button className="p-1 pl-3 flex items-center justify-center gap-2 rounded-full border border-white/20 text-white/80">
                            <span className="text-xs relative font-poppins tracking-tight whitespace-nowrap">Try now</span>
                            <span className="relative flex items-center justify-center w-6 aspect-square rounded-full bg-white/20">
                                <MdOutlineArrowOutward size={14} />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </article>
    )
};

function SecondFeature() {
    return (
        <article className="lg:pt-[calc(100vh_-_160px)]">
            <div className="lg:sticky top-[180px] h-full lg:h-auto min-h-[400px] lg:min-h-[calc(100vh_-_200px)] flex flex-col justify-end">
                <div 
                    style={{ 
                        backgroundImage: generateRadialBackground({ 
                            steps: 30, 
                            spacing: 3, 
                            colors: { inBetween: 'transparent', main: [255, 255, 255, 0.1] }, 
                            position: { x: '0', y: '100%' }
                        }) 
                    }} 
                    className="flex-1 h-full max-h-[720px] flex flex-col p-4 rounded-[30px] border border-white/10"
                >
                    <span className="text-2xl font-light tracking-tight">02.</span>
                    <div className="flex-1 flex flex-col items-center justify-center">
                        <span className="relative z-[1] flex w-24 aspect-square items-center justify-center before:backdrop-blur-md before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:rounded-[16px] before:rotate-45 before:border before:border-white/20">
                            <IoPeopleOutline size={40} className="relative z-[1] text-white/80" />
                        </span>
                        <span className="relative flex-1 max-h-20 block w-[1px] bg-white/40 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:translate-y-1/2 after:w-[6px] after:aspect-square after:rounded-full after:bg-white/40" />
                        <span className="px-6 py-2 rounded-full border border-white/20 backdrop-blur-sm flex items-center justify-center">
                            <span className="font-poppins tracking-tight">community</span>
                        </span>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="text-3xl font-light tracking-tight">community on-chain</h3>
                        <p className="text-xs font-light trackng-light text-white/50">connect with like-minded enthusiasts, collaborate on groundbreaking projects, and be part of the decentralized revolution shaping the future of finance.</p>
                    </div>
                </div>
            </div>
        </article>
    )
};

function ThirdFeature() {
    return (
        <article className="lg:pt-[calc(calc(100vh_-_160px)_*_2)]">
            <div className="lg:sticky top-[180px] h-full lg:h-auto min-h-[400px] lg:min-h-[calc(100vh_-_200px)] flex flex-col justify-end">
                <div className="flex-1 border border-white/10 rounded-[32px] p-4 flex flex-col gap-4 h-full max-h-[720px]">
                    <span className="text-2xl font-light tracking-tight">03.</span>
                    <div className="flex-1 flex flex-col gap-4 items-center justify-center">
                        <span className="h-6 w-fit flex items-center justify-center px-3 rounded-full bg-white/10 text-white/80">
                            <span className="text-[.6rem] relative font-poppins tracking-tight text-white/80">Track your cap table and activity in one place</span>
                        </span>
                        <div className="flex flex-col gap-4 w-full p-4 rounded-[16px] border border-white/50 font-poppins">
                            <div className="flex items-center justify-between gap-4">
                                <div className="flex items-center gap-2">
                                    <FaStaylinked size={16} />
                                    <span className="tracking-tight text-sm font-semibold">NoxCoin</span>
                                </div>
                                <span className="block px-3 py-1 border border-white/10 text-[.6rem] text-white/50 rounded-full">0x4892...f302</span>
                            </div>
                            <span className="block h-3 rounded-lg border border-white/30 overflow-hidden">
                                <span className="block h-full w-1/4 bg-white rounded-r-lg"></span>
                            </span>
                            <div className="flex flex-col">
                                <span className="flex justify-between items-center gap-4 font-light tracking-tight text-[.6rem] text-white/50">
                                    <span className="">Minted</span>
                                    <span className="">Remaining</span>
                                </span>
                                <span className="flex justify-between items-center gap-4 tracking-tight text-[.6rem] text-white/80">
                                    <span className="">80,000 ABC of 100,000 allocated</span>
                                    <span className="">30,000 ABC</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="text-3xl font-light tracking-tight">Launch a DAO to invest in anything</h3>
                        <p className="text-xs font-light trackng-light text-white/50">harness the collective wisdom and power of the community to make impactful decisions and drive innovation in any field.</p>
                    </div>
                </div>
            </div>
        </article>
    )
};

export default function Features() {

    return (
        <section className="relative min-h-screen flex flex-col py-10 px-6 gap-12">
            <div className="flex flex-col md:flex-row md:items-center md:gap-4">
                <Title text="Features & Benefits" />
                <div className="ml-20 md:ml-0 flex-1 flex items-center gap-4">
                    <Slash />
                    <SubTitle text="Experience the power of decentralized finance, offering global accessibility and finance autonomy." />
                </div>
            </div>
            <div className="lg:sticky top-0 h-screen pt-[100px] mt-[-100px] mb-2">
                <div className="flex flex-wrap justify-between items-center gap-4">
                    <ul className="flex flex-wrap items-center gap-2">
                        {
                            ["networking", "tokenization support" ,"training", "analysis"].map((item, index) => (
                                <li key={index}>
                                    <button className={`px-4 h-10 flex items-center justify-center gap-2 rounded-full border ${index === 0 ? 'bg-white/20 border-transparent text-white' : ' text-white/80 border-white/20'}`}>
                                        <span className="text-xs font-light relative whitespace-nowrap font-poppins tracking-tight">{item}</span>
                                            {index === 0 ? <IoIosTrendingUp size={16} /> : null}
                                    </button>
                                </li>
                            ))
                        }
                        <li className="hidden md:block">
                            <button className="ml-6 py-1 border-b border-white flex items-center justify-center gap-2">
                                <span className="text-sm whitespace-nowrap">See cases</span>
                                <HiOutlineArrowNarrowRight size={16} />
                            </button>
                        </li>
                    </ul>
                    <div className="hidden md:flex items-center gap-2">
                        <button className="flex items-center justify-center w-8 aspect-square rounded-full bg-white/10">
                            <AiOutlineArrowLeft size={16} />
                        </button>
                        <button className="flex items-center justify-center w-8 aspect-square rounded-full text-white/60 bg-white/5">
                            <AiOutlineArrowRight size={16} />
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 grid-rows-[auto_auto] lg:grid-cols-[2fr_1fr_1fr] lg:grid-rows-1 gap-6 lg:gap-2 mt-[calc(-100vh_+_200px)]">
                <FirstFeature />
                <SecondFeature />
                <ThirdFeature />
            </div>
        </section>
    )
}