import React from 'react'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa";
import { Unbounded } from 'next/font/google'

const font_unbounded = Unbounded({ weight: ['800'], subsets: ['cyrillic'] })

export default function Home() {
    return (
        <>
          <div className='border-b-[1px] border-b-zinc-800 px-4 pb-4 flex flex-col gap-2 border-dotted lg:border-0'>
            <h3 className={`${font_unbounded.className} text-2xl mb-3`}>Обо мне</h3>
            <span className='text-bleak'>О учительской жизни и тому как живу. Что происходит. Об опыте и работе. Все вместе ваще плюс вайб</span>
            <Link href='/#about' className='flex gap-3 text-lg font-bold items-center underline my-3 text-accent'>Посмотреть <FaArrowRight /></Link>
          </div>
          <div className='px-4 flex flex-col gap-2'>
            <h3 className={`${font_unbounded.className} text-2xl mb-3`}>Мои Достижения</h3>
            <span className='text-bleak'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit odio aliquam quo nam culpa eos praesentium, sapiente, dignissimos soluta laboriosam aut? Amet molestias ea, officiis ipsa.</span>
            <Link href='/achievements' className='flex gap-3 text-lg font-bold items-center underline mt-3 text-accent'>Посмотреть <FaArrowRight /></Link>
          </div>
        </>
    )
}