// HoldingDetailsSection.tsx
import React from 'react'
import { TETooltip } from 'tw-elements-react'

import { HoldingDetailsSectionProps } from './interface'

import Typography from 'design-systems/Atoms/Typography'

const HoldingDetailsSection: React.FC<HoldingDetailsSectionProps> = ({ title, value, tooltipTitle, crypto }) => {
  return (
    <div className="flex justify-between">
      <Typography size="body">{title}:</Typography>
      <Typography size="body">
        <TETooltip title={tooltipTitle}>
          {value !== undefined ? (
            <>
              {value.toFixed(3)} {crypto.symbol}
            </>
          ) : (
            '--'
          )}
        </TETooltip>
      </Typography>
    </div>
  )
}

export default HoldingDetailsSection
