import React from "react";

const ITEMS = ["private key", "sustainable return", "top 100 Crypto app", "1000B & no withdrawal limit"];

export default function Carousel() {

    return (
        <div className="relative flex items-center gap-20 px-4 md:px-6 mt-[80px]">
            <div 
                style={{ maskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)' }} 
                className="relative flex flex-1 overflow-hidden py-2"
            >
                {
                    [1, 2].map((item) => (
                        <ul key={item} className="lg:min-w-[100%] flex animation-drag-left">
                            {
                                ITEMS.map((item, index) => (
                                    <li key={index} className="flex-1 h-10 px-4 md:px-10 border border-white/20 rounded-full flex items-center justify-center">
                                        <span className="text-sm text-white/60 whitespace-nowrap tracking-tight font-inter font-light">{item}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    ))
                }
            </div>
        </div>
    )
}