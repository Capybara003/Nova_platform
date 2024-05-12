import Image from 'next/image'
import React from 'react'
import { GoSmiley } from 'react-icons/go'
import { FiSend } from 'react-icons/fi'

import Typography from 'design-systems/Atoms/Typography'
import InputAtom from 'design-systems/Atoms/Input/InputAtom'
import { IMG } from 'assets/images'

const colorList = ['#F1BB64', '#CB4067', '#FF9567']

const chatData = [
  {
    image: IMG.user1,
    name: 'Alwin Wilson',
    message: 'Lorem Ipsum',
  },
  {
    image: IMG.user2,
    name: 'Elena Smith',
    message: 'Hey there!',
  },
  {
    image: IMG.user3,
    name: 'John Doe',
    message: "How's it going?",
  },
  {
    image: IMG.user2,
    name: 'Elena Smith',
    message: 'What are you up to?',
  },
  {
    image: IMG.user3,
    name: 'John Doe',
    message: 'Just finished work. How about you?',
  },
  {
    image: IMG.user2,
    name: 'Elena Smith',
    message: 'That sounds interesting!',
  },
  {
    image: IMG.user3,
    name: 'John Doe',
    message: 'Any plans for the weekend?',
  },
  {
    image: IMG.user1,
    name: 'Alwin Wilson',
    message: 'Not sure yet. Maybe catch up on some movies.',
  },
  {
    image: IMG.user2,
    name: 'Elena Smith',
    message: 'Sounds like a plan!',
  },
  {
    image: IMG.user1,
    name: 'Alwin Wilson',
    message: 'Hiking sounds refreshing!',
  },
  {
    image: IMG.user2,
    name: 'Elena Smith',
    message: 'Let me know if you find any good trails!',
  },
  {
    image: IMG.user3,
    name: 'John Doe',
    message: 'Will do!',
  },
  {
    image: IMG.user1,
    name: 'Alwin Wilson',
    message: 'By the way, have you tried that new restaurant downtown?',
  },
  {
    image: IMG.user2,
    name: 'Elena Smith',
    message: 'Not yet. Is it any good?',
  },
  {
    image: IMG.user1,
    name: 'Alwin Wilson',
    message: 'We should check it out together sometime.',
  },
  {
    image: IMG.user2,
    name: 'Elena Smith',
    message: 'Definitely!',
  },
]

const NftChatBox: React.FC = () => {
  return (
    <div className="flex max-h-[665px] flex-col gap-4 rounded-[24px] xm:bg-blackCardBg xm:p-6">
      <Typography className="text-left font-Lexend text-subtitle" size="paragraph">
        The Ape Society Chat
      </Typography>

      <div className="flex-1 overflow-x-hidden overflow-y-scroll">
        <ul>
          {chatData.map((item, index) => {
            return (
              <li className="my-2" key={index}>
                <div className="flex gap-2">
                  <Image alt={item.name} className="h-6 w-6" src={item.image} />
                  <div className="text-left font-Inter text-md">
                    <Typography style={{ color: colorList[Math.floor(Math.random() * 3)] }}>
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
        <GoSmiley className="text-[24px] text-[#2592D9]" />
        <InputAtom className="w-full bg-transparent focus:outline-none" />
        <FiSend className="text-[24px] text-[#2592D9]" />
      </div>
    </div>
  )
}

export default NftChatBox
