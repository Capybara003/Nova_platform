/* eslint-disable @typescript-eslint/no-explicit-any */
import { StaticImageData } from 'next/image'

export interface IconProps {
  src: string | StaticImageData
  alt?: string
  width: number // width of the image
  height: number // height of the image
  className?: string
}
