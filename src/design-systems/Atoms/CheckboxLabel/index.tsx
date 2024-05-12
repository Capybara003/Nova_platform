/* eslint-disable @typescript-eslint/no-unused-vars */
import { Checkbox } from '../CheckBox'
import Typography from '../Typography'

export const CheckboxLabel = ({ label, onChange, value }: CheckboxLabelProps) => {
  return (
    <div className="flex flex-row items-center gap-[8px]" onChange={onChange}>
      <Checkbox />
      <Typography className="!font-medium" size="caption">
        {label}
      </Typography>
    </div>
  )
}
