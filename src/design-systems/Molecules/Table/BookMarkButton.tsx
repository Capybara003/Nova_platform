import React, { useState } from 'react'
import { IoBookmarkOutline, IoBookmark } from 'react-icons/io5'

interface BookMarkButtonProps {
  isActive: boolean
}
const BookMarkButton: React.FC<BookMarkButtonProps> = ({ isActive }) => {
  const [bookMarked, setBookMarked] = useState<boolean>(isActive)

  return (
    <button onClick={() => setBookMarked(!bookMarked)}>
      {bookMarked ? <IoBookmark className="text-lg text-[#00C68A]" /> : <IoBookmarkOutline className="text-lg" />}
    </button>
  )
}

export default BookMarkButton
