'use client'
import React from 'react'
import { LuDownload } from "react-icons/lu";
import { Unbounded } from 'next/font/google'
import Link from 'next/link'

const font_unbounded = Unbounded({ weight: ['800'], subsets: ['cyrillic'] })

type File = {
    name: string,
    file_path: string
  }
  
type Props = {
    files: File[],
}

export default function Slider({ files }: Props) {
  return (
    <main className='pt-0 px-5 lg:pt-5 md:px-16 lg:px-32a grid gap-3'>
      {files.map(((file: File, index: number) => (
        <div key={index} className='flex flex-col gap-1 w-full lg:w-[300px] h-fit p-8 bg-zinc-300 border-[1px] rounded-xl border-zinc-500'>
          <h1 className={`${font_unbounded.className} text-2xl flex gap-3 mb-2`}>{file.name}:</h1>
          <span className='p-1 text-orange-500 bg-orange-300 rounded'>PPTX</span>
          <Link href={`/materials/${file.file_path}`} className='text-lg text-accent font-semibold flex items-center gap-3' download={true}><LuDownload /> Скачать</Link>
        </div>
      )))}
    </main>
  )
}
