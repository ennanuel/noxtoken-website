import React, { useRef } from "react";

import { cubicBezier, motion } from "framer-motion";

import { FaBurger, FaStaylinked } from "react-icons/fa6";
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const MENU = [
    {
        title: "Home"
    },
    {
        title: "Features"
    },
    {
        title: "Tokens"
    },
    {
        title: "Companies"
    },
];

const EASE = cubicBezier(.16, 1, .3, 1);

export default function Header() {
    const mobileMenuIsOpen = useRef(false);

    const toggleMenu = () => {
        mobileMenuIsOpen.current = !mobileMenuIsOpen.current;
        
        const header = document.getElementById("header");
        const headerBackdrop = document.getElementById("header-backdrop");
        const mobileMenu = document.getElementById("mobile-menu")
        const openIcon = document.getElementById("menu-open-icon");
        const closeIcon = document.getElementById("menu-close-icon");

        header.dataset.menu = mobileMenuIsOpen.current ? "open" : "closed";

        if(mobileMenuIsOpen.current) {
            headerBackdrop?.classList?.add("scale-y-[4]");
            mobileMenu?.classList?.remove("pointer-events-none", "opacity-0");

            openIcon?.classList?.add("opacity-0", "rotate-45");
            closeIcon?.classList?.remove("opacity-0", "rotate-45");
        } else {
            headerBackdrop?.classList?.remove("scale-y-[4]");
            mobileMenu?.classList?.add("pointer-events-none", "opacity-0");

            openIcon?.classList?.remove("opacity-0", "rotate-45");
            closeIcon?.classList?.add("opacity-0", "rotate-45");
        }
    }

    return (
        <header id="header" className={`transition-transform duration-[500ms] ease-expo sticky top-0 w-full z-[999999] flex items-center justify-center`}>
            <div id="header-backdrop" style={{ maskImage: 'linear-gradient(black, transparent)' }} className="origin-top bg-black/20 pointer-events-none absolute top-0 left-0 w-full h-full backdrop-blur-[100px] opacity-0 transition-[transform,_opacity] duration-500 ease-expo"></div>
            <div className="relative mx-auto max-w-[var(--max-width)] w-full hidden lg:flex gap-4 py-4 px-4 md:px-6">
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, ease: EASE, delay: .1 }}
                    className="flex items-center gap-2 flex-1"
                >
                    <FaStaylinked size={30} />
                    <span className="text-lg tracking-tighter font-semibold">NoxChange</span>
                </motion.div>
                <div className="flex-1 flex items-center justify-center">
                    <motion.ul 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2, ease: EASE, delay: .2 }}
                        className="p-1 flex items-center borders border-white/20 rounded-full"
                    >
                        {
                            MENU.map(({ title }, index) => (
                                <motion.li 
                                    key={index} 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 2, ease: EASE, delay: .4 + (index/10) }}
                                    className={`rounded-full flex items-center justify-center h-8 px-6 gap-2 borders ${index === 0 ? 'border-transparent bg-white/5 text-white' : 'text-white/80 border-white/20 hover:text-white/80 hover: transition-[background-color]'}`}
                                >
                                    <span className="font-normal text-xs">{title}</span>
                                </motion.li>
                            ))
                        }
                    </motion.ul>
                </div>
                <div className="transition-transform duration-500 ease-[cubic-bezier(0.16,_1,_.3,_1)] flex-1 flex justify-end items-center gap-2">
                    <motion.button 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2, ease: EASE, delay: .3 }}
                        className="flex items-center justify-center px-6 h-10 rounded-full border border-white/40">
                        <span className="text-xs font-poppins tracking-tight text-white/80">Login</span>
                    </motion.button>
                    <motion.button 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2, ease: EASE, delay: .3 }}
                        className="flex items-center justify-center px-6 h-10 rounded-full bg-white border border-white">
                        <span className="text-xs font-poppins tracking-tight text-black">Get started</span>
                    </motion.button>
                </div>
            </div>
            <div className="relative mx-auto max-w-[var(--max-width)] w-full flex items-center justify-between lg:hidden flex py-4 px-4 md:px-6">
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, ease: EASE, delay: .1 }}
                    className="transition-transform duration-500 ease-[cubic-bezier(0.16,_1,_.3,_1)] flex items-center gap-2 flex-1"
                >
                    <FaStaylinked size={30} />
                    <span className="text-lg tracking-tighter font-semibold">NoxChange</span>
                </motion.div>

                <button onClick={toggleMenu} className="flex items-center justify-center gap-2 h-12 min-w-12 text-white/50 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md sm:px-4">
                    <span className="text-sm hidden sm:block">Menu</span>
                    <span className="relative w-5 aspect-square flex items-center justify-center">
                        <span id="menu-open-icon" className="absolute top-0 left-0 w-full h-full flex items-center justify-center transition-[transform,_opacity] duration-500 ease-expo">
                            <FaBurger size={20} />
                        </span>
                        <span id="menu-close-icon" className="opacity-0 absolute top-0 left-0 w-full h-full flex items-center justify-center transition-[transform,_opacity] duration-500 ease-expo">
                            <MdClose size={20} />
                        </span>
                    </span>
                </button>
            </div>
            <div id="mobile-menu" className="pointer-events-none opacity-0 origin-top-right transition-[transform,_opacity] ease-expo duration-500 px-2 sm:px-4 absolute top-full left-0 w-full block lg:hidden">
                <div className="w-full overflow-hidden backdrop-blur-lg border border-white/20 bg-black/20 rounded-2xl">
                    <h3 className="p-4 text-sm text-white/40">Menu</h3>
                    <ul className="flex flex-col">
                        {
                            MENU.map(({ title }, index) => (
                                <li key={index}>
                                    <a href="#" className={`${index === 0 ? 'text-white' : 'text-white/80'} flex items-center border-b border-white/20 h-12 sm:h-14 px-4 sm:px-6`}>
                                        <span className="text-lg font-light tracking-tight">{title}</span>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                    <h3 className="mt-4 p-4 text-sm text-white/40">Socials</h3>
                    <ul className="flex flex-wrap items-center justify-start gap-12 p-4 sm:p-6 pt-2 sm:pt-2">
                        {
                            [FiGithub, FiTwitter, FiInstagram, FiLinkedin].map((Icon, index) => (
                                <li key={index}>
                                    <a href="#" className={`text-white/80 flex items-center justify-center`}>
                                        <Icon size={20} />
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </header>
    )
}
