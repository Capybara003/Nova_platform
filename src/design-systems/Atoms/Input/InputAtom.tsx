// design-systems/Atoms/InputAtom.tsx
import { InputProps } from './interface'

const InputAtom: React.FC<InputProps> = ({ placeholder, className, type, value, defaultValue, name, ...props }) => {
  return (
    <input
      className={className}
      defaultValue={defaultValue}
      name={name}
      placeholder={placeholder}
      type={type}
      value={value}
      {...props}
    />
  )
}

export default InputAtom
