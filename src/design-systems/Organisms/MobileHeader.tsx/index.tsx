import { usePathname } from 'next/navigation'

import { CrossIcon, MenuIcon, NovaLogo } from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'

const MobileHeader: React.FC<HeaderProps> = ({ open, setOpen }) => {
  const label = localStorage.getItem('label')
  const router = usePathname()
  return (
    <div className="fixed z-10 flex h-[70px] w-full items-center justify-between gap-x-2 border-b-2  border-[#2592D926]  bg-blackBg p-[19px]">
      <NovaLogo className="aspect-square" />
      <Typography className="font-Lexend" size="paragraph">
        {router === '/market-analitics' ? 'Market' : router === '/' ? 'Dashboard' : label}
      </Typography>
      {open ? (
        <div onClick={() => setOpen(!open)}>
          <CrossIcon />
        </div>
      ) : (
        <div onClick={() => setOpen(!open)}>
          <MenuIcon />
        </div>
      )}
    </div>
  )
}

export default MobileHeader
