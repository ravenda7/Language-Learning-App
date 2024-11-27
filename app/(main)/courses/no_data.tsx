"use client"
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import halt from '@/public/notFoundAnimation.json';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export const NoData = () => {

    const [isPlaying, setIsPlaying] = useState(true);

  const onAnimationComplete = () => {
    setIsPlaying(false); 
  };
    return(
        <div className="h-full max-w-[912px] px-3 mx-auto flex flex-col items-center justify-center">
            <Lottie
                autoPlay={isPlaying}
                loop={!isPlaying}
                animationData={halt}
                onComplete={onAnimationComplete} 
                />
                <h1 className="text-2xl font-bold text-neutral-700 ml-6">
                 No Data is Found
                </h1>
        </div>
    )
}