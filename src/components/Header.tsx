'use client'
import React, { useState } from 'react';

// Nextjs
import Link from 'next/link'
import { usePathname } from 'next/navigation';

// HeadlessUI
import { Dialog, DialogPanel } from '@headlessui/react';

// Images & Icons
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx'
import { LuMedal } from "react-icons/lu";

type HeaderLinkType = {
    title: string,
    link: string
}

const headerLinks: HeaderLinkType[] = [
    {
        title: "Главная",
        link: '/'
    },
    {
        title: "Галлерея",
        link: '/gallery'
    },
    {
        title: "Награды",
        link: '/achievements'
    },
    {
        title: "Материалы",
        link: "/education-materials"
    }
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)
    const pathname = usePathname()

    return (
        <header className='flex-initial'>
            <nav className='p-11 lg:px-16 lg:py-12 flex justify-between items-center mx-auto lg:border-none border-b-[1px] border-[#ffffff38]'>
                <Link href='/' className='hover:cursor-pointer text-3xl' ><LuMedal /></Link>
                <ul className='hidden gap-12 lg:flex items-center'>
                    {headerLinks.map((link: HeaderLinkType, index: number) => (
                        <li onClick={() => setMobileMenuOpen(false)} key={index} className={`underline-btn text-xl text-foreground font-semibold no-underline transition-colors ${link.link == pathname ? "after:scale-x-[1] origin-bottom-left" : ""}`}>
                            <Link href={link.link}>{link.title}</Link>
                        </li>
                    ))}
                </ul>
                <span></span>
                <button className='flex lg:hidden text-foreground' onClick={() => setMobileMenuOpen(true)}>
                    <RxHamburgerMenu className='w-6 h-6' />
                </button>
            </nav>
            <Dialog
                as='div'
                className='lg:hidden' 
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
            >
                <DialogPanel className='fixed right-0 w-full inset-y-0 bg-background md:border-l-[1px] border-foreground sm:max-w-sm overflow-y-auto' >
                    <div className="flex items-center justify-between p-11">
                        <Link href='/' className='hover:cursor-pointer text-3xl' ><LuMedal /></Link>
                        <button
                            type='button'
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <RxCross2 className="h-6 w-6 text-foreground" />
                        </button>
                    </div>
                    <div className='flow-root'>
                        <div className='flex flex-col gap-5 mx-8 py-8 border-b-[1px] border-b-foreground'>
                            {headerLinks.map((link: HeaderLinkType, index: number) => (
                                <div onClick={() => setMobileMenuOpen(false)} className='flex items-center gap-2' key={index}>
                                    <Link href={link.link} className={`text-foreground font-semibold text-xl ${link.link == pathname && 'underline'}`}>{link.title.toUpperCase()}</Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
}