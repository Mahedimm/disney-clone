import {
    HomeIcon, PlusIcon, SearchIcon, StarIcon
} from '@heroicons/react/solid';
import { signIn, signOut } from "next-auth/react";
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import DropdownMenu from './DropdownMenu';
const Header = ({session}) => {
//   console.log(session);
    const user = session?.user;
    const router = useRouter();
    console.log(user);
    const isUser = !!user;
    return (
        <div className="sticky bg-[#040714] top-0 z-[1000] flex items-center px-10 h-[72px] md:px-12">
             <Image 
             src="/images/logo.svg" 
             alt="logo" 
             width={80} 
             height={80} className="cursor-pointer"
                onClick={() => router.push('/')}
             />
             {
                 isUser &&(
                    <div className="hidden ml-10 md:flex items-center space-x-6 ">
                 <a className="header-link group">
                     <HomeIcon className="h-4" />
                     <span className="span">Home</span> 
                 </a>
                 <a className="header-link group">
                     <SearchIcon className="h-4" />
                     <span className="span">Search</span> 
                 </a>
                 <a className="header-link group">
                     <PlusIcon className="h-4" />
                     <span className="span">Watchlist</span> 
                 </a>
                 <a className="header-link group">
                     <StarIcon className="h-4" />
                     <span className="span">Originals</span> 
                 </a>
                 <a className="header-link group">
                 <img src="/images/movie-icon.svg" alt="" className="h-5" />
                     <span className="span">Movies</span> 
                 </a>
                 <a className="header-link group">
                 <img src="/images/series-icon.svg" alt="" className="h-5" />
                     <span className="span">Series</span> 
                 </a>
             </div>
                 )
             }
            {!isUser ? (                <button className='ml-auto uppercase border px-4 py-1.5 font-medium tracking-wide hover:bg-white hover:text-black transition duration-200' onClick={signIn}>Login</button>):
             <DropdownMenu user={user} signOut={signOut}/>
            }
           

              
        </div>
    );
};

export default Header; 