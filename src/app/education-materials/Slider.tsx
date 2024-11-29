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

interface IObjectKeys {
  [key: string]: React.JSX.Element
}

interface IBadges extends IObjectKeys {
  'pptx': React.JSX.Element,
  'pdf': React.JSX.Element,
  'docx': React.JSX.Element,
  'ppt': React.JSX.Element,
  'mp4': React.JSX.Element
}

export default function Slider({ files }: Props) {
  const badges: IBadges = {
    "pptx": <span className='p-1 text-orange-400 bg-orange-200 rounded-lg font-semibold text-xs max-w-min px-2'>PPTX</span>,
    "ppt": <span className='p-1 text-orange-400 bg-orange-200 rounded-lg font-semibold text-xs max-w-min px-2'>PPTX</span>,
    "pdf": <span className='p-1 text-red-400 bg-red-200 rounded-lg font-semibold text-xs max-w-min px-2'>PDF</span>,
    "docx": <span className='p-1 text-blue-400 bg-blue-200 rounded-lg font-semibold text-xs max-w-min px-2'>DOCX</span>,
    "mp4": <span className='p-1 text-purple-400 bg-purple-200 rounded-lg font-semibold text-xs max-w-min px-2'>MP4</span>
  }

  return (
    <main className='pt-0 px-5 lg:pt-5 md:px-16 lg:px-32a flex gap-3 flex-wrap'>
      {files.map(((file: File, index: number) => (
        <div key={index} className='flex flex-col justify-between gap-1 w-full lg:min-h-max lg:max-w-xl p-8 bg-[#fcfcfc] border-[1px] rounded-xl border-bleak'>
          <h1 className={`${font_unbounded.className} text-2xl flex gap-3 mb-6`}>{file.name}:</h1>
          <div className='flex flex-col gap-2'>
            {badges[(file.file_path.split('.')[1].toLowerCase()) as keyof React.JSX.Element]}
            <Link href={`/materials/${file.file_path}`} className='text-lg text-accent font-semibold flex items-center gap-3' download={true}><LuDownload /> Скачать</Link>
          </div>
        </div>
      )))}
    </main>
  )
}
