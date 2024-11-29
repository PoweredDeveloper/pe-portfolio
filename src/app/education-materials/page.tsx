import React from 'react'
import path from 'path'
import Slider from './Slider'
import fs from 'fs'

type File = {
  name: string,
  file_path: string
}

const getArrayOfImagesIn = (folder: string) => {
  return fs.readdirSync(path.join(process.cwd(), 'public', folder), { recursive: true }).filter(value => value.includes('.'))
}

export default function Achievements() {
  const files: File[] = []
  const arr = getArrayOfImagesIn('materials')

  arr.forEach((filename: string | Buffer) => {
      if (typeof filename != "string") return

      const filename_title = filename.split('.')[0]
      files.push({
        name: filename_title,
        file_path: filename
      })
  })

  return (
    <>
      <Slider files={files} />
    </>
  )
}
