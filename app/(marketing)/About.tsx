"use client"
import dynamic from 'next/dynamic';
import First from "@/public/animation1.json";
import Second from "@/public/animation2.json";
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export const About = () => {
    const [isPlaying, setIsPlaying] = useState(true);

  const onAnimationComplete = () => {
    setIsPlaying(false); 
  };
    return (
    <>
        <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
            <div className="flex-col gap-y-8 items-center lg:items-start lg:flex hidden">
                <h1 className='text-2xl lg:text-5xl font-extrabold text-hero max-w-[480px]'>
                    free. fun. effective.
                </h1>
                <div className="gap-y-3 max-w-[450px] w-full">
                    <h1 className='font-extrabold text-neutral-600'>
                    Learning with Lingo is fun, and <span className='text-sky-500'>research shows that it works</span>! With quick, bite-sized lessons, you’ll earn points and unlock new levels while gaining real-world communication skills.
                    </h1>
                </div>
            </div>
            <div className="relative w-[290px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
                <Lottie
                autoPlay={isPlaying}
                loop={!isPlaying}
                animationData={First}
                onComplete={onAnimationComplete} 
                />
            </div>
            <div className="flex flex-col gap-y-8 items-center lg:items-start lg:hidden">
                <h1 className='text-2xl lg:text-5xl font-extrabold text-hero max-w-[480px]'>
                    free. fun. effective.
                </h1>
                <div className="gap-y-3 max-w-[450px] w-full">
                    <h1 className='font-extrabold text-neutral-600'>
                    Learning with Lingo is fun, and <span className='text-sky-500'>research shows that it works</span>! With quick, bite-sized lessons, you’ll earn points and unlock new levels while gaining real-world communication skills.
                    </h1>
                </div>
            </div>
        </div>
        <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
            <div className="relative w-[290px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0 sm:items-center">
                <Lottie
                autoPlay={isPlaying}
                loop={!isPlaying}
                animationData={Second}
                onComplete={onAnimationComplete} 
                />
            </div>
            <div className="flex flex-col gap-y-8">
                <h1 className='text-xl lg:text-5xl font-extrabold text-hero max-w-[480px]'>
                    stay motivated
                </h1>
                <div className="gap-y-3 max-w-[450px] w-full">
                    <h1 className='font-extrabold text-neutral-600'>
                    We make it easy to form a habit of language learning with game-like features, fun challenges, and reminders from our friendly mascot, Duo the owl.
                    </h1>
                </div>
            </div>
        </div>
    </>
    );
}

