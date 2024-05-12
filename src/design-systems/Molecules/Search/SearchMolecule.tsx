// design-systems/Molecules/SearchMolecule.tsx

import { ChangeEvent, useState } from 'react'
import { useDispatch } from 'react-redux'

import { SearchIcons } from 'design-systems/Atoms/Icons'
import InputAtom from 'design-systems/Atoms/Input/InputAtom'
import { setData } from 'lib/redux/slices/globalDataSlice'
import useDebounce from 'hooks/useDebounce'

const SearchMolecule: React.FC<SearchMoleculeProps> = ({ className }) => {
  const [value, setValue] = useState<string>('')
  const dispatch = useDispatch()

  useDebounce(value, debounceValue => dispatch(setData({ search: debounceValue })), 500)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <div className={` ${className} relative flex items-center rounded-[6px] bg-black225_05 p-4`}>
      <SearchIcons />
      <InputAtom
        className="w-full rounded bg-transparent px-2 outline-none"
        placeholder="Search"
        type="text"
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}

export default SearchMolecule
