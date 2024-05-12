import { DiscordIcon, XIcon } from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'

const Footer: React.FC = () => {
  return (
    <>
      <div className="relative z-30 h-[2px] w-full bg-gradient-to-r from-[#C517D126] to-[#2592D926]"></div>
      <div className="relative z-30">
        <div className=" flex !flex-wrap-reverse items-center !justify-center gap-3 px-[70px] py-[22px] text-center xsm:!justify-between">
          <div className="flex text-center">
            <Typography className="" size="body">
              © 2023 NOVA P2 CodeFactory Ltd.
            </Typography>
          </div>
          <div className="flex gap-6">
            <DiscordIcon className="h-6 w-6" />
            <XIcon height={22} width={23} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
