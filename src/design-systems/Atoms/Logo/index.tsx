import Image from 'next/image'

import { IconProps } from './interface'

const IconAtom: React.FC<IconProps> = ({ src, alt = '', width, height, className }) => {
  return (
    <div className={className}>
      <Image alt={alt} height={height} src={src} width={width} />
    </div>
  )
}

export default IconAtom
