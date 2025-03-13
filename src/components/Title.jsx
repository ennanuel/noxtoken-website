
import { motion, cubicBezier } from "framer-motion";

const EASE = cubicBezier(.16, 1, .3, 1);

export default function Title({ text }) {
    return (
        <h2 className="text-[2.8rem] lg:text-[3.5rem] tracking-tight font-light">
            {
                text
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
                                                ((words.slice(0, index).reduce((sum, prevWord) => sum + prevWord.length, 0)) + subIndex) / 40 :
                                                subIndex / 40
                                        }}
                                        viewport={{ once: true }}
                                        className="inline-block"
                                    >{letter}</motion.span>
                                ))
                            }
                            &nbsp;
                        </span>
                    ))
            }
        </h2>
    )
}