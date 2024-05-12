export interface NavTabsProps {
  tabs: string[]
  activeTab: number
  onTabChange: (tab: number) => void
  className?: string
  classNameInner?: string
  outerClassName?: string
  onClick?: () => void | undefined
}
