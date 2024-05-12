'use client'

import { NavTabsProps } from './interface'

import Button from 'design-systems/Atoms/Button'
import Typography from 'design-systems/Atoms/Typography'

const NavTabsMolecule: React.FC<NavTabsProps> = ({
  tabs,
  activeTab,
  onTabChange,
  className,
  classNameInner,
  onClick,
  outerClassName,
}) => {
  // const [activeTab, setActiveTab] = useState<number | null>(null)
  const handleTabClick = (tab: number) => {
    onTabChange(tab)
  }

  return (
    <div
      className={`flex h-full !w-full overflow-auto !rounded !rounded-br-[10px] !rounded-tl-[10px] !bg-[#181620]  bg-gradint-dark-pink p-[2px] font-Lexend  text-[18px] xsm:flex-nowrap md:!w-auto md:overflow-x-auto ${outerClassName}`}
    >
      <div
        className={` ${className} flex w-full flex-wrap !rounded !rounded-br-[10px] !rounded-tl-[10px] !bg-[#181620] md:w-auto`}
      >
        {tabs?.map((tab, index) => (
          <div
            className={`${
              index === activeTab &&
              '!rounded !rounded-br-[10px] !rounded-tl-[10px] !bg-button-gradient transition-transform delay-200 ease-in-out'
            } flex-1 p-[2px]`}
            key={index}
            onClick={onClick}
          >
            <Button
              className={`${
                index === activeTab
                  ? '!rounded !rounded-br-[10px] !rounded-tl-[10px] !bg-gradiant-active-pink'
                  : `hover:bg-gray-200 hover:text-gray-600 ${classNameInner}`
              } flex h-full w-full items-center justify-center !rounded !rounded-br-[10px] !rounded-tl-[10px] !bg-[#181620] px-[20px] py-[10px] transition-transform delay-200 ease-in-out focus-visible:outline-none`}
              key={tab}
              onClick={() => {
                handleTabClick(index)
              }}
            >
              <Typography className="w-full">{tab}</Typography>
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NavTabsMolecule
