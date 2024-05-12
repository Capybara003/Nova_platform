/* eslint-disable @typescript-eslint/no-explicit-any */
import { StaticImageData } from 'next/image'

export interface OnSelectProps {
  imageSrc: string | StaticImageData
  imageWidth: number
  imageHeight: number
  options?: string[]
  onSelect: (selectedOption: any) => void
  className?: string
  showSortPrefix?: boolean
  showProjectPrefix?: boolean
  DropdownMenuClassName?: string
  innerDivClassName?: string
  optionIMG?: any
}
