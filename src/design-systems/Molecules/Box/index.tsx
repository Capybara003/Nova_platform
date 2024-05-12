import React from 'react'

import { BoxProps } from './interface'

import Typography from 'design-systems/Atoms/Typography'

const Box: React.FC<BoxProps> = ({ children, title, className }) => {
  return (
    <div className={`rounded p-1 text-center ${className}`}>
      <div className="flex flex-col">
        {title && (
          <div className=" mb-2 rounded-b">
            <Typography className="text-center" size="body">
              {title}
            </Typography>
          </div>
        )}
        <div className="flex-grow">{children}</div>
      </div>
    </div>
  )
}

export default Box
