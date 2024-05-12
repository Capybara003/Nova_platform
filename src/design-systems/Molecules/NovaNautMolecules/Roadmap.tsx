import Image from 'next/image'

import { IMG } from 'assets/images'
import { CardCheck } from 'design-systems/Atoms/CardCheck'
import {
  BotGradiantIcons,
  BulbSmallIcon,
  GamingSmallIcons,
  HammerBigIcon,
  HelmatIcon,
  MintingIcons,
  MobileIcons,
  NovaLogo,
  PaperIcon,
  Portal,
  ProfitShareIcon,
  SemiConductorChipSmall,
  SpaceShipIcon,
  StakePoolIcon,
} from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'
import {
  FoundingData,
  LaunchData,
  NOVAStakingPlatform,
  NOVAnaut,
  NOVApaper,
  NOVAportal,
  PandingData,
  ProfitShareData,
  Solutions,
  StakePool,
  Token,
} from 'design-systems/data/data'

export const Roadmap = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 justify-between xsm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="flex !flex-col xsm:!flex-row">
          <div className="w-full">
            <CardCheck
              className="w-fit"
              data={FoundingData}
              icon={<NovaLogo />}
              subtitle="Q3 (22) - Q3 (23)"
              title="Founding"
            />
          </div>

          <div className="flex w-[20%] items-center justify-self-center ">
            <div className=" border-gray-500 my-4 w-full border-t-[4px] border-dashed border-[#2592D9]"></div>
          </div>
        </div>
        <div className="flex !flex-col xsm:!flex-row">
          <div className="w-full">
            <CardCheck
              classNameOuterDiv="w-full"
              data={LaunchData}
              icon={<SpaceShipIcon />}
              subtitle="Q3"
              title="Launch"
            />
          </div>

          <div className="flex w-[20%] items-center ">
            <div className=" border-gray-500 my-4 w-full border-t-[4px] border-dashed border-[#2592D9]"></div>
          </div>
        </div>
        <div className="flex !flex-col xsm:!flex-row">
          <div className="w-full">
            <CardCheck
              classNameOuterDiv="w-full"
              data={NOVApaper}
              icon={<PaperIcon />}
              subtitle="Q3"
              title="NOVA-Paper"
            />
          </div>

          <div className=" flex w-[20%] items-center ">
            <div className=" border-gray-500 my-4 w-full border-t-[4px] border-dashed border-[#2592D9]"></div>
          </div>
        </div>
        <div className="w-full">
          <CardCheck classNameOuterDiv="w-full" data={NOVAportal} icon={<Portal />} subtitle="Q3" title="NOVA-Portal" />
        </div>
      </div>
      <div className="grid grid-cols-4">
        <div></div>
        <div></div>
        <div></div>
        <div className=" mr-[67px] flex h-full w-[8%] rotate-90 items-center justify-center justify-self-center ">
          <div className=" border-gray-500 my-4 w-full border-t-[4px] border-dashed border-[#2592D9]"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 justify-between xsm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="flex !flex-col xsm:!flex-row">
          <div className="w-full">
            <CardCheck classNameOuterDiv="w-full" data={Token} icon={<NovaLogo />} subtitle="Q3" title="$NOVA Token" />
          </div>

          <div className=" flex w-[20%] items-center ">
            <div className=" border-gray-500 my-4 w-full border-t-[4px] border-dashed border-[#2592D9]"></div>
          </div>
        </div>
        <div className="flex !flex-col xsm:!flex-row">
          <div className="w-full">
            <CardCheck
              classNameOuterDiv="w-full"
              data={NOVAnaut}
              icon={<HelmatIcon />}
              subtitle="Q3"
              title="NOVA-Naut"
            />
          </div>

          <div className="flex w-[20%] items-center ">
            <div className=" border-gray-500 my-4 w-full border-t-[4px] border-dashed border-[#2592D9]"></div>
          </div>
        </div>
        <div className="flex !flex-col xsm:!flex-row">
          <div className="w-full">
            <CardCheck
              classNameOuterDiv="w-full"
              data={Solutions}
              icon={<SemiConductorChipSmall />}
              subtitle="Q3"
              title="Solutions"
            />
          </div>

          <div className=" flex w-[20%] items-center ">
            <div className=" border-gray-500 my-4 w-full border-t-[4px] border-dashed border-[#2592D9]"></div>
          </div>
        </div>
        <div className="w-full">
          <CardCheck
            classNameOuterDiv="w-full"
            data={StakePool}
            icon={<StakePoolIcon />}
            subtitle="Q3"
            title="Stake Pool"
          />
        </div>
      </div>
      <div className="grid grid-cols-4">
        <div className=" mr-[67px] flex h-full w-[8%] rotate-90 items-center justify-center justify-self-center ">
          <div className=" border-gray-500 my-4 w-full border-t-[4px] border-dashed !border-primary"></div>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="grid grid-cols-1 justify-between xsm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="flex !flex-col xsm:!flex-row">
          <div className="w-full">
            <CardCheck
              classNameOuterDiv="w-full"
              data={ProfitShareData}
              icon={<ProfitShareIcon />}
              subtitle="Q1(24)"
              title="Profit-Share"
            />
          </div>

          <div className=" flex w-[20%] items-center ">
            <div className=" border-gray-500 my-4 w-full border-t-[4px] border-dashed !border-primary"></div>
          </div>
        </div>
        <div className="flex !flex-col xsm:!flex-row">
          <div className="w-full">
            <CardCheck
              classNameOuterDiv="w-full"
              data={NOVAStakingPlatform}
              icon={<HammerBigIcon />}
              subtitle="Q3"
              title="NOVA-Staking Platform"
            />
          </div>

          <div className="flex w-[20%] items-center ">
            <div className=" border-gray-500 my-4 w-full border-t-[4px] border-dashed !border-primary"></div>
          </div>
        </div>
        <div className="flex !flex-col xsm:!flex-row">
          <div className="relative h-full w-full items-center ">
            <div className="flex h-full w-full items-center justify-center ">
              <Image alt={'IMG'} className="flex min-h-[319px] items-center" src={IMG.BlackHole} />
            </div>
            <Typography className="absolute bottom-[1px] flex w-full justify-center text-[20px]">
              <Typography>Phase 2</Typography>
            </Typography>
          </div>

          <div className=" flex w-[20%] items-center">
            <div className=" border-gray-500 my-4 w-full border-t-[4px] border-dashed !border-primary"></div>
          </div>
        </div>
        <div className="w-full">
          <CardCheck
            classNameOuterDiv="w-full"
            data={PandingData}
            icon={<BulbSmallIcon />}
            subtitle="QX - QY"
            title="New Features and Improvements"
          />
        </div>
      </div>
      <div className="grid grid-cols-4">
        <div></div>
        <div></div>
        <div></div>
        <div className=" mr-[67px] flex h-full w-[8%] rotate-90 items-center justify-center justify-self-center ">
          <div className=" border-gray-500 my-4 w-full border-t-[4px] border-dashed !border-primary"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 justify-between xsm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="flex !flex-col xsm:!flex-row">
          <div className="w-full">
            <CardCheck
              classNameOuterDiv="w-full"
              data={PandingData}
              icon={<GamingSmallIcons />}
              subtitle="QX - QY"
              title="Gamification"
            />
          </div>

          <div className=" flex w-[20%] items-center ">
            <div className=" border-gray-500 my-4 w-full border-t-[4px] border-dashed !border-primary"></div>
          </div>
        </div>
        <div className="flex !flex-col xsm:!flex-row">
          <div className="w-full">
            <CardCheck
              classNameOuterDiv="w-full"
              data={PandingData}
              icon={<MobileIcons />}
              subtitle="QX - QY"
              title="Mobile App"
            />
          </div>

          <div className="flex w-[20%] items-center ">
            <div className=" border-gray-500 my-4 w-full border-t-[4px] border-dashed !border-primary"></div>
          </div>
        </div>
        <div className="flex !flex-col xsm:!flex-row">
          <div className="w-full">
            <CardCheck
              classNameOuterDiv="w-full"
              data={PandingData}
              icon={<BotGradiantIcons />}
              subtitle="QX - QY"
              title="NOVA-Bot"
            />
          </div>

          <div className="flex w-[20%] items-center ">
            <div className=" border-gray-500 my-4 w-full border-t-[4px] border-dashed !border-primary"></div>
          </div>
        </div>
        <div className="w-full">
          <CardCheck
            classNameOuterDiv="w-full"
            data={PandingData}
            icon={<MintingIcons />}
            subtitle="QX - QY"
            title="NOVA Solutions"
          />
        </div>
      </div>
    </div>
  )
}
