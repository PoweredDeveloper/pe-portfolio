'use client'
import React, { useEffect, useState } from 'react'
import { ImCross } from "react-icons/im";
import { Unbounded } from 'next/font/google'
import Image from 'next/image'
import blank from '@/assets/blank.jpg'

const font_unbounded = Unbounded({ weight: ['800'], subsets: ['cyrillic'] })

type Group = {
    name: string,
    paths: string[]
  }
  
type Props = {
    images: Group[],
}

export default function Slider({ images }: Props) {
  const [image, setImage] = useState<string | undefined>()
  
  function previewImage(image: string) {
    setImage(image)
  }

  useEffect(() => {
    const body = document.body
    if (image != undefined) {
      body.classList.add('overflow-y-hidden')
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else {
      body.classList.remove('overflow-y-hidden')
    }
  }, [image]);

  return (
    <main className='pt-0 px-5 lg:pt-5 md:px-16 lg:px-32'>
      {images.map(((category: Group, index: number) => (
        <div key={index} className='mt-0 lg:mt-10'>
          <h1 className={`${font_unbounded.className} text-2xl flex gap-3`}>
            <span className='text-accent'>{index + 1}.</span>
            <span>{category.name}:</span>
          </h1>
          <div className='flex flex-wrap items-center lg:items-start flex-col lg:flex-row gap-3 my-4'>
            {category.paths.map((path, key) => (
              <Image
                key={key}
                onClick={() => previewImage(`/gallery/${path}`)}
                className='cursor-pointer rounded-md bg-bleak w-full lg:h-[150px] lg:w-fit'
                src={`/gallery/${path}`}
                alt={`${category.name} - photo`}
                width={300}
                height={150}
              />
            ))}
          </div>
        </div>
      )))}
      <div onClick={() => setImage(undefined)} className={`top-0 left-0 bg-[#636363e1] fixed h-screen w-screen ${image == undefined ? 'hidden' : 'flex'} flex-col justify-center items-center overflow-clip`}>
        <ImCross onClick={() => setImage(undefined)} className='cursor-pointer text-3xl text-white absolute top-7 right-7' />
        <Image className='p-5 md:p-16 lg:p-32 w-full lg:h-full lg:w-auto' width={1920} height={1024} src={image == undefined ? blank : image} alt='Photo' />
      </div>
    </main>
  )
}
