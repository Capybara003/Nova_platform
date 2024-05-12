import React, { useState } from 'react'
// import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

const RangeBar: React.FC = () => {
  const [value, setValue] = useState<number>(50)

  const handleRangeChange = (event: number) => {
    setValue(event)
  }

  return (
    <div className="w-full">
      {/* <Slider className="!h-2 w-full" max={100} min={0} tooltip={false} value={value} onChange={handleRangeChange} /> */}
      <div className="relative min-w-full py-1">
        <div className="bg-gray-200 relative h-2 rounded-full">
          <input
            className="absolute left-0 top-0 z-10 w-full appearance-none bg-transparent outline-none"
            id="react-range"
            max={100}
            min={0}
            type="range"
            value={value}
            onChange={e => handleRangeChange(+e.target.value)}
          />
          <div className="flex items-center justify-center">
            <div
              className="h-2 w-0 rounded-full bg-[linear-gradient(90.05deg,#2592d9_0.27%,#c517d1_201.63%)]"
              style={{ width: `${value}%` }}
            ></div>
            <div className="bg-white h-2 w-0 rounded-full" style={{ width: `${100 - value}%` }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RangeBar
