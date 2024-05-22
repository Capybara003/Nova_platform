/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

import ResetPPasswordLayout from './layout'

import Button from 'design-systems/Atoms/Button'
import Typography from 'design-systems/Atoms/Typography'
import Box from 'design-systems/Molecules/Box'
import InputAtom from 'design-systems/Atoms/Input/InputAtom'
import useApi from 'app/components/api'
import { PassRegEx } from 'utils/regex'

const ResetPPassword: React.FC = () => {
  const [password, setPassword] = useState('')
  const [userPass, setUserPass] = useState('')
  const [email, setEmail] = useState('')
  const { resetPassword, validateLink } = useApi()
  const router = useRouter()
  const token = new URLSearchParams(location.search).get('token')

  useEffect(() => {
    ;(async () => {
      if (token) {
        try {
          const { data } = await validateLink.mutateAsync({ token })
          if (data) {
            if (data.success) {
              setEmail(data.user)
            } else {
              toast.error(data.message, {
                position: toast.POSITION.TOP_RIGHT,
              })
              router.push('/resetpassword')
            }
          }
        } catch (error: any) {
          toast.error(error?.response?.data?.message, {
            position: toast.POSITION.TOP_RIGHT,
          })
          router.push('/resetpassword')
        }
      }
    })()
  }, [])

  const handleReset = async () => {
    try {
      const { data } = await resetPassword.mutateAsync({ email, password })

      if (data && data.success) {
        toast.success(data.message, {
          position: toast.POSITION.TOP_RIGHT,
        })
        router.push('/login')
      } else {
        toast.error(data.message, {
          position: toast.POSITION.TOP_RIGHT,
        })
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message, {
        position: toast.POSITION.TOP_RIGHT,
      })
    }
  }

  return (
    <ResetPPasswordLayout>
      <div className="font-Poppins flex min-h-[calc(100vh-230px)] w-full items-center justify-center">
        <Box className="w-2/5 items-center justify-center rounded-lg bg-gradient-pink p-2 py-4">
          <div className="gap flex flex-col items-center justify-center gap-4">
            <Typography className="mt-4" size="h3">
              New Password
            </Typography>
            <div className="mt-8 flex w-3/4 flex-col gap-4">
              <div>
                <InputAtom
                  className="w-full rounded-xs border-2 border-[#C517D1] bg-transparent p-2 px-2"
                  placeholder="New Password"
                  type="password"
                  value={userPass}
                  onChange={e => setUserPass(e.target.value)}
                />
                {userPass && !PassRegEx.test(userPass) && (
                  <Typography className="text-danger-600">
                    Password must contain at least 6 char including upper/lowercase and number
                  </Typography>
                )}
              </div>
              <div>
                <InputAtom
                  className="w-full rounded-xs border-2 border-[#C517D1] bg-transparent p-2 px-2"
                  placeholder="Confirm Password"
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                {userPass && password && (
                  <>
                    {userPass !== password ? (
                      <Typography className="text-danger-600">Password Not Same</Typography>
                    ) : (
                      !PassRegEx.test(password) && (
                        <Typography className="text-danger-600">
                          Password must contain at least 6 char including upper/lowercase and number
                        </Typography>
                      )
                    )}
                  </>
                )}
              </div>
            </div>
            <div className="flex w-3/4 flex-col gap-4">
              <Button className="rounded-xs bg-button-gradient p-2 px-2" onClick={handleReset}>
                Reset Password
              </Button>
            </div>
            <div className="mb-4 mt-40 flex flex-row gap-2">
              <Typography>Don't have an account ?</Typography>
              <Button onClick={() => router.push('/signup')}>
                <Typography className="text-secondary-300">Sign Up</Typography>
              </Button>
            </div>
          </div>
        </Box>
      </div>
    </ResetPPasswordLayout>
  )
}

export default ResetPPassword
