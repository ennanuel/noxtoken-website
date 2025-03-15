
import { motion, cubicBezier } from "framer-motion";

import { HiArrowLongRight } from "react-icons/hi2";


const EASE = cubicBezier(.16, 1, .3, 1);

function Circles ({ parentIndex }) {
    return (
        <span className="inline-flex items-center pr-6 -mb-2 w-fit mr-4">
            {
                [1, 2, 3, 4, 5, 6].map((item, index, arr) => (
                    <motion.span 
                        initial={{ x: '-100%', opacity: 0 }} 
                        animate={{ x: '0%', opacity: 1 }} 
                        transition={{ duration: 2, ease: EASE, delay: (parentIndex / 25) + (index / 25) }}
                        className="block -mr-6 min-w-10 md:min-w-12 max-h-10 md:max-h-12 w-10 md:w-12 aspect-square"
                    >
                        <span 
                            key={item} 
                            style={{ opacity: index / (arr.length - 1) + 0.2 }}
                            className="block w-full h-full rounded-full bg-white/10 border border-white/50 backdrop-blur-sm" 
                        />
                    </motion.span>
                ))
            }
        </span>
    )
};

function CTAButton({ parentIndex }) {
    return (
        <motion.span 
            initial={{ x: '-50%', opacity: 0 }} 
            animate={{ x: '0%', opacity: 1 }} 
            transition={{ duration: 2, ease: EASE, delay: (parentIndex / 25) }} 
            className="relative inline-flex items-center mr-6"
        >
            <button className="-mb-2 lg:-mb-3 flex h-12 md:h-14 w-full rounded-full border border-white/20 transition-[background-color] duration-300 hover:bg-white/10">
                <span className="flex-1 flex items-center justify-center pl-6 pr-4 text-sm font-poppins font-light tracking-tight whitespace-nowrap">Get started</span>
                <span className="flex items-center justify-center w-12 md:w-14 aspect-square rounded-full border border-white/50 bg-white/5">
                    <HiArrowLongRight size={20} />
                </span>
            </button>
        </motion.span>
    )
}

export default function Title ({ word, index }) {

    return (
        word === "\n" ?
            <br className="block flex-1 w-full" /> :
            word === "_circles_" ?
                <Circles parentIndex={index} /> :
                word === "_cta_" ?
                    <CTAButton parentIndex={index} /> :
                    word === "_tab_" ?
                        <span className="hidden md:inline-block mr-6 w-[84px]" /> :
                        <span className="inline-block overflow-hidden">
                            <motion.span 
                                initial={{ y: '100%' }}
                                animate={{ y: '0%' }}
                                transition={{ ease: EASE, duration: 2, delay: (index / 25) }}
                                className={`${word === 'NoxToken.' && 'italic'} block text-[3rem] md:text-[3.6rem] lg:text-[4rem] leading-[3.4rem] md:leading-[4.4rem] lg:leading-[4.6rem] font-light tracking-tight`}
                            >{word}&nbsp;</motion.span>
                        </span>
    )
}