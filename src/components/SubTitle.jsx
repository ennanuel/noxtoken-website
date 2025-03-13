
import { motion, cubicBezier } from "framer-motion";

const EASE = cubicBezier(.16, 1, .3, 1);

export default function SubTitle({ text, longerTitle }) {
    return (
        <p className={`${longerTitle ? 'max-w-[60ch] lg:max-w-[80ch]' : 'max-w-[50ch]'} text-sm text-white/50 mt-4 tracking-tight`}>
            {
                text
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
    )
}