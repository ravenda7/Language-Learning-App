"use client"
import { 
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
  SignUpButton, } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import { Button } from '@/components/ui/button';
import Image  from "next/image";
import Link from "next/link";
import dynamic from 'next/dynamic';
import landingHero from "@/public/herolanding.json";
import React, { useState } from 'react';

// Dynamically import the Lottie component with SSR disabled
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(true);

  const onAnimationComplete = () => {
    setIsPlaying(false); 
  };
  return(
    <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
      <div className="relative w-[290px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
        <Lottie
          autoPlay={isPlaying}
          loop={false}
          animationData={landingHero}
          onComplete={onAnimationComplete} 
        />
      </div>

      <div className="flex flex-col items-center gap-y-8">
        <h1 className='text-xl lg:text-3xl font-extrabold text-neutral-600 max-w-[480px] text-center lg:pt-0 pt-4'>
          {/* Learn, practice, and master new languages with Lingo. */}
          The free, fun, and effective way to learn a language!
        </h1>
        <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
          <ClerkLoading>
            <Loader className="h-5 w-5 text-muted-foreground animate-spin"/>
          </ClerkLoading>

          <ClerkLoaded>
            <SignedOut>
              <SignUpButton 
              mode="modal"
              signInForceRedirectUrl="/learn"
              fallbackRedirectUrl="/learn">
                <Button size="lg" variant="secondary" className="w-full">
                  Get Started
                </Button>
              </SignUpButton>
              <SignInButton 
              mode="modal"
              fallbackRedirectUrl="/learn"
              signUpFallbackRedirectUrl="/learn">
                <Button size="lg" variant="default" className="w-full text-herotext font-extrabold font-din-round">
                  I already have an account
                </Button>
              </SignInButton>
            </SignedOut>
            
            <SignedIn>
            <Button size="lg" variant="secondary" className="w-full" asChild>
                <Link href="/learn">
                Continue learning
                </Link>
              </Button>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  )
}
