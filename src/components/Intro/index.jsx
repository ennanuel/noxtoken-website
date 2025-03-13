
import { useRef } from "react";

import { motion, cubicBezier, useScroll, useTransform } from "framer-motion";

import { FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import { TfiMouse } from "react-icons/tfi";

import Title from "./Title";
import Numbers from "./Numbers";
import Background from "./Background";

const NUMBER_DATA = [
    {
        text: "People Joined",
        numbers: 65,
        numberAffix: "%+",
        isDecimal: false
    },
    {
        text: "Money Protected",
        numbers: 100,
        numberAffix: "%+",
        isDecimal: false
    },
    {
        text: "Fraud Probability",
        numbers: 0.24,
        numberAffix: "%",
        isDecimal: true
    },
];

const EASE = cubicBezier(.16, 1, .3, 1);

export default function Intro({ scrollY }) {
    const containerRef = useRef();
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const socialsTranslateY = useTransform(scrollYProgress, [0, 0.5], ['0%', '-100%']);
    const titleTranslateY = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
    const titleOpacity = useTransform(scrollYProgress, [0, .5], [1, 0]);
    const mouseTranslateY = useTransform(scrollYProgress, [0, .2], ['0%', '100%']);
    const mouseOpacity = useTransform(scrollYProgress, [0, .2], [1, 0]);
    const lineScaleX = useTransform(scrollYProgress,  [0, .8], [1, 0]);
    const textTranslateY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
    const numbersScale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
    const numbersOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <div ref={containerRef} className="flex flex-col min-h-[calc(100vh_-_80px)] px-4 md:px-6">
            <Background scrollY={scrollY} />
            <div className="relative flex-1 flex flex-col lg:flex-row lg:items-center justify-center lg:justify-start gap-20 lg:gap-40">
                <ul className="flex flex-row lg:flex-col items-center justify-start lg:justify-center gap-6">
                    {
                        [FiTwitter, FiInstagram, FiLinkedin].map((Icon, index) => (
                            <li key={index} className="overflow-hidden">
                                <motion.div style={{ y: socialsTranslateY }} className="flex items-center justify-center">
                                    <motion.a 
                                        initial={{ y: '100%' }} 
                                        animate={{ y: '0%' }}
                                        transition={{ duration: 2, ease: EASE, delay: (index / 25) }} 
                                        href="#"
                                        className="text-white/30 flex items-center justify-center"
                                    >
                                        <Icon size={20} />
                                    </motion.a>
                                </motion.div>
                            </li>
                        ))
                    }
                </ul>
                <div className="lg:flex-1 flex flex-wrap items-center justify-between gap-4">
                    <motion.h2 style={{ translateY: titleTranslateY, opacity: titleOpacity }} className="max-w-[720px] flex flex-wrap items-center">
                        {
                            "Dive into a new era _circles_ \n _cta_ of crypto currency \n _tab_ with NoxToken."
                                .split(" ")
                                .map((word, index) => (
                                    <Title word={word} index={index} key={index} />
                                ))
                        }
                    </motion.h2>
                    <motion.span style={{ y: mouseTranslateY, opacity: mouseOpacity }} className='hidden md:flex items-center justify-center text-white/60'>
                        <motion.span 
                            initial={{ y: '100%', opacity: 0 }} 
                            animate={{ y: '0%', opacity: 1 }} 
                            transition={{ duration: 2, ease: EASE }}
                            className="flex items-center justify-center text-white/60"
                        >
                            <TfiMouse size={28} />
                        </motion.span>
                    </motion.span>
                </div>
            </div>
            <motion.div style={{ scaleX: lineScaleX }} className="origin-left w-full">
                <motion.hr 
                    initial={{ transform: 'scaleX(0)' }} 
                    animate={{ transform: 'scaleX(1)' }}
                    transition={{ duration: 2, ease: EASE, delay: 0.1 }} 
                    className="hidden lg:block relative border-none bg-white/20 w-full h-[1px] origin-left" 
                />
            </motion.div>
            <div className="relative flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 flex-wrap py-6">
                <div className="flex flex-col gap-2">
                    <h3 className="tracking-tight">
                        {
                            "Safe and secure".split(" ").map((word, index) => (
                                <span key={index} className="inline-block overflow-hidden">
                                    <motion.span 
                                        initial={{ y: '100%' }} 
                                        animate={{ y: '0%' }} 
                                        style={{ translateY: textTranslateY }}
                                        transition={{ duration: 2, ease: EASE, delay: (index / 25) }} 
                                        className="inline-block"
                                    >{word}&nbsp;</motion.span>
                                </span>
                            ))
                        }
                    </h3>
                    <p className="max-w-[40ch] text-sm tracking-tight font-light text-white/50">
                        {
                            "Discover innovative blockchain technologies during financial freedom and security."
                                .split(" ")
                                .map((word, index) => (
                                    <span key={index} className="inline-block overflow-hidden">
                                        <motion.span 
                                            initial={{ y: '100%' }}
                                            animate={{ y: '0%' }}
                                            style={{ translateY: textTranslateY }}
                                            transition={{ duration: 2, ease: EASE, delay: (index / 25) }}
                                            className="inline-block"
                                        >{word}&nbsp;</motion.span>
                                    </span>
                                ))
                        }
                    </p>
                </div>
                <ul className="flex-1 grid grid-cols-3 gap-4">
                    {
                        NUMBER_DATA.map((value, index) => (
                            <Numbers key={index} {...value} scale={numbersScale} opacity={numbersOpacity} />
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}