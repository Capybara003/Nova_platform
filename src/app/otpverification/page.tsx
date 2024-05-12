/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
'use client'
import { useRouter } from 'next/navigation'
import { ChangeEvent, FormEvent, useRef, useState } from 'react'
import { toast } from 'react-toastify'

import OtpVerificationLayout from './layout'

import { useApi } from 'app/components/api'
import Button from 'design-systems/Atoms/Button'
import Typography from 'design-systems/Atoms/Typography'

const OtpVerification: React.FC = () => {
  const router = useRouter()

  const { verifyEmail } = useApi()
  const [otp, setOTP] = useState(['', '', '', ''])

  const queryEmail = new URLSearchParams(location.search).get('email')
  const email = queryEmail
  const inputRefs = Array.from({ length: 4 }, () => useRef<HTMLInputElement>(null))
  const handleVerification = async (e: FormEvent) => {
    e.preventDefault()
    const concatenatedOTP = otp.join('')
    try {
      const { data } = await verifyEmail.mutateAsync({ email, otp: concatenatedOTP })
      if (data && data.success) {
        toast.success(data.message, {
          position: toast.POSITION.TOP_RIGHT,
        })
        router.push('/login') // Move back to login after successful verification
        // eslint-disable-next-line no-console
      } else {
        toast.error('Something Went Wrong', {
          position: toast.POSITION.TOP_RIGHT,
        })
      }
    } catch (error) {
      toast.error('Something Went Wrong', {
        position: toast.POSITION.TOP_RIGHT,
      })
    }
  }

  const handleOTPChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const newOTP = [...otp]
    newOTP[index] = e.target.value
    setOTP(newOTP)

    // Automatically focus on the next input field
    if (index < 3 && e.target.value !== '') {
      inputRefs[index + 1].current?.focus()
    }
  }

  return (
    <OtpVerificationLayout>
      <form onSubmit={handleVerification}>
        <div>
          <div className="flex min-h-[calc(100vh-230px)] w-full items-center justify-center font-Lexend">
            <div className="h-[550px] w-full max-w-[580px]  rounded-lg xsm:bg-gradient-pink xsm:p-3 xsm:!pb-[32px]">
              <div className="gap flex h-full flex-col items-center justify-between gap-4">
                <div className="gap flex flex-col justify-center gap-4 xsm:p-[56px]">
                  <Typography className="" size="h3">
                    OTP Verification
                  </Typography>
                  <Typography className="">Enter the OTP you received at Email</Typography>
                  <div className="mt-6 flex justify-center gap-4">
                    {inputRefs.map((ref, index) => (
                      <div className="rounded-xs bg-gradient-to-r from-primary to-secondary-25 p-[2px]" key={index}>
                        <input
                          className="w-full rounded-xs !bg-black19 !p-3 text-center"
                          maxLength={1}
                          ref={ref}
                          type="text"
                          value={otp[index].toString()}
                          onChange={e => handleOTPChange(e, index)}
                        />
                      </div>
                    ))}
                  </div>
                  <div className=" flex w-full flex-col gap-4">
                    <Button className="rounded-xs !bg-button-gradient p-2 px-2" type="submit">
                      Verify
                    </Button>
                  </div>
                </div>
                <div className="flex flex-row gap-2">
                  <Typography>Didn’t receive the mail?</Typography>
                  <Button>
                    <Typography className="text-secondary-300">Resend OTP</Typography>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </OtpVerificationLayout>
  )
}

export default OtpVerification
