import Link from 'next/link'
import Image from 'next/image'

import { Unbounded } from 'next/font/google'

import { IoMdArrowDropdown } from "react-icons/io";

import photo from '@/assets/photo2.jpg'

const font_unbounded = Unbounded({ weight: ['800'], subsets: ['cyrillic'] })

export default function Home() {
  return (
    <main className="flex-auto flex gap-8 md:gap-16 lg:gap-24 flex-col">
      <div className='py-0 pt-3 px-16 md:pt-5 md:px-0 md:pl-20 lg:px-32 lg:pr-16 lg:pt-5 flex-initial pb-8 md:pb-0 h-full flex flex-col gap-12 md:flex-row lg:items-center md:justify-between md:items-start lg:justify-between items-center min-w-full'>
        <div className='flex gap-8 flex-col max-w-min'>
          <div className='w-[75px] h-[6px] bg-foreground' />
          <h1 className={`${font_unbounded.className} text-3xl md:text-3xl lg:text-5xl leading-tight`}>Приказчикова <span className='underline text-accent'>Татьяна Викторовна</span> учитель физкультуры</h1>
          <span className='text-sm md:text-lg text-bleak'>Учитель физической культуры<br />МБОУ &quot;Гимназия №122 имени Ж. А. Зайцевой&quot;<br />г. Казани Республики Татарстан</span>
          <Link href='#about' className={`mt-8 p-2 rounded-full bg-accent flex gap-2 items-center justify-start max-w-min text-background ${font_unbounded.className}`}>
            <IoMdArrowDropdown className='text-4xl' />
            <span className='text-xl mr-3'>Начать</span>
          </Link>
        </div>
        <div className='min-w-[80vw] rounded-3xl bg-cover md:rounded-none md:rounded-tl-[90px] md:max-h-[80vh] md:min-w-[40vh] md:aspect-[1/3] lg:bg-cover lg:bg-center md:bg-top md:self-end lg:self-center flex-auto max-w-[70vh] max-h-[70h] aspect-square lg:aspect-square circle overflow-hidden -z-10 lg:rounded-full' />
      </div>
      <div className='flex-auto px-16 lg:px-32 w-full' id='about'>
        <h2 className={`${font_unbounded.className} text-2xl mb-8`} >Обо мне</h2>
        <div className='flex gap-5 flex-col md:flex-row w-full'>
          <span className='text-justify'>Я <strong>Приказчикова Татьяна Викторовна</strong>, учитель физической культуры &quot;Гимназии №122&quot;. Работаю в Гимназии начиная с <i>2000-го</i> года. Являюсь учителем высшей категории. Люблю свою работу, детей, спорт. Сама увлекаюсь спортом и веду спортивный образ жизни. На данный момент я классный руководитель <i>11А</i> класса.</span>
          <Image src={photo} alt='Photo' className='rounded-xl w-full md:w-[30vh]' />
        </div>
      </div>
      <div className='flex-auto px-16 lg:px-32 w-full bg-cyan-700 py-10 text-background'>
        <h2 className={`${font_unbounded.className} text-2xl mb-8`} >О Сайте</h2>
        <span className='text-justify'>На этом сайте собраны материалы к урокам физкультуры и внеклассной деятельности учителя.</span>
      </div>
    </main>
  );
}
