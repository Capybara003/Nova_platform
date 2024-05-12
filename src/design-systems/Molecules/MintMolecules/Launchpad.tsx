import { GradintDivDark } from 'design-systems/Atoms/GradintDivDark'
import {
  NovaLogo,
  GalleryIcons,
  TrophyIcon,
  Plus,
  FairDisIcon,
  DatabaseIcon,
  TelescopeBlueIcon,
  EqualIcon,
} from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'

export const Launchpad = () => {
  return (
    <>
      <div className="flex flex-col gap-[22px] rounded-[24px] bg-black225_05 p-[22px] text-left">
        <div className="flex gap-[10px]">
          <div className="flex items-center">
            <NovaLogo />
          </div>
          <Typography className="text-h4 font-medium md:!text-h3">NOVA-Launchpad</Typography>
        </div>
        <Typography className="max-w-[847px] font-Inter text-[20px] text-grayDB">
          Combining the fairest mint features on-chain into one innovative Launchpad for everyone. Mint Native Tokens
          and NFTs in the fairest possible way.{' '}
        </Typography>
      </div>
      <div className="flex flex-col items-center justify-between gap-[22px] rounded-[24px] bg-black225_05 p-[22px] lg:!flex-row">
        <div className="flex flex-col gap-[22px]">
          <div className="flex flex-col gap-[12px]">
            <div className="flex items-center gap-[4px]">
              <div>
                <GalleryIcons />
              </div>
              <Typography size="subtitle-25">NFT</Typography>
            </div>
            <div className="flex flex-col items-center gap-[22px] md:!flex-row">
              <GradintDivDark className="flex h-full min-h-[250px] w-full items-center justify-center !bg-[#1d1b25]">
                <div className="w-[80%]">
                  <div className="flex justify-center">
                    <TrophyIcon />
                  </div>
                  <Typography className="mt-[18px] !font-medium text-grayDB" size="paragraph">
                    First Come First Serve
                  </Typography>
                  <Typography className=" mt-[12px] font-Inter text-[14px] text-grayDB">
                    Compete with others to be among the first to mint before the supply runs out.
                  </Typography>
                </div>
              </GradintDivDark>
              <Plus />
              <GradintDivDark className="flex h-full min-h-[250px] w-full items-center justify-center !bg-[#1d1b25]">
                <div className="w-[80%]">
                  <div className="flex justify-center">
                    <FairDisIcon />
                  </div>
                  <Typography className="mt-[18px] !font-medium text-grayDB" size="paragraph">
                    Fair Distribution
                  </Typography>
                  <Typography className=" mt-[12px] font-Inter text-[14px] text-grayDB">
                    Through our innovative fair distribution mechanism, we distribute the NFTs on the fairest possible
                    way.
                  </Typography>
                </div>
              </GradintDivDark>
            </div>
          </div>
          <div className="flex flex-col gap-[12px]">
            <div className="flex items-center gap-[4px]">
              <div>
                <DatabaseIcon />
              </div>
              <Typography size="subtitle-25">Token</Typography>
            </div>
            <div className="flex flex-col items-center gap-[22px] md:!flex-row">
              <GradintDivDark className="flex h-full min-h-[250px] w-full  items-center justify-center !bg-[#1d1b25]">
                <div className="w-[80%]">
                  <div className="flex justify-center">
                    <FairDisIcon />
                  </div>
                  <Typography className="mt-[18px] !font-medium text-grayDB" size="paragraph">
                    Fair Distribution
                  </Typography>
                  <Typography className=" mt-[12px] font-Inter text-[14px] text-grayDB">
                    The token distribution will be based on a percentage of the order volume if the demand surpasses the
                    available supply.
                  </Typography>
                </div>
              </GradintDivDark>
              <Plus />
              <GradintDivDark className="flex h-full min-h-[250px] w-full items-center justify-center !bg-[#1d1b25]">
                <div className="w-[80%]">
                  <div className="flex justify-center">
                    <TelescopeBlueIcon />
                  </div>
                  <Typography className="mt-[18px] text-[20px] !font-medium text-grayDB" size="paragraph">
                    Price Discovery
                  </Typography>
                  <Typography className=" mt-[12px] line-clamp-4 overflow-hidden text-ellipsis font-Inter text-[14px] text-grayDB">
                    We`ve developed a decentralized method to determine the true market price before launching it on a
                    DEX to prevents attempts by bots to manipulate the token price
                  </Typography>
                </div>
              </GradintDivDark>
            </div>
          </div>
        </div>
        <div>
          <EqualIcon />
        </div>
        <div className="box-edge  rounded-[10px]">
          <GradintDivDark className=" flex min-h-[250px] w-full items-center  justify-center rounded-[7px] !bg-[#1d1b25] bg-bg25">
            <div className="w-[90%]">
              <div className="flex justify-center">
                <NovaLogo />
              </div>
              <Typography className="mt-[18px]  !font-medium text-grayDB" size="paragraph">
                NOVA-Launchpad
              </Typography>
              <Typography className=" mt-[12px] font-Inter text-[14px] text-grayDB">
                Introduce a novel, innovative, and advanced minting method for Tokens and NFTs to offer one of the best
                on-chain minting experiences
              </Typography>
            </div>
          </GradintDivDark>
        </div>
      </div>
    </>
  )
}
