

import { motion, cubicBezier } from "framer-motion";

const EASE = cubicBezier(.16, 1, .3, 1);

export default function SectionTitle({ text }) {

    return (
        
        <h3 className="px-6 h-10 flex items-center justify-center w-fit rounded-full text-white/50 border border-white/20 lowercase text-sm">
            <span className="flex items-center justify-center overflow-hidden">
                <motion.span 
                    initial={{ y: '100%' }} 
                    whileInView={{ y: 0 }} 
                    transition={{ duration: 1, ease: EASE, delay: .2 }} 
                    className="block"
                >{text}</motion.span>
            </span>
        </h3>
    )
}