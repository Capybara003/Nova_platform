import React, { useEffect, useState } from 'react'

import { ProgressBarProps } from './interface'

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, gradiant }) => {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setWidth(progress)
    }, 200)

    return () => clearTimeout(timeout)
  }, [progress])
  return (
    <div className="mt-2 h-2 w-full overflow-hidden rounded bg-blackCardBg">
      <div
        className={`h-full rounded bg-red ${gradiant && 'bg-gradient-to-r from-primary to-blue '}`}
        style={{ width: `${width}%`, transition: 'width 1.5s ease-in-out' }}
      ></div>
    </div>
  )
}

export default ProgressBar
