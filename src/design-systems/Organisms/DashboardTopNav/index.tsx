import { BigDownArrow } from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'
export const DashboardTopNav: React.FC<HeaderProps> = ({ open, setOpen }) => {
  return (
    <div className="mt-[70px] flex h-screen w-full flex-col  bg-blackBg px-[20px] ">
      <div
        className="flex flex-row items-center justify-between gap-2 border-b-2 border-[#2592D926]  py-[24px]"
        onClick={() => setOpen(!open)}
      >
        <Typography className="font-Lexend font-normal tracking-logo" size="subtitle">
          NOVA
        </Typography>
        <BigDownArrow />
      </div>
      <div
        className="flex flex-row items-center justify-between gap-2 border-b-2 border-[#2592D926]  py-[24px]"
        onClick={() => setOpen(!open)}
      >
        <Typography className="font-Lexend font-normal tracking-logo" size="subtitle">
          Solutions
        </Typography>
        <BigDownArrow />
      </div>
      <div
        className="flex flex-row items-center justify-between gap-2 border-b-2 border-[#2592D926]  py-[24px]"
        onClick={() => setOpen(!open)}
      >
        <Typography className="font-Lexend font-normal tracking-logo" size="subtitle">
          Dashbord
        </Typography>
        <BigDownArrow />
      </div>
    </div>
  )
}
