"use client";
import Image from 'next/image';
import { 
    ClerkLoaded,
    ClerkLoading,
    SignedIn,
    SignedOut,
    UserButton,
    SignInButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import { Button } from "@/components/ui/button"
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
export const Header: React.FC = () => {
    const [showFirstHeader, setShowFirstHeader] = useState(true);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 200) {
          setShowFirstHeader(false);
        } else {
          setShowFirstHeader(true);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return(
        <>
        <header
            className={cn(
                'bg-white z-50 h-20 w-full border-b-2 border-slate-200 px-4 fixed top-0 transition duration-500',
                { block: showFirstHeader, hidden: !showFirstHeader }
              )}
        >
            <div className="lg:max-w-screen-lg mx-auto flex items-center justify-center h-full">
                <div className="pt-8 pl-4 pb-7 flex items-center gap-x-[-9px]">
                    <Image src="/lingo.svg" height={80} width={80} alt='Lingo Logo' />
                    <h1 className='font-pacifico'>Lingo</h1>
                </div>
            </div>
        </header>
        <header
            className={cn(
                'bg-white z-50 h-20 w-full border-b-2 border-slate-200 px-4 fixed top-0 transition duration-500',
                { hidden: showFirstHeader, block: !showFirstHeader }
              )}
        >
            <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full">
                <div className="pt-8 pl-4 pb-7 flex items-center gap-x-[-3]">
                    <Image src="/lingo.svg" height={80} width={80} alt='Lingo Logo' />
                    <h1 className='font-pacifico'>Lingo</h1>
                </div>
                <ClerkLoading>
                  <Loader className='h-5 w-5 text-muted-foreground' />
                </ClerkLoading>
                <ClerkLoaded>
                  <SignedIn>
                      <UserButton />
                  </SignedIn>
                  <SignedOut>
                    <SignInButton
                      mode='modal'  
                      fallbackRedirectUrl="/learn"
                    >
                      <Button size="lg" variant="secondary" className='font-[900]'>
                        Login
                      </Button>
                    </SignInButton>
                  </SignedOut>
                </ClerkLoaded>
            </div>
        </header>
        </>
    )
}