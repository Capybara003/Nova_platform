import { CheckboxProps } from './interface'

export const Checkbox = ({
  className,
  checked,
  onChange = () => {
    return
  },
  defaultChecked,
  value,
  ...props
}: CheckboxProps) => (
  <input
    checked={checked}
    className={` ${className} relative float-left h-[18px] w-[18px] appearance-none rounded-[2px] border-[2px] !border-[#7F8489] checked:!border-skyBlue checked:!bg-skyBlue checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 hover:cursor-pointer disabled:!cursor-not-allowed disabled:bg-gray232_65`}
    defaultChecked={defaultChecked}
    type="checkbox"
    value={value}
    onChange={onChange}
    {...props}
  />
)
