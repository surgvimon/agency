'use client'
import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import { IcnDell, IcnHamburger, IcnSearch } from '@/components/icons';
import { Button } from '@/components/ui';
import { useRouter } from 'next/navigation';

const Navbar:React.FC = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="max-w-screen-xl mx-auto sm:p-4 pb-2 relative">
        <Link href="/" className="inline-flex items-center bg-green-900">
            <Image
                src={`/images/level.png`}
                width={512}
                height={512}
                alt={""}
                className="max-w-8 sm:w-[35px] sm:h-auto"
            />
            <span className="hidden sm:block ml-2 mt-2 sm:mt-0 text-white font-semibold text-xl">
                LevelUp Solutions
            </span>
        </Link>

        <span className="site-header__search-trigger">
            <IcnSearch className=''/>
        </span>
        <Button 
            id="hamburger-menu"
            variant='link' 
            size='icon-sm'
            className='site-header__menu-trigger md:hidden h-auto w-auto'
            aria-hidden="true"
            onClick={() => setIsOpen(!isOpen)}
        >
            {isOpen
                ?<IcnDell className=''  />
                :<IcnHamburger className=''  />
            }
        </Button>
        <div className={`site-header__menu  ${isOpen ? "site-header__menu--active" : ""} group `}>
            <nav className="main-navigation ">
                <ul>
                <li><Link href="#about">About Us</Link></li>
                <li><Link href="#programs">Programs</Link></li>
                <li><Link href="#event">Events</Link></li>
                <li><Link href="#campuses">Campuses</Link></li>
                <li><Link href="#blog">Blog</Link></li>
                </ul>
            </nav>
            <div className="site-header__util">
                <Button 
                    id="reset"
                    variant='primary' 
                    className='float-left'
                    onClick={() => router.push(`?login`)}
                >
                    Login
                </Button>
                <Button 
                    id="reset"
                    variant='primary' 
                    className='float-left'
                    onClick={() => router.push(`?sign-up`)}
                >
                    Sign Up
                </Button>
                <span className ="search-trigger ">
                    <IcnSearch/>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Navbar;
