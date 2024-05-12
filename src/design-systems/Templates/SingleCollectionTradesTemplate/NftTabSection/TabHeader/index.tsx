import React, { useState } from 'react'
import { TbClockCheck } from 'react-icons/tb'
import { IoIosSearch } from 'react-icons/io'

import Button from 'design-systems/Atoms/Button'
import { DownArrow, FilterIcon } from 'design-systems/Atoms/Icons'
import { TopAssets } from 'design-systems/Atoms/TopAssets'
import Typography from 'design-systems/Atoms/Typography'
import NavTabsMolecule from 'design-systems/Molecules/NavTabs/NavTabsMolecule'
import OnSelect from 'design-systems/Molecules/OnSelect'
import InputAtom from 'design-systems/Atoms/Input/InputAtom'

interface NftTabsHeaderProps {
  activeTab: number
  onChangeActiveTab: (active: number) => void
  onShowSetting: (value: boolean) => void
  onChangeTradesTableFilter: (value: string) => void
  onChangeTopWhalesTableFilter: (value: string) => void
}

const NftTabsHeader: React.FC<NftTabsHeaderProps> = ({
  activeTab,
  onChangeActiveTab,
  onChangeTopWhalesTableFilter,
  onChangeTradesTableFilter,
  onShowSetting,
}) => {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState<boolean>(false)

  return (
    <div className="flex flex-col flex-wrap items-center justify-between gap-4 md:flex-row md:gap-0">
      <div className="w-full md:!w-auto">
        <NavTabsMolecule
          activeTab={activeTab}
          className="w-full justify-center whitespace-nowrap text-sm md:text-body xm:text-paragraph"
          tabs={['Trades', 'Analytics', 'Assets', 'Top Whales']}
          onTabChange={number => onChangeActiveTab(number)}
        />
      </div>

      {activeTab === 0 && (
        <div className="flex w-full items-center justify-between gap-2 md:!w-auto md:justify-center">
          <div className="flex items-center justify-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#ffffff1a]">
              <TbClockCheck className="text-subtitle text-green" />
            </div>
            <Typography className="w-max text-subtitle" variant="regular">
              Real Time
            </Typography>
          </div>

          <OnSelect
            DropdownMenuClassName={'!bg-[#1d1b25]'}
            className="!h-[48px] !w-[130px]"
            imageHeight={0}
            imageSrc={''}
            imageWidth={0}
            options={['Listings', 'Sales']}
            onSelect={val => onChangeTradesTableFilter(val.toLowerCase())}
          />
        </div>
      )}

      <div className="flex w-full flex-row flex-wrap gap-3 md:!w-auto">
        {activeTab === 2 && (
          <div className="flex items-center justify-center gap-2 rounded-md bg-blackCardBg p-3">
            <IoIosSearch className="text-lg text-[#ffffffcc]" />
            <InputAtom className="!bg-transparent focus:outline-none" placeholder="Search" />
          </div>
        )}

        {activeTab === 3 && (
          <OnSelect
            className="!h-[48px] w-full md:!w-auto"
            imageHeight={0}
            imageSrc={''}
            imageWidth={0}
            options={['Total', 'Holding', 'Income']}
            onSelect={val => onChangeTopWhalesTableFilter(val.toLowerCase())}
          />
        )}

        <Button
          className="flex w-full flex-row items-center justify-center gap-2 rounded-[6px] bg-blackCardBg p-2 md:!w-auto"
          onClick={() => onShowSetting(true)}
        >
          <FilterIcon />
          <DownArrow />{' '}
        </Button>
        {activeTab === 0 && (
          <TopAssets
            checked={isCheckboxChecked}
            label={'My TX'}
            onChange={() => setIsCheckboxChecked(!isCheckboxChecked)}
          />
        )}

        {activeTab === 2 && (
          <TopAssets
            checked={isCheckboxChecked}
            label={'My Assets'}
            onChange={() => setIsCheckboxChecked(!isCheckboxChecked)}
          />
        )}
      </div>
    </div>
  )
}

export default NftTabsHeader
