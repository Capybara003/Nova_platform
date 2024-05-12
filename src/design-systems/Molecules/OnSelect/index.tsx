/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { TEDropdown, TEDropdownItem, TEDropdownMenu, TEDropdownToggle, TERipple } from 'tw-elements-react'

import { OnSelectProps } from './interface'

import IconAtom from 'design-systems/Atoms/Logo'
import Typography from 'design-systems/Atoms/Typography'
import { useDataSelector } from 'lib/redux/store'

const OnSelect: React.FC<OnSelectProps> = ({
  imageWidth,
  imageHeight,
  options,
  onSelect,
  className,
  DropdownMenuClassName,
  optionIMG,
}) => {
  const { crypto } = useDataSelector('toggle')
  const [selectedValue, setSelectedValue] = useState({
    label: crypto?.label,
    img: crypto?.img,
    value: crypto?.value,
    symbol: crypto?.symbol,
  })
  const [value, setValue] = useState('')

  return (
    <div className={`!flex h-full w-full !cursor-pointer !items-center !font-Lexend ${className} `}>
      <TEDropdown className="!flex !h-full w-full !flex-col !justify-center !border !border-none ">
        <TERipple className="!flex !h-full !w-full !items-center !justify-center !gap-1" rippleColor="dark">
          <TEDropdownToggle
            className="!flex !h-full w-full !items-center !justify-center !gap-2 !rounded-xs !bg-blackCardBg !p-[12px]  !text-lg"
            tag="a"
          >
            {/* {imageSrc && <IconAtom className="" height={imageHeight} src={imageSrc} width={imageWidth} />} */}
            {optionIMG ? (
              <>
                <div className={`h-[${imageHeight}px] w-[${imageWidth}px] flex items-center`}>
                  <IconAtom
                    className={`!h-[${imageHeight}px] !w-[${imageWidth}px]`}
                    height={imageHeight}
                    src={selectedValue.img || optionIMG[0].img}
                    width={imageWidth}
                  />
                </div>
                <Typography>{selectedValue.label || optionIMG[0].label}</Typography>
                <div className="h-[16px] w-[16px]">
                  <MdKeyboardArrowDown />
                </div>
              </>
            ) : (
              <>
                {value || (options && options[0])}{' '}
                <div className="h-[16px] w-[16px]">
                  <MdKeyboardArrowDown />
                </div>
              </>
            )}
          </TEDropdownToggle>
        </TERipple>

        <TEDropdownMenu
          className={`${DropdownMenuClassName} !top-[-4px] !m-0 !flex !w-full !flex-col  !rounded-[6px] !rounded-t-none !bg-[#181620] `}
        >
          {optionIMG ? (
            <>
              <div className="!h-[1px] !w-full !bg-bg25"></div>
              <div className={`mt-[6px] !flex !max-h-[200px] !flex-col !gap-[7px] !overflow-auto !p-1`}>
                {optionIMG &&
                  optionIMG.map((option: any, index: number) => (
                    <TEDropdownItem
                      className="!pointer-events-auto flex !w-full !cursor-pointer items-center justify-start !gap-2 !whitespace-nowrap rounded-[6px]  !bg-transparent !p-[8px] !text-left !text-[18px] !font-normal !text-neutral-700 hover:!bg-gradint-dark-pink focus:!bg-gradint-dark-pink focus:!text-neutral-800 focus:!outline-none active:!bg-neutral-100 active:!text-neutral-800 active:!no-underline "
                      key={index}
                      onClick={() => {
                        onSelect({ label: option.label, img: option.img, value: option.value, symbol: option.symbol })
                        setSelectedValue({
                          label: option.label,
                          img: option.img,
                          value: option.value,
                          symbol: option.symbol,
                        })
                      }}
                    >
                      <IconAtom className="" height={imageHeight} src={option?.img} width={imageWidth} />
                      <div className={``} key={index}>
                        {option.label}
                      </div>
                    </TEDropdownItem>
                  ))}
              </div>
            </>
          ) : (
            <>
              <div className="!h-[1px] !w-full !bg-bg25"></div>
              <div className={`mt-[6px] !flex !max-h-[300px] !flex-col !gap-[7px] !overflow-auto !p-1`}>
                {options &&
                  options.map((option, index) => (
                    <TEDropdownItem
                      className={`!pointer-events-auto !block !w-full !cursor-pointer  !whitespace-nowrap rounded-[6px] !bg-transparent !p-[8px] !text-left !text-[18px] !font-normal !text-neutral-700 hover:!bg-gradint-dark-pink focus:!bg-gradint-dark-pink focus:!text-neutral-800 focus:!outline-none active:!bg-neutral-100 active:!text-neutral-800 active:!no-underline `}
                      key={index}
                      onClick={() => {
                        onSelect(option)
                        setValue(option)
                      }}
                    >
                      {option}
                    </TEDropdownItem>
                  ))}
              </div>
            </>
          )}
        </TEDropdownMenu>
      </TEDropdown>
    </div>
  )
}

export default OnSelect
