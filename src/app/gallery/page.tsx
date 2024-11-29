import React from 'react'
import path from 'path'
import Slider from './Slider'
import fs from 'fs'

type Group = {
  name: string,
  paths: string[]
}

const getArrayOfImagesIn = (folder: string) => {
  return fs.readdirSync(path.join(process.cwd(), 'public', folder), { recursive: true }).filter(value => value.includes('.'))
}

export default function Gallery() {
  const images: Group[] = []
  let arr = getArrayOfImagesIn('gallery')

  let current_category = ""
  let files: string[] = []

  arr.forEach((filename: string | Buffer, index: number) => {
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
    <>
      <Slider images={images} />
    </>
  )
}
