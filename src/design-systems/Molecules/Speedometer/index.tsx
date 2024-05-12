/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { useState } from 'react'

import './style.css'

interface SpeedometerProps {
  width?: string
  content?: React.ReactNode
  isShowStartEndValue?: boolean
  startVal?: string
  endVal?: string
  percentageValue?: number
  className?: string
  bgColor?: string
  height?: string
}

const Speedometer: React.FC<SpeedometerProps> = ({
  width,
  content,
  isShowStartEndValue = false,
  startVal = '',
  endVal = '',
  percentageValue = 0,
  className,
  height,
  bgColor = 'bg-[#181620]',
}) => {
  const [value] = useState<number>(percentageValue)

  return (
    <div className={`flex h-[inherit] items-center justify-center overflow-hidden ${bgColor}`}>
      <div
        className={`speed-meter relative ${className}`}
        style={{
          height: height || 'auto',
          width: width || 'inherit',
          backgroundColor: 'inherit',
        }}
      >
        <div
          aria-valuemax={100}
          aria-valuemin={0}
          aria-valuenow={value}
          role="progressbar"
          style={{ '--value': value, '--size': width || '200px' } as any}
        ></div>
        <div className="small-circle">
          <div className="scale" style={{ '--i': '-90deg' } as any}></div>
          <div className="scale" style={{ '--i': '-60deg' } as any}></div>
          <div className="scale" style={{ '--i': '-30deg' } as any}></div>
          <div className="scale" style={{ '--i': '0deg' } as any}></div>
          <div className="scale" style={{ '--i': '30deg' } as any}></div>
          <div className="scale" style={{ '--i': '60deg' } as any}></div>
          <div className="scale" style={{ '--i': '90deg' } as any}></div>
        </div>
        <div className="small-circle-hide">
          <div className="scale" style={{ '--i': '-90deg' } as any}></div>
          <div className="scale" style={{ '--i': '-60deg' } as any}></div>
          <div className="scale" style={{ '--i': '-30deg' } as any}></div>
          <div className="scale" style={{ '--i': '0deg' } as any}></div>
          <div className="scale" style={{ '--i': '30deg' } as any}></div>
          <div className="scale" style={{ '--i': '60deg' } as any}></div>
          <div className="scale" style={{ '--i': '90deg' } as any}></div>
        </div>
        <div className="small-circle-half-hide"></div>
        <div className={className?.includes('rotate-90') ? 'content -rotate-90' : 'content'}>{content}</div>
        {isShowStartEndValue ? (
          <>
            <span className={className?.includes('rotate-90') ? 'start-val -rotate-90' : 'start-val'}>{startVal}</span>
            <span className={className?.includes('rotate-90') ? 'end-val -rotate-90' : 'end-val'}>{endVal}</span>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

export default Speedometer
