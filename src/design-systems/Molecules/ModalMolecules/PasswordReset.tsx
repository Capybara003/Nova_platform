/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'
import { toast } from 'react-toastify'

import Button from 'design-systems/Atoms/Button'
import InputAtom from 'design-systems/Atoms/Input/InputAtom'
import { Model } from 'design-systems/Atoms/Model'
import Typography from 'design-systems/Atoms/Typography'
import { useInfo } from 'hooks/apis/useInfo'

const PasswordReset: React.FC<any> = ({ setShow, showModal, userDetails }) => {
  const { password } = useInfo()
  const [emailData, setEmailData] = useState({
    email: userDetails?.email,
    password: '',
    oldPassword: '',
  })
  const onSubmit = async () => {
    try {
      const result = await password(emailData)
      // Handle success
      if (result.success) {
        toast.success(result.message, {
          position: toast.POSITION.TOP_RIGHT,
        })
        setShow(false)
      }
    } catch (error) {
      toast.error('Something went wrong', {
        position: toast.POSITION.TOP_RIGHT,
      })
    }
  }
  return (
    // Your Index modal content goes here
    <Model className={''} isShowIcon={false} setShow={setShow} showModal={showModal}>
      <div className=" w-full md:!min-w-[800px]">
        <div className="gap flex flex-col items-center justify-center gap-4">
          <Typography className="mt-4 px-[50px]" size="h3">
            Reset Password
          </Typography>
          <div className="mt-8 flex w-full flex-col gap-4 ">
            <InputAtom
              className="rounded-xs border-2 border-[#C517D1] bg-transparent p-2 px-2"
              placeholder="Old Password"
              type="text"
              onChange={(e: any) => setEmailData({ ...emailData, oldPassword: e.target.value })}
            />
            <InputAtom
              className="rounded-xs border-2 border-[#C517D1] bg-transparent p-2 px-2"
              placeholder="New Password"
              type="text"
              onChange={(e: any) => setEmailData({ ...emailData, password: e.target.value })}
            />
          </div>
          <Button
            className=" flex  flex-row items-center justify-center gap-2 rounded-[6px] bg-gradient-pink px-[30px] py-[12px] font-Lexend"
            onClick={() => onSubmit()}
          >
            <Typography size="md">Reset</Typography>
          </Button>
        </div>
      </div>
    </Model>
  )
}

export default PasswordReset
