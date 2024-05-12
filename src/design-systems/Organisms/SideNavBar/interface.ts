import { StaticImageData } from 'next/image'

export interface SideNavbarProps {
  alt?: string
  className: string
  imageSources: (string | StaticImageData)[]
  imageWidth: number // width of the image
  imageHeight: number
}
