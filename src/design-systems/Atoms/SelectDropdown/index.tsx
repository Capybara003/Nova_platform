interface selectProps {
  className?: string
}
export const SelectDropdown: React.FC<selectProps> = ({ className }) => {
  return (
    <select className={`${className} rounded-[6px] bg-black225_05 p-3`} id="cars" name="cars">
      <option className="text-blackBg" value="volvo">
        Volvo
      </option>
      <option className="text-blackBg" value="saab">
        Saab
      </option>
      <option className="text-blackBg" value="opel">
        Opel
      </option>
      <option className="text-blackBg" value="audi">
        Audi
      </option>
    </select>
  )
}
