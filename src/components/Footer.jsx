import React, { useRef } from "react";

import { cubicBezier, motion, useScroll, useTransform } from "framer-motion";

import { FaStaylinked } from "react-icons/fa6";
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";

import { MdOutlineArrowOutward } from "react-icons/md";


const EASE = cubicBezier(.16, 1, .3, 1);

const LINKS = [
    {
        title: "Menu",
        links: [
            "Home",
            "Features",
            "Token",
            "Companies"
        ]
    },
    {
        title: "Developers",
        links: [
            "Developer Resources",
            "Defi Solutions",
            "Documentation"
        ]
    },
    {
        title: "Company",
        links: [
            "About us",
            "Whitepaper",
        ]
    },
    {
        title: "Policies",
        links: [
            "Terms",
            "Privacy",
            "FAQ"
        ]
    },
];

export default function Footer() {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end -30vh"]
    });

    const imageLeftTransform = useTransform(scrollYProgress, [1, 0], [0, -200], { ease: EASE });
    const imageRightTransform = useTransform(scrollYProgress, [1, 0], [0, 100], { ease: EASE });
    const opacity = useTransform(scrollYProgress, [1, 0], [1, 0], { ease: EASE });
    const transformY = useTransform(scrollYProgress, [.5, 0], [0, 200], { ease: EASE });
    const scale = useTransform(scrollYProgress, [1, 0], [1, .9], { ease: EASE });
    
    return (
        <footer ref={containerRef} className="relative mt-[-100vh] overflow-y-clip overflow-x-clip">
            <motion.div style={{ x: imageLeftTransform }} className="absolute bottom-0 left-0 h-full max-h-[280px] md:max-h-[400px]">
                <img src="/images/iridescent_asset_7.jpg" alt="" className="h-full w-auto -translate-x-1/2" />
            </motion.div>
            <motion.div style={{ x: imageRightTransform }} className="absolute bottom-0 right-0 h-full max-h-[280px] md:max-h-[400px]">
                <img src="/images/iridescent_asset_9.jpeg" alt="" className="blur-sm h-full w-auto translate-y-1/4 translate-x-1/3" />
            </motion.div>
            <div className="h-screen"></div>
            <motion.div style={{ y: transformY, opacity, scale }} className="sticky bottom-0 pt-20 px-4 md:px-6 m-auto max-w-[var(--max-width)] flex flex-col gap-20">
                <div className="relative flex flex-col md:flex-row justify-between gap-16 md:gap-6">
                    <div className="flex flex-col gap-4">
                        <span className="flex items-center gap-2 flex-1">
                            <FaStaylinked size={30} />
                            <span className="text-lg tracking-tighter font-bold">NoxChange</span>
                        </span>
                        <p className="mt-6 text-sm text-white/60 max-w-[30ch] tracking-tight">Join our mailing list list for updates on all aspects of NoxCoin</p>
                        <div className="flex items-center gap-2 max-w-[320px] border border-white/20 backdrop-blur-sm hover:border-white/30 rounded-full">
                            <input type="email" placeholder="Your email address" className="flex-1 text-sm bg-transparent placeholder:text-white/50 focus:outline-none pl-4 h-10" />
                            <span className="flex items-center justify-center h-8 w-8 aspect-square rounded-full mr-1 bg-white/10 text-white/80 hover:bg-white/20">
                                <MdOutlineArrowOutward size={16} />
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-8">
                        {
                            LINKS.map(({ title, links }, index) => (
                                <div key={index} className="flex-1 md:flex-auto flex flex-col gap-4">
                                    <h3 className="text-lg tracking-tighter font-light">{title}</h3>
                                    <ul className="flex flex-col gap-2">
                                        {
                                            links.map((link, subIndex) => (
                                                <li key={subIndex} className="text-xs font-poppins whitespace-nowrap font-light tracking-tighter text-white/50">{link}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="relative flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center py-4 border-t border-white/10">
                    <p className="capitalize text-sm tracking-tighter text-white/50">{(new Date()).getFullYear()} NoxChange, All rights reserved.</p>
                    <ul className="flex items-center gap-2">
                        {
                            [FiGithub, FiTwitter, FiInstagram, FiLinkedin].map((Icon, index) => (
                                <li ey={index} className="h-10 w-10 aspect-square backdrop-blur-sm flex items-center justify-center rounded-full text-white/80 bg-white/10 hover:bg-white/20">
                                    <Icon size={16} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </motion.div>
        </footer>
    )
}