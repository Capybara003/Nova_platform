'use client'
import { useRouter } from 'next/navigation'

import backgroundImage from '../../../assets/images/B&W-bg.png'

import { CardPhases } from 'design-systems/Atoms/CardPhases'
import {
  AtomBigIcon,
  BotIconsBig,
  ClipBoardCopyIcon,
  DimondGradiantIcons,
  EyeS,
  InternetBigIcons,
  PieIcon,
  RarityIcon,
  RoadmapIcon,
  SemiConductorChip,
  ShieldIcons,
  TwitterIconsBig,
} from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'
import { MintingPhasesData2, ProSubscription } from 'design-systems/data/data'
import { Card } from 'design-systems/Atoms/Card'
import { MintDistribution } from 'design-systems/Molecules/NovaNautMolecules/MintDistribution'
import Button from 'design-systems/Atoms/Button'
import { Roadmap } from 'design-systems/Molecules/NovaNautMolecules/Roadmap'
import { Utility } from 'design-systems/Molecules/NovaPortal/Utility'
import { RarityAndBenefits } from 'design-systems/Molecules/NovaPortal/RarityAndBenefits'

const NovaPhaseTemplate: React.FC = () => {
  const PolicyID = 'a2e719...26d7c5'
  const router = useRouter()
  return (
    <div className="mt-[90px] overflow-x-hidden text-left font-Lexend">
      <div
        className="h-full w-screen bg-no-repeat px-[19px]  pt-[45%] md:!bg-contain md:px-[80px] md:!pt-[13%] lg:px-[140px]"
        style={{ backgroundImage: `url(${backgroundImage.src})` }}
      >
        <div className="rounded-[24px] bg-gradint-dark-pink p-[2px] ">
          <div className="rounded-[24px]  bg-bg25 p-[22px]">
            <div className=" flex flex-col gap-[44px] md:flex-row">
              <div className="flex items-center justify-center">
                <AtomBigIcon />
              </div>
              <div className="flex w-full flex-col gap-[16px]">
                <div className="flex !w-full flex-wrap justify-between gap-[22px] xsm:!w-auto">
                  <div className="flex flex-wrap items-center gap-[27px]">
                    <Typography className="text-h4 font-medium md:!text-h3">NOVA-Portal</Typography>
                    <div className="flex gap-[22px]">
                      <ShieldIcons />
                      <EyeS />
                    </div>
                  </div>
                  <div className="flex items-center justify-end gap-[10px]">
                    <div>
                      <BotIconsBig />
                    </div>
                    <div>
                      <TwitterIconsBig />
                    </div>
                    <div>
                      <InternetBigIcons />
                    </div>
                  </div>
                </div>
                <div className="flex !flex-col justify-between gap-[22px] md:!flex-row">
                  <Typography className="text-gray232_65" size="lg">
                    The NOVA-Nauts are the main collection behind the brand NOVA Solutions. They are designed to full
                    fill your passion for digital art and combine it with even greater utility. The whole ecosystem and
                    all solutions are directly connected to the NOVA-Nauts. mint a NOVA-Naut, and be a part of NOVA
                    Solutions.{' '}
                  </Typography>
                  <div className="flex !w-full !flex-col items-center gap-[6px] text-center xsm:!w-auto xsm:!flex-row  ">
                    <div className="w-full rounded-[6px] bg-black225_05   px-[22px] py-[14px]">Utility</div>
                    <div className="w-full rounded-[6px] bg-black225_05  px-[22px] py-[14px]">Art</div>
                    <div className="w-full rounded-[6px] bg-black225_05  px-[22px] py-[14px]">PFP</div>
                  </div>
                </div>
                <div className="flex flex-wrap justify-between gap-[22px]">
                  <div className="flex flex-wrap gap-[22px]">
                    <Typography className="flex gap-[11px] text-grayDB" size="body">
                      <Typography>Supply</Typography>
                      <Typography>3.000</Typography>
                    </Typography>
                    <Typography className="flex gap-[11px] text-grayDB" size="body">
                      <Typography>Mint Price</Typography>
                      <Typography>390 ₳</Typography>
                    </Typography>
                  </div>
                  <div className="flex cursor-pointer items-end justify-end gap-[10px] font-medium text-secondary-25">
                    <Typography>Policy ID:</Typography>
                    <Typography>{PolicyID}</Typography>
                    <div>
                      <ClipBoardCopyIcon />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[75px] flex flex-col gap-[22px]">
          <Typography className="!font-medium " size="subtitle-25">
            Minting Phases
          </Typography>
          <div className="grid !grid-cols-1 gap-[20px] xsm:!grid-cols-2 md:!grid-cols-3">
            {MintingPhasesData2.map((item, key) => (
              <div className="cursor-pointer" key={key}>
                <CardPhases
                  buttonText={item.button}
                  end={item.end}
                  img={item.img}
                  price={item.price}
                  start={item.start}
                  supply={item.supply}
                  title={item.title}
                  onClick={() => {
                    item.button === 'Start Mint' && router.push('/NOVA-portal/NOVA-portal-id')
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-[120px] flex flex-col gap-[22px]">
          <div className="flex items-center gap-[10px]">
            <div className="h-[80px] w-[80px]">
              <SemiConductorChip />
            </div>
            <Typography className="text-h4 font-medium md:!text-h3">
              Lifetime Pro Subscription for NOVA-Analytics
            </Typography>
          </div>
          <div className="grid !grid-cols-1 gap-[20px] xsm:!grid-cols-2 md:!grid-cols-3">
            {ProSubscription.map((item, key) => (
              <div key={key}>
                <Card
                  className={'min-h-[300px]'}
                  icon={item.icon}
                  label={item.label}
                  statusIcon={item.statusIcon}
                  subtitle={item.subtitle}
                />
              </div>
            ))}
          </div>
          <Button className="max-w-[400px] rounded-[6px] bg-gradient-to-r from-primary to-secondary-25 p-[12px]">
            <Typography className="text-[18px]">More Information</Typography>
          </Button>
        </div>
        <div className="mt-[120px] flex flex-col gap-[22px]">
          <div className="flex items-center gap-[10px]">
            <div>
              <RarityIcon />
            </div>
            <Typography className="text-h4 font-medium md:!text-h3">Rarity and Benefits</Typography>
          </div>
          <div>
            <RarityAndBenefits />
          </div>
        </div>
        <div className="mt-[120px] flex flex-col gap-[22px] ">
          <div className="flex items-center gap-[22px]">
            <div className="h-[80px] w-[80px]">
              <DimondGradiantIcons />
            </div>
            <Typography className="text-h4 font-medium md:!text-h3">More Utility</Typography>
          </div>
          <div>
            <Utility />
          </div>
        </div>
        <div className="mt-[120px] flex flex-col gap-[22px] rounded-[24px] bg-black225_05 p-[22px] xsm:p-[56px]">
          <div className="flex items-center gap-[22px]">
            <div className="h-[80px] w-[80px]">
              <PieIcon />
            </div>
            <Typography className="text-h4 font-medium md:!text-h3">Mint Distribution</Typography>
          </div>
          <div>
            <MintDistribution />
          </div>
        </div>
        <div className="mt-[120px] flex flex-col gap-[22px] rounded-[24px] ">
          <div className="flex items-center gap-[22px]">
            <div className="h-[80px] w-[80px]">
              <RoadmapIcon />
            </div>
            <Typography className="text-h4 font-medium md:!text-h3">Roadmap</Typography>
          </div>
          <div className="mb-[80px] ">
            <Roadmap />
          </div>
        </div>
      </div>
    </div>
  )
}
export default NovaPhaseTemplate
