import { SwiperSliderGallery } from '../SwiperSliderMolecules/SwiperSliderGallery'

import Button from 'design-systems/Atoms/Button'
import { GradintDivDark } from 'design-systems/Atoms/GradintDivDark'
import { LinkIcon, UploadIconSmall } from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'
import { TourList, TraitsData, YourNFTdata } from 'design-systems/data/data'

export const YourNFT = () => {
  return (
    <div className="grid grid-cols-1 gap-[22px] lg:grid-cols-2 ">
      <div className="mb-[22px] flex flex-col gap-[22px] rounded-[24px] bg-black225_05 p-[22px]">
        <Typography size="subtitle">Your NFT</Typography>
        <div className="h-full w-full">
          <SwiperSliderGallery data={TourList} />
        </div>
        <Button className=" rounded-[6px] bg-gradient-pink p-[2px]">
          <div className=" flex h-[98%] w-full flex-row items-center justify-center gap-2 rounded-[6px] bg-gradient-pink px-[30px] py-[12px] font-Lexend">
            <Typography size="lg">Share</Typography>
            <UploadIconSmall />
          </div>
        </Button>
      </div>
      <div className="flex flex-col gap-[22px]">
        <div className="flex flex-col gap-[22px] rounded-[24px] bg-black225_05 p-[22px]">
          <Typography className="text-[25px] font-medium">Traits</Typography>
          <div className="grid !grid-cols-1 gap-[20px] xsm:!grid-cols-3">
            {TraitsData.map((item, key) => (
              <GradintDivDark
                className="flex flex-col justify-between gap-[12px] !rounded-[4px] !p-[12px] text-[16px] font-medium text-grayDB "
                classNameOuterDiv="w-full"
                key={key}
              >
                <Typography>{item.label}</Typography>
                <Typography className="flex flex-wrap justify-between gap-[22px]">
                  <Typography>{item.subtitle}</Typography>
                  <Typography>{item.persent}</Typography>
                </Typography>
              </GradintDivDark>
            ))}
          </div>
        </div>
        <div className="mb-[22px] flex flex-col gap-[16px] rounded-[24px] bg-black225_05 p-4">
          <Typography className="text-[25px] font-medium">Your Transactions</Typography>
          <div className="max-h-[223px] overflow-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-[#DBDBDB]">Quantity</th>
                  <th className="text-[#DBDBDB]">ADA</th>
                  <th className="text-[#DBDBDB]">Date</th>
                  <th className="text-[#DBDBDB]">Block</th>
                  <th className="text-[#DBDBDB]">Tx ID</th>
                </tr>
              </thead>
              {YourNFTdata.map((item, key) => (
                <tr key={key}>
                  <td className="pt-[15px]">{item.quantity}</td>
                  <td className="pt-[15px]">{item.aba}</td>
                  <td className="pt-[15px]">{item.date}</td>
                  <td className="pt-[15px]">{item.block}</td>
                  <td className="pt-[15px]">
                    <div className="flex justify-center">
                      <div className="flex justify-center rounded-[8px] bg-black225_05 p-[4px]">
                        <LinkIcon />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
