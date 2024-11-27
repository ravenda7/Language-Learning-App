import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SidebarItem } from "./sidebar-item";
import {
    ClerkLoading,
    ClerkLoaded,
    UserButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
type Props = {
    className?: string;
};

export const Sidebar = ({className} : Props) => {
    return(
        <div className={cn(
        "flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
        className,
        )}>
            <Link href="/learn">
             <div className="pt-4 pl-4 pb-7 flex items-center">
             <Image src="/lingo.svg" height={80} width={80} alt='Lingo Logo' />
                <h1 className='font-pacifico'>Lingo</h1>
            </div>
            </Link>
            <div className="flex flex-col gap-y-2 flex-1">
               <SidebarItem 
               label="Learn" 
               href="/learn"
               iconSrc="/learn.svg"
               />
                <SidebarItem 
               label="Leaderboard" 
               href="/leaderboard"
               iconSrc="/leaderboard.svg"
               />
                <SidebarItem 
               label="Quests" 
               href="/quests"
               iconSrc="/quests.svg"
               />
                <SidebarItem 
               label="Shop" 
               href="/shop"
               iconSrc="/shop.svg"
               />
            </div>
            
            <div className="p-4">
                <ClerkLoading>
                    <Loader className="h-5 w-5 rext-muted-foreground animate-spin" />
                </ClerkLoading>
                <ClerkLoaded>
                    <UserButton afterSignOutUrl="/" />
                </ClerkLoaded>
            </div>
        </div>
    );
};