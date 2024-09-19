import React, { useEffect, useState } from 'react'
import { IoBookmarkOutline, IoBookmark } from 'react-icons/io5'

interface BookMarkButtonProps {
  isActive: boolean
  onClick?: () => void
}
const BookMarkButton: React.FC<BookMarkButtonProps> = ({ isActive, onClick }) => {
  const [bookMarked, setBookMarked] = useState<boolean>(isActive)

  useEffect(() => {
    setBookMarked(isActive)
  }, [isActive])

  const handleClick = () => {
    if (onClick) {
      onClick()
    } else {
      setBookMarked(!bookMarked)
    }
  }

  return (
    <button onClick={handleClick}>
      {bookMarked ? <IoBookmark className="text-lg text-[#00C68A]" /> : <IoBookmarkOutline className="text-lg" />}
    </button>
  )
}

export default BookMarkButton
