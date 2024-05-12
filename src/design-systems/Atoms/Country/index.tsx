import { InfoIcon } from '../Icons'
import { SelectDropdown } from '../SelectDropdown'
import Typography from '../Typography'

export const Country = () => {
  return (
    <div className="rounded-[10px] bg-black225_05 p-[22px] font-Lexend">
      <div className="flex h-full flex-col justify-between gap-[8px] py-[32px]">
        <div className="flex flex-col items-center justify-center gap-[16px] px-[17px]">
          <Typography className="font-medium" size="subtitle">
            Country
          </Typography>
          <Typography className="text-black7f" size="md">
            Choose your calculation basis
          </Typography>
          <div className="max-w-[167px]">
            <SelectDropdown className="w-full" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-[16px] px-[17px]">
          <div className="flex items-center">
            <Typography className="font-medium" size="subtitle">
              Cost Basis Method
            </Typography>
            <InfoIcon />
          </div>
          <Typography className="text-black7f" size="md">
            Choose your Cost Basis Tracking Method
          </Typography>
          <div className="max-w-[167px]">
            <SelectDropdown className="w-full" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-[16px] px-[17px]">
          <div className="flex items-center">
            <Typography className="font-medium" size="subtitle">
              Cost Basis Tracking
            </Typography>
            <InfoIcon />
          </div>
          <Typography className="text-black7f" size="md">
            Choose your Cost Basis Tracking Method
          </Typography>
          <div className="max-w-[167px]">
            <SelectDropdown className="w-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
