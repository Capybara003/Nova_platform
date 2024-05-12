import { TypographyProps } from './interface'
import { getFontFamily, getFontSize } from './utils'

import { TableSkeletan } from 'design-systems/Molecules/Skeletan/TableSkeletan'

/**
 * @description Typography component
 *
 * h1: 64px
 * h2: 48px
 * h3: 38px
 * h4: 28px
 * subtitle: 24px
 * subtitle-25:25px;
 * paragraph: 20px
 * body: 16px
 * caption: 12px
 * small: 10px
 * lg:18px
 */
const Typography: React.FC<TypographyProps> = ({
  variant,
  size,
  className = '',
  children,
  tabIndex,
  onClick,
  style,
  isLoading = false,
}) => {
  const classNames = [variant && getFontFamily(variant), size && getFontSize(size), className].join(' ')
  return (
    <div className={classNames} style={style} tabIndex={tabIndex} onClick={onClick}>
      {isLoading ? <TableSkeletan limit={1} /> : children}
    </div>
  )
}

export default Typography
