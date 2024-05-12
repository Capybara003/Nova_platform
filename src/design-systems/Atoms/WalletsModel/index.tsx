/* eslint-disable @typescript-eslint/no-explicit-any */
import Typography from '../Typography'

import { WhaleWatchWallet } from 'design-systems/data/data'
import NavTabsMolecule from 'design-systems/Molecules/NavTabs/NavTabsMolecule'

export const WalletsModel: React.FC<any> = ({ activeTab, handleTabChange, tabs }) => {
  return (
    <div className="rounded-xs bg-blackCardBg p-[22px] font-Lexend">
      <div className="flex h-full  flex-col items-center justify-between gap-[27px] py-[32px]">
        <div className=" flex flex-col items-center justify-center gap-2 px-[17px]">
          <Typography className="font-medium" size="subtitle">
            Wallets
          </Typography>
          <Typography className="font-Inter text-black7f" size="md">
            Choose your Wallets values
          </Typography>
          <div className=" flex justify-center">
            <NavTabsMolecule activeTab={activeTab} tabs={tabs} onTabChange={handleTabChange} />
          </div>
        </div>
        <div className="flex w-full flex-col gap-2 px-[17px] text-black7f">
          <div className="flex items-center gap-4">
            <input
              className="before:shadow-checkbox checked:after:border-white hover:before:shadow-black/60 focus:before:shadow-black/60 checked:focus:before:shadow-checkbox checked:focus:after:border-white relative float-left h-[18px] w-[18px] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-secondary-500 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-transparent before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ms-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ms-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:bg-transparent dark:border-neutral-400 dark:checked:border-primary dark:checked:bg-primary rtl:float-right"
              id="checkboxChecked"
              type="checkbox"
              value=""
            />
            <Typography size={'body'}>All</Typography>
          </div>
          {WhaleWatchWallet.map((item, key) => (
            <div className="flex items-center gap-4" key={key}>
              <input
                className="before:shadow-checkbox checked:after:border-white hover:before:shadow-black/60 focus:before:shadow-black/60 checked:focus:before:shadow-checkbox checked:focus:after:border-white relative float-left h-[18px] w-[18px] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-secondary-500 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-transparent before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ms-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ms-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:bg-transparent dark:border-neutral-400 dark:checked:border-primary dark:checked:bg-primary rtl:float-right"
                id="checkboxChecked"
                type="checkbox"
                value=""
              />
              <div className="flex w-[60px] justify-center p-[10px]">
                <div>{item.icons}</div>
              </div>
              <Typography size={'body'}>{item.label}</Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
