import { useAnimate, motion } from "framer-motion"
import { useEffect } from "react";

export default function Numbers({ text, numbers, isDecimal, numberAffix, scale, opacity }) {
    const [ref, animate] = useAnimate(0);

    useEffect(() => {
        if(!ref.current) return;

        animate(0, numbers, {
            duration: 2,
            onUpdate: (value) => {
                ref.current.innerText = `${isDecimal ? value.toFixed(2) : Math.round(value)}${numberAffix}`;
            }
        })
    }, [])

    return (
        <motion.li style={{ scale, opacity }} className="origin-bottom-left flex flex-col-reverse sm:flex-row sm:items-center justify-start lg:justify-end gap-2 overflow-hidden">
            <div className="overflow-hidden h-fit">
                <h3 ref={ref} className="origin-bottom-right tracking-tight text-2xl md:text-4xl before:font-normal"></h3 >
            </div>
            <div className="origin-bottom-right">
                <motion.p 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 1 }} 
                    className="max-w-[10ch] tracking-tight text-xs text-sm leading-[1rem] font-light text-white/80"
                >{text}</motion.p>
            </div>
        </motion.li>
    )
}