import type { PropsWithChildren } from 'react'

export interface LayoutProps extends PropsWithChildren {
  className?: string
}

const Layout: React.FC<LayoutProps> = ({ className = '', children }) => {
  return <div className={`h-full w-full ${className}`}>{children}</div>
}

export default Layout
