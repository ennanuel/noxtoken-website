import { cubicBezier, motion, useTransform } from "framer-motion";
import { useEffect, useState } from "react";


const CLASSNAMES = [
    {
        parent: "top-[-8%] left-[20%] w-full",
        child: "bg-purple-600/40"
    },
    {
        parent: "top-[-10%] left-[30%] w-full",
        child: "bg-purple-600"
    },
    {
        parent: "bottom-[-200px] left-[35%] w-[400px]",
        child: "bg-purple-900"
    },
    {
        parent: "top-[-10%] left-[45%] w-[75%]",
        child: "bg-[#a58cb3]"
    },
    {
        parent: "top-[-10%] left-[55%] w-[75%]",
        child: "bg-[#d18882]"
    },
    {
        parent: "top-[0%] left-[65%] w-[50%]",
        child: "bg-[#c88082]"
    },
    {
        parent: "top-[5%] left-[75%] w-[45%]",
        child: "bg-[#e4d98a]"
    },
    {
        parent: "bottom-[-80px] right-[-20px] w-[160px]",
        child: "bg-[#5c322a]"
    }
];

const EASE = cubicBezier(.16, 1, .3, 1);

export default function Background({ scrollY }) {
    const [windowHeight, setWindowHeight] = useState(0);

    const translateX = useTransform(scrollY, [windowHeight, windowHeight * 5], ['0%', '-50%']);
    const opacity = useTransform(scrollY, [windowHeight, windowHeight * 5], [1, 0])
    const scale = useTransform(scrollY, [windowHeight, windowHeight * 5], [1, 0.5]);

    useEffect(() => { setWindowHeight(window.innerHeight) }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden">
            <div className="relative w-full h-screen">
                {
                    CLASSNAMES.map(({ parent, child }, index) => (
                        <motion.div 
                            key={index} 
                            initial={{ scale: 0.5, opacity: 0 }} 
                            animate={{ scale: 1, opacity: 1 }} 
                            transition={{ duration: 2, ease: EASE, delay: (index / 25) }} 
                            style={{ translateX, opacity, scale }}
                            className={`${parent} absolute aspect-square`}
                        >
                            <span 
                                style={{ animationDelay: `-${index * 1.5} s` }} 
                                className={`${child} w-full h-full rounded-full animation-go-up-down absolute blur-[140px]`} 
                            />
                        </motion.div>
                    ))
                }
            </div>
        </div>
    )
}