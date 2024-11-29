import React from 'react'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa";
import { Unbounded } from 'next/font/google'

const font_unbounded = Unbounded({ weight: ['800'], subsets: ['cyrillic'] })

export default function Home() {
    return (
        <>
          <div className='border-b-[1px] border-b-zinc-800 px-4 pb-4 flex flex-col gap-2 border-dotted lg:border-0'>
            <h3 className={`${font_unbounded.className} text-2xl mb-3`}>Галерея</h3>
            <span className='text-bleak'>Фотографии разных моментов школьной жизни, поездок, соревнований, конкурсов, фестивалей и других активностей!</span>
            <Link href='/gallery' className='flex gap-3 text-lg font-bold items-center underline my-3 text-accent'>Посмотреть <FaArrowRight /></Link>
          </div>
          <div className='px-4 flex flex-col gap-2'>
            <h3 className={`${font_unbounded.className} text-2xl mb-3`}>Достижения</h3>
            <span className='text-bleak'>Призер грантового конкурса лучших проектов для детей и молодежи «Конкурс первичных отделений Движения Первых», 2024. Призер зонального этапа Республиканской военно-спортивной игры «Зарница - 2023». Призер Школьной волейбольной Лиги, 2023 - 2024</span>
            <Link href='/achievements' className='flex gap-3 text-lg font-bold items-center underline mt-3 text-accent'>Посмотреть <FaArrowRight /></Link>
          </div>
        </>
    )
}