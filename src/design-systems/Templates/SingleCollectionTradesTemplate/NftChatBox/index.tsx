/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { FiSend } from 'react-icons/fi'
import { GoSmiley } from 'react-icons/go'
import EmojiPicker from 'emoji-picker-react'

import { NFTChatProps } from './interface'

import InputAtom from 'design-systems/Atoms/Input/InputAtom'
import Typography from 'design-systems/Atoms/Typography'
import { chatData } from 'design-systems/data/data'

// const colorList = ['#F1BB64', '#CB4067', '#FF9567']

const NftChatBox: React.FC<NFTChatProps> = () => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  // const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState<string | null>(null) // State for input value
  const emojiPickerRef = useRef<HTMLDivElement>(null)

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker)
  }

  const handleEmojiClick = (emojiObject: { emoji: string }) => {
    setInputValue(emojiObject.emoji)
  }

  const handleDocumentClick = (event: MouseEvent) => {
    if (emojiPickerRef.current && !emojiPickerRef.current.contains(event.target as Node)) {
      // Clicked outside the emoji picker, close it
      setShowEmojiPicker(false)
    }
  }

  useEffect(() => {
    // Add click event listener when the component mounts
    document.addEventListener('click', handleDocumentClick)

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleDocumentClick)
    }
  }, []) // Empty dependency array means this effect runs once, similar to componentDidMount

  return (
    <div className="relative !col-span-3 flex h-[810px]  flex-col content-between justify-between gap-4 rounded-[24px] bg-blackCardBg p-6 lg:!col-span-1">
      <Typography className="text-left font-Lexend text-subtitle" size="paragraph">
        WeBump Chat
      </Typography>

      <div
        className={`flex h-full overflow-x-hidden overflow-y-scroll before:absolute before:left-0 before:top-[50px] before:h-[40px] before:w-full before:bg-[#181620e6] before:blur-md`}
      >
        <ul>
          {chatData.map((item, index) => {
            return (
              <li className="my-2" key={index}>
                <div className="flex gap-2">
                  <Image alt={item.name} className="h-6 w-6" src={item.image} />
                  <div className="text-left font-Inter text-md">
                    <Typography style={{ color: item.color }}>
                      <Typography className={`line-clamp-2 overflow-hidden text-ellipsis`} size="md">
                        {item.name}
                      </Typography>
                    </Typography>
                    <Typography>{item.message}</Typography>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="flex w-full gap-2 rounded-sm bg-blackCardBg p-3 ">
        <div className="relative" ref={emojiPickerRef}>
          <GoSmiley className="cursor-pointer text-[24px] text-[#2592D9]" onClick={toggleEmojiPicker} />
          {showEmojiPicker && (
            <div className="absolute -bottom-[456px] left-0">
              <EmojiPicker onEmojiClick={handleEmojiClick} />
            </div>
          )}
        </div>
        <InputAtom
          className="w-full bg-transparent focus:outline-none"
          placeholder="Type a message..."
          value={inputValue || ''}
          onChange={e => setInputValue(e.target.value)} // Update input value on change
        />
        <FiSend className="text-[24px] text-[#2592D9]" />
      </div>
    </div>
  )
}

export default NftChatBox
