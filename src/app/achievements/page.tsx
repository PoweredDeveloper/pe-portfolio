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

const separator: string = '/'

export default function Achievements() {
  const images: Group[] = []
  const arr = getArrayOfImagesIn('achievements')

  let current_category = ""
  let files: string[] = []

  arr.forEach((filename: string | Buffer, index: number) => {
      if (typeof filename != "string") return

      const category = filename.split(separator)[0]
      if (current_category != category || arr.length == index + 1) {
      images.push({
          name: current_category,
          paths: files
      })
      files = []
      current_category = category
      }
      files.push(`${filename.split(separator)[0]}/${filename.split(separator)[1]}`)
  })
  images.shift()

  return (
    <>
      <Slider images={images} />
    </>
  )
}
