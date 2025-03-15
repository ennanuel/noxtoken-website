import React, { useRef } from "react";

import { cubicBezier, motion, useMotionValue } from "framer-motion";

import { FaStaylinked } from "react-icons/fa6";
import { VscSend } from "react-icons/vsc";


const EASE = cubicBezier(.16, 1, .3, 1);

export default function Contact() {
    const imageRef = useRef(null);

    const imageXPosition = useMotionValue(0);
    const imageYPosition = useMotionValue(0);

    const handleMouseMove = (event) => {
        if (!imageRef.current) return;
        const rect = imageRef.current.getBoundingClientRect();

        const imageCenterX = rect.left + (rect.width / 2);
        const imageCenterY = rect.top + (rect.height / 2);

        const x = (event.clientX - imageCenterX) / 10;
        const y = (event.clientY - imageCenterY) / 10;

        imageXPosition.set(x);
        imageYPosition.set(y);
    };

    const resetImagePosition = () => {
        imageXPosition.set(0);
        imageYPosition.set(0);
    }

    return (
        <section className="relative py-20 mt-[120px] px-4 sm:px-6 flex h-screen">
            <div 
                onMouseMove={handleMouseMove} 
                onMouseOut={resetImagePosition} 
                className="flex-1 rounded-[32px] p-6 sm:p-6 relative border border-white/20 bg-black overflow-clip"
            >
                <span className="px-6 flex items-center justify-center w-fit h-10 rounded-full text-white/50 border border-white/20 lowercase text-sm">
                    <span className="flex items-center justify-center overflow-hidden -mt-1">
                        <motion.span 
                            initial={{ y: '100%' }} 
                            whileInView={{ y: '0%' }} 
                            transition={{ duration: 1, ease: EASE, delay: .2 }} 
                            className="block"
                        >contact</motion.span>
                    </span>
                </span>                        
                <motion.div 
                    ref={imageRef} 
                    initial={{ opacity: 0 }} 
                    whileInView={{ opacity: 1 }} 
                    transition={{ duration: 2, ease: EASE, delay: .3 }} 
                    viewport={{ once: true }}
                    className="absolute top-0 left-0 w-full h-full"
                >
                    <motion.img 
                        src="/images/holographic_asset_6.webp" 
                        style={{ x: imageXPosition, y: imageYPosition }}
                        className="w-full h-full object-contain duration-500 ease-[cubic-bezier(.3,_1,_.16,_1)]"
                    />
                </motion.div>
                <div className="flex-1 relative bg-black/50 backdrop-blur-sm hover:backdrop-blur-md transition-[backdrop-filter] duration-300 w-full h-full flex flex-col items-center justify-center gap-2 px-0 sm:px-10 py-12 sm:py-20">
                    <div className="flex flex-col items-center justify-center text-white/80">
                        <div className="flex items-center gap-2">
                            <FaStaylinked size={20} />
                            <span className="text-xl tracking-tighter font-semibold">NoxCoin</span>
                        </div>
                        <span className="uppercase text-[.6rem] font-poppins font-light text-center">Crypto</span>
                    </div>
                    <h2 className="mt-10 text-center text-4xl mb-10 md:mb-0 md:text-[3.5rem] md:leading-[4.2rem] font-light tracking-tighter">
                        {
                            "Want to integrate with NoxCoin?"
                                .split(" ")
                                .map((word, index, words) => (
                                    <span key={index} className="inline-block">
                                        {
                                            word.split("").map((letter, subIndex) => (
                                                <motion.span 
                                                    key={subIndex}
                                                    initial={{ opacity: 0 }} 
                                                    whileInView={{ opacity: 1 }} 
                                                    transition={{ 
                                                        duration: 1, 
                                                        ease: EASE, 
                                                        delay: index > 0 ?
                                                            ((words.slice(0, index).reduce((sum, prevWord) => sum + prevWord.length, 0)) + subIndex) / 25 :
                                                            subIndex / 25
                                                    }} 
                                                    viewport={{ once: true }}
                                                    className="inline-block"
                                                >
                                                    {letter}
                                                </motion.span>
                                            ))
                                        }
                                        &nbsp;
                                    </span>
                                ))
                        }
                    </h2>
                    <p className="mt-4 text-sm text-center text-white/60 tracking-tight">
                        {
                            "Contact us to find out how we can create liquidity for your product."
                                .split(" ")
                                .map((word, index) => (
                                    <motion.span 
                                        key={index}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ duration: 1, ease: EASE, delay: (3 + index) / 25 }} 
                                        viewport={{ once: true }}
                                        className="inline-block"
                                    >{word}&nbsp;</motion.span>
                                ))
                        }
                    </p>
                    <motion.div
                        initial={{ y: '100%', opacity: 0 }}
                        whileInView={{ y: '0%', opacity: 1 }}
                        transition={{ duration: 1, ease: EASE }}
                        viewport={{ once: true }}
                    >
                        <button className="group mt-10 items-center justify-center flex rounded-full border border-white/20 text-white/80 transition-[background-color] duration-300 hover:text-white hover:bg-white/10">
                            <span className="text-sm relative font-poppins tracking-tight pl-6 pr-4">Contact us</span>
                            <span className="w-12 md:w-14 aspect-square rounded-full border border-white/40 flex items-center justify-center bg-white/10">
                                <VscSend size={18} className="relative" />
                            </span>
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}