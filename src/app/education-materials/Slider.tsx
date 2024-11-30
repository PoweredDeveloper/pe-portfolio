'use client'
import { Dialog, DialogPanel, DialogTitle, Description } from '@headlessui/react'
import React, { useState } from 'react'
import { LuDownload } from "react-icons/lu";
import { ImCross } from "react-icons/im";
import { IoPlayCircle } from "react-icons/io5";
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
  const [isDialogOpen, setDialogOpen] = useState<boolean>(false)
  const [video, setVideo] = useState<File | undefined>(undefined)

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
        <div key={index} className='flex flex-col justify-between gap-1 w-full lg:min-h-max lg:max-w-xl p-8 bg-background border-[1px] rounded-xl border-bleak'>
          <h1 className={`${font_unbounded.className} text-2xl flex gap-3 mb-6`}>{file.name}:</h1>
          <div className='flex flex-col gap-2'>
            {badges[(file.file_path.split('.')[1].toLowerCase()) as keyof React.JSX.Element]}
            <div className='flex items-center justify-between'>
              {file.file_path.split('.')[1].toLowerCase() == 'mp4' ? 
                <span
                  onClick={() => {
                    setDialogOpen(true)
                    setVideo({
                      name: file.name,
                      file_path: file.file_path
                  })}}
                  className='cursor-pointer text-lg text-accent font-semibold flex items-center gap-2'>
                  <IoPlayCircle /> Просмотр
                </span>
                :
                <></>
              }
              <Link href={`/materials/${file.file_path}`} className='text-lg text-accent font-semibold flex items-center gap-3' download={true}><LuDownload /> Скачать</Link>
            </div>  
          </div>
        </div>
      )))}
      { video != undefined ? (
        <Dialog open={isDialogOpen} onClose={() => {
          setDialogOpen(false)
          setVideo(undefined)
        }} className='fixed w-screen h-screen z-50 flex top-0 left-0 justify-center items-center bg-background lg:bg-[#6363635d] bg-blur backdrop-blur-lg'>
          <DialogPanel className='bg-background rounded-2xl w-3xl h-3xl flex flex-col'>
            <DialogTitle className={`${font_unbounded.className} text-2xl text-zinc-800 p-8 flex justify-between items-center`}>
              {video.name}
              <ImCross onClick={() => {
                setDialogOpen(false)
                setVideo(undefined)
              }} className='text-base text-zinc-300 cursor-pointer hover:text-zinc-500 transition-colors'/>
            </DialogTitle>
            <Description>
              <video src={`/materials/${video.file_path}`} className='rounded-xl rounded-t-none' width={720} height={480} controls muted autoPlay ></video>
            </Description>
          </DialogPanel>
        </Dialog>
      ) : (<></>)}
    </main>
  )
}
