import React, { useEffect } from "react";

import { useMotionValueEvent, useScroll } from "framer-motion";

import Lenis from "lenis";

import Intro from "./components/Intro";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import About from "./components/About";
import Features from "./components/Features";
import WhatMakesUsDifferent from "./components/WhatMakesUsDifferent";
import Tokens from "./components/Tokens";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


export default function App() {
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, 'change', (value) => {
        const isScrollingDown = value > scrollY.getPrevious();
        const scrolledPast50Pixels = value > 60;
        
        const header = document.getElementById("header");
        const headerBackdrop = document.getElementById("header-backdrop")

        if(header) {
            const menuIsOpen = header.dataset.menu === "open";

            if(!menuIsOpen && isScrollingDown && scrolledPast50Pixels) {
                header.classList.add("translate-y-[-100%]");
                headerBackdrop?.classList?.add("opacity-0");
            } else {
                header.classList.remove("translate-y-[-100%]");
                if(scrolledPast50Pixels) headerBackdrop?.classList?.remove("opacity-0");
                else headerBackdrop?.classList?.add("opacity-0");
            }
        }
    })

    useEffect(() => {
        const lenis = new Lenis();
        
        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        
        requestAnimationFrame(raf);
    }, []);

    return (
        <div style={{ '--max-width': '1148px' }} className="min-h-screen">
            <Header />
            <div className="relative z-[1] max-w-[var(--max-width)] m-auto">
                <Intro scrollY={scrollY} />
                <Carousel />
                <About />
                <Features />
                <WhatMakesUsDifferent />
                <Tokens />
                <Contact />
            </div>
            <Footer />
        </div>
    )
}