


import { cubicBezier, motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { TbBrandGoogleAnalytics, TbCurrencyBitcoin } from "react-icons/tb";
import SectionTitle from "./SectionTitle";


const ABOUT_TEXT = [
    "Step",
    "into",
    "the",
    "groundbreaking",
    "future",
    "of",
    "finance",
    "right_arrow",
    "with",
    "the",
    "analytics_icon",
    "revolutionary",
    "era",
    "of",
    "cryptocurrency.",
    "Explore",
    "cutting-edge",
    "currency_icon",
    "technologies",
    "that",
    "redefine",
    "financial",
    "independence",
];

const EASE = cubicBezier(.16, 1, 3, 1);

function AboutTextComponent({ item, start, end, progress }) {
    const opacity = useTransform(progress, [start, end], [0.5, 1], { ease: cubicBezier(.16, 1, .3, 1) });

    return (
        <motion.span style={{ opacity }} className="inline-block">{item}&nbsp;</motion.span>
    )
};

function AboutRightArrow({ start, end, progress }) {
    const translateX = useTransform(progress, [start, end], ['-101%', '0%'], { ease: cubicBezier(.16, 1, .3, 1) });

    return (
        <span className="relative ml-2 mr-4 inline-block w-16">
            <span className="absolute bottom-0 left-0 w-full h-8 overflow-hidden flex justify-end items-end">
                <motion.span style={{ x: translateX }} className="w-full pb-2 flex items-end">
                    <span className="relative block w-full h-[2px] bg-gradient-to-l from-white to-white/50 rounded-full before:absolute before:top-1/2 before:origin-bottom-right before:-translate-y-1/2 before:right-0 before:w-4 before:h-[2px] before:rounded-full before:bg-white before:rotate-[30deg] after:absolute after:top-1/2 after:origin-bottom-right after:-translate-y-1/2 after:right-0 after:w-4 after:h-[2px] after:rounded-full after:bg-white after:rotate-[-30deg]" />
                </motion.span>
            </span>
        </span>
    )
};

function AboutIcon({ item, start, end, progress }) {
    const scale = useTransform(progress, [start, end], [0, 1], { ease: cubicBezier(.16, 1, .3, 1) });

    return (                                        
        <span className="inline-block ml-2 mr-4 relative w-20">
            <motion.div style={{ scale }} className={`${item === "analytics_icon" ? "bg-white/20" : "bg-gradient-to-r from-white/20 to-white/10"} absolute bottom-0 left-0 w-full h-8 rounded-full  flex items-center justify-center -mb-1`}>
                { 
                    item === "analytics_icon" ? 
                        <TbBrandGoogleAnalytics size={16} /> : 
                        <TbCurrencyBitcoin size={18} /> 
                }
            </motion.div>
        </span>
    )
}

function TextIconComponent ({ item, index, itemsLength, progress }) {
    const start = index / itemsLength;
    const end = (index + 1) / itemsLength;
    
    if(item === 'right_arrow') return <AboutRightArrow start={start} end={end} progress={progress} />;
    else if(item === "analytics_icon" || item === "currency_icon") return <AboutIcon item={item} start={start} end={end} progress={progress} />
    else return <AboutTextComponent item={item} start={start} end={end} progress={progress} />;
                
}

export default function About() {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["40vh end", "end 100vh"]
    });
    
    return (
        <section ref={containerRef} className="relative py-20 px-4 md:px-6 h-[200vh]">
            <div className="sticky top-0 py-20 flex items-center justify-center min-h-screen">
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center w-full gap-20">
                    <SectionTitle text="about" />
                    <div className="flex flex-col items-center gap-20">
                        <h2 className="text-4xl text-center font-light tracking-tight">
                            {
                                ABOUT_TEXT.map((item, index, items) => (
                                    <TextIconComponent 
                                        key={index} 
                                        progress={scrollYProgress} 
                                        item={item} 
                                        index={index} 
                                        itemsLength={items.length} 
                                    />
                                ))
                            }
                        </h2>
                        <motion.button 
                            initial={{ y: '100%' }} 
                            whileInView={{ y: 0 }} 
                            transition={{ duration: 1, ease: EASE }} 
                            viewport={{ once: true }} 
                            className="pl-4 w-fit flex items-center justify-center gap-2 rounded-full overflow-hidden border border-white/40 text-white transition-[background-color] duration-300 hover:bg-white/10"
                        >
                            <span className="text-xs relative font-poppins tracking-tight">Discover more</span>
                            <span className="relative border border-white/60 flex items-center justify-center w-12 aspect-square rounded-full bg-white/10">
                                <MdOutlineArrowOutward size={18} />
                            </span>
                        </motion.button>
                    </div>
                    <span className="hidden lg:block px-6 opacity-0 py-2 rounded-full text-white/50 border border-white/20 lowercase text-sm">About</span>
                </div>
            </div>
        </section>
    )
}