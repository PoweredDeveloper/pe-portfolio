import React from 'react';
import fs from 'fs'
import GallerySlider from '@/app/achievements/Achievements'

type Group = {
    name: string,
    paths: string[]
  }

const Page = () => {
    const images: Group[] = []

    let arr = fs.readdirSync('src/app/achievements/images', { recursive: true }).filter(value => value.includes('.'))

    let current_category = ""
    let files: string[] = []

    arr.forEach((filename: string | Buffer, index) => {
      if (filename instanceof Buffer) return

      let category = filename.split('\\')[0]
      if (current_category != category || arr.length == index + 1) {
        images.push({
          name: current_category,
          paths: files
        })
        files = []
        current_category = category
      }
      files.push(`${filename.split('\\')[0]}/${filename.split('\\')[1]}`)
    })
    images.shift()

    return (
        <main className='flex-auto px-0 md:px-8 w-full'>
            <GallerySlider images={images} />
        </main>
    );
}

export default Page;
