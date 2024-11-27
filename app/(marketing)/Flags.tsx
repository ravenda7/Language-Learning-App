"use client"
import { Button } from "@/components/ui/button";
import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';

export const Flags = () => {
    const languages = [
        { id: 1, src: "/flags/np.svg", alt: "Nepal", label: "Nepali" },
        { id: 2, src: "/flags/hr.svg", alt: "Croatian", label: "Croatian" },
        { id: 3, src: "/flags/es.svg", alt: "Spanish", label: "Spanish" },
        { id: 4, src: "/flags/fr.svg", alt: "French", label: "French" },
        { id: 5, src: "/flags/it.svg", alt: "Italian", label: "Italian" },
        { id: 6, src: "/flags/jp.svg", alt: "Japanese", label: "Japanese" },
        { id: 7, src: "/flags/kr.svg", alt: "South Korea", label: "Korean" },
        { id: 8, src: "/flags/us.svg", alt: "USA", label: "USA" },
        { id: 9, src: "/flags/bz.svg", alt: "Brazil", label: "Brazilian" },
        { id: 10, src: "/flags/rs.svg", alt: "Russia", label: "Russian" },
        { id: 11, src: "/flags/in.svg", alt: "India", label: "Indian" },
    ];

    const [startIdx, setStartIdx] = useState(0);
    const maxDisplay = 5;
    const handleClickLeft = () => {
        if (startIdx > 0) {
            setStartIdx(startIdx - 1);
        } else {
            setStartIdx(languages.length - maxDisplay);
        }
    };

    const handleClickRight = () => {
        if (startIdx + maxDisplay < languages.length) {
            setStartIdx(startIdx + 1);
        } else {
            setStartIdx(0);
        }
    };

    return (
        <div className="hidden lg:block h-20 w-full border-t-2 border-b-2 border-slate-200 p-2">
            <div className="max-w-screen-lg mx-auto flex items-center justify-center h-full">
                <ChevronLeft className="hover:cursor-pointer border-b-2" onClick={handleClickLeft} />
                <div className="max-w-screen-lg mx-auto flex items-center justify-center h-full">
                    {languages.slice(startIdx, startIdx + maxDisplay).map((language) => (
                        <Button key={language.id} size="lg" variant="ghost" className="w-full">
                            <img
                                src={language.src}
                                alt={language.alt}
                                height={32}
                                width={40}
                                className="mr-4 rounded-md"
                            />
                            {language.label}
                        </Button>
                    ))}
                </div>
                <ChevronRight className="hover:cursor-pointer border-b-2" onClick={handleClickRight} />
            </div>
        </div>
    );
};



