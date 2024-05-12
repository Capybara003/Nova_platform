import Button from 'design-systems/Atoms/Button'
import { GradintDivDark } from 'design-systems/Atoms/GradintDivDark'
import { BlueMintIcons, EqualIcon, LayeringIcons, MetaIcons, PackageIcons, Plus } from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'

interface activeTabProps {
  activeTab: number
}

export const CreateNFTcollectionTab = ({ activeTab }: activeTabProps) => {
  return (
    <div className="flex flex-wrap items-center !justify-center gap-[12px] text-center md:!justify-between ">
      <GradintDivDark
        className="flex h-full max-w-full items-center !bg-[#1d1b25]"
        classNameOuterDiv="md:!w-[300px] w-full"
        isWidthRemove
      >
        <div className="flex h-full min-h-[344px] w-full flex-col items-center justify-between">
          <BlueMintIcons />
          <Typography className="mt-[22px] !font-medium" size="paragraph">
            Own Mint Page
          </Typography>
          <Typography className="mt-[38px] text-[14px] ">
            {activeTab === 0
              ? 'For 1% of the mint income you will be able to mint your NFT collection with us'
              : 'For 0,5% of the mint income you will be able to mint your NFT collection with us'}
          </Typography>
          <Button className="mt-[49px] w-full rounded-[6px] bg-gradient-to-r from-primary to-secondary-25 p-[12px] text-grayDB">
            APPLY
          </Button>
        </div>
      </GradintDivDark>
      <Plus />
      <GradintDivDark
        className="flex h-full max-w-full items-center !bg-[#1d1b25]"
        classNameOuterDiv="md:!w-[300px] w-full"
        isWidthRemove
      >
        <div className="flex h-full min-h-[344px] w-full flex-col items-center justify-between">
          <LayeringIcons />
          <Typography className="mt-[22px] !font-medium" size="paragraph">
            Layering
          </Typography>
          <Typography className="mt-[38px] text-[14px]">
            {activeTab === 0
              ? 'For 0,25% of the mint income we will layer your NFT collection'
              : 'For 0,5% of the mint incomewe will create the metadatafor your NFT collection '}{' '}
          </Typography>
          <Button className="mt-[49px] w-full rounded-[6px] bg-gradient-to-r from-primary to-secondary-25 p-[12px] text-grayDB">
            APPLY
          </Button>
        </div>
      </GradintDivDark>
      <Plus />
      <GradintDivDark
        className="flex h-full max-w-full items-center !bg-[#1d1b25]"
        classNameOuterDiv="md:!w-[300px] w-full"
        isWidthRemove
      >
        <div className="flex min-h-[344px] w-full flex-col items-center justify-between">
          <MetaIcons />
          <Typography className="mt-[22px] font-medium" size="paragraph">
            Metadata
          </Typography>
          <Typography className="mt-[38px] text-[14px]">
            {activeTab === 0
              ? ' For 0,25% of the mint income we will create the metadata for your NFT collection'
              : 'For 0,5% of the mint income your token can discover a fair price'}
          </Typography>
          <Button className="mt-[49px] w-full rounded-[6px] bg-gradient-to-r from-primary to-secondary-25 p-[12px] text-grayDB">
            APPLY
          </Button>
        </div>
      </GradintDivDark>
      <EqualIcon />
      <GradintDivDark
        className="flex h-full max-w-full items-center !bg-[#1d1b25]"
        classNameOuterDiv="md:!w-[300px] w-full"
        isWidthRemove
      >
        <div className="flex min-h-[344px] w-full flex-col items-center justify-between">
          <PackageIcons />
          <Typography className="mt-[22px] font-medium" size="paragraph">
            All in one package
          </Typography>
          <div className="mt-[22px] flex flex-col gap-[22px] text-[14px]">
            <Typography>
              {activeTab === 0 ? 'Mint page Metadata and Layering' : 'Mint page Metadata and Discovery'}{' '}
            </Typography>
            <Typography>33% discount </Typography>
            <Typography>Only 1% of the total mint income</Typography>
          </div>
          <Button className="mt-[49px] w-full rounded-[6px] bg-gradient-to-r from-primary to-secondary-25 p-[12px] text-grayDB">
            APPLY
          </Button>
        </div>
      </GradintDivDark>
    </div>
  )
}
