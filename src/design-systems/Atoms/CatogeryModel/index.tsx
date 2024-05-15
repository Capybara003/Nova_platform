import React from 'react'

import { CheckboxLabel } from '../CheckboxLabel'
import Typography from '../Typography'

import { MarketCatogery } from 'design-systems/data/data'

export const CatogeryModel = () => {
  return (
    <div className="flex flex-col items-center gap-[16px] !rounded-[10px] bg-blackCardBg p-[22px] font-Lexend">
      <div className=" flex flex-col gap-[16px] pt-[32px]">
        <Typography className="font-medium" size="subtitle">
          Cateogry
        </Typography>
        <Typography className="font-Inter text-black7f" size="md">
          Choose your category to show
        </Typography>
      </div>
      {/* <div className="grid w-full grid-cols-2 gap-[16px] p-6 !pt-0">
        <div className="flex flex-col flex-wrap items-center justify-center  gap-[12px] font-Inter">
          <CheckboxLabel label={'All'} value="" />
          <CheckboxLabel label={'All'} value="" />
          <CheckboxLabel label={'All'} value="" />
          <CheckboxLabel label={'All'} value="" />
          <CheckboxLabel label={'All'} value="" />
          <CheckboxLabel label={'All'} value="" />
          <CheckboxLabel label={'All'} value="" />
          <CheckboxLabel label={'All'} value="" />
        </div>
        <div className="flex flex-col flex-wrap items-center justify-center  gap-[12px] font-Inter">
          <CheckboxLabel label={'All'} value="" />
          <CheckboxLabel label={'All'} value="" />
          <CheckboxLabel label={'All'} value="" />
          <CheckboxLabel label={'All'} value="" />
          <CheckboxLabel label={'All'} value="" />
          <CheckboxLabel label={'All'} value="" />
          <CheckboxLabel label={'All'} value="" />
          <CheckboxLabel label={'All'} value="" />
        </div>
      </div> */}

      <div className="flex w-full flex-col items-center justify-center font-Inter">
        <div className="flex flex-col items-start justify-start gap-2">
          {MarketCatogery.map((item, key) => (
            <React.Fragment key={key}>
              <CheckboxLabel label={item.label} value="" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}
