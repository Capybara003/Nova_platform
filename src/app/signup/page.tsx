/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
'use client'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useMemo, useState } from 'react'
import { toast } from 'react-toastify'

import SignUpLayout from './layout'

import { useApi } from 'app/components/api'
import googleIcon from 'assets/images/googleIcon.png'
import Button from 'design-systems/Atoms/Button'
import { DiscordIcon } from 'design-systems/Atoms/Icons'
import IconAtom from 'design-systems/Atoms/Logo'
import Typography from 'design-systems/Atoms/Typography'
import { EmailregEx, PassRegEx } from 'utils/regex'

const SignUP: React.FC = () => {
  const { register, signInAuth } = useApi()
  const local = localStorage.getItem('authName')
  const [signUp, setSignUp] = useState<any>({
    userName: '',
    email: '',
    registerType: 'manual',
    password: '',
  })
  const [userPass, setUserpass] = useState<string>('')

  const session = useSession()
  const router = useRouter()

  const handleSignup = async () => {
    try {
      // if (EmailregEx.test(email) && PassRegEx.test(userPass) && PassRegEx.test(password)) {
      const { data } = await register.mutateAsync(signUp)
      if (data && data.success) {
        router.push(`/otpverification?email=${encodeURIComponent(signUp.email)}`) // Move to OTP verification page after successful signup
        // eslint-disable-next-line no-console
        toast.success(data.message, {
          position: toast.POSITION.TOP_RIGHT,
        })
      } else {
        toast.error(data.message, {
          position: toast.POSITION.TOP_RIGHT,
        })
      }
    } catch (error: any) {
      // Handle error
      toast.error(error?.response?.data?.message, {
        position: toast.POSITION.TOP_RIGHT,
      })
    }
  }

  const handleSignIn = async (registerType1: string) => {
    await signIn(registerType1)
    localStorage?.setItem('authName', registerType1 || '')
    setSignUp({ ...signUp, registerType: registerType1 })
  }

  useMemo(() => {
    if (session.status === 'authenticated' && local !== '') {
      setSignUp({
        ...signUp,
        userName: session.data.user?.name,
        email: session.data.user?.email,
        profilePic: session.data.user?.image,
        registerType: local,
      })
      // localStorage?.setItem('data', session?.status || '')
      // localStorage?.setItem('name', session?.data?.user?.name || '')
      // localStorage?.setItem('email', session?.data?.user?.email || '')
      // toast.success('Login Success', {
      //   position: toast.POSITION.TOP_RIGHT,
      // })
      // redirect('/market-analitics')
      // handleSignup()
    }
  }, [session.status])
  // if(LocalStorage2 !== null && localStorage !== null && session.status === 'authenticated'){
  //   toast.success('Login Success', {
  //     position: toast.POSITION.TOP_RIGHT,
  //   })
  //   redirect('/market-analitics')
  // }
  const handleAuth = async () => {
    // debugger
    try {
      // if (EmailregEx.test(email) && PassRegEx.test(userPass) && PassRegEx.test(password)) {
      if (signUp.registerType === 'google' || signUp.registerType === 'discord') {
        delete signUp.password
      }
      const { data } = await signInAuth.mutateAsync(signUp)
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
      // } else {
      //   toast.error(data.message, {
      //       position: toast.POSITION.TOP_RIGHT,
      //     })
      // }
    } catch (error: any) {
      // Handle error
      toast.error(error?.response?.data?.message, {
        position: toast.POSITION.TOP_RIGHT,
      })
    }
  }
  useMemo(() => {
    if (
      (signUp.profilePic && session.status === 'authenticated' && local === 'google') ||
      (signUp.profilePic && session.status === 'authenticated' && local === 'discord')
    ) {
      handleAuth()
    }
  }, [session.status, signUp.profilePic])

  return (
    <SignUpLayout>
      <div className="font-Poppins flex h-screen w-full items-center justify-center">
        <div className=" w-full max-w-[580px]  items-center justify-center !rounded-lg !bg-none !px-5 !py-4 xsm:!bg-gradient-pink xsm:!px-[77px] xsm:!py-[32px]">
          <div className="gap flex flex-col items-center justify-center gap-4">
            <Typography className="mt-4" size="h3">
              Sign Up
            </Typography>
            <div className="mt-8 flex w-full flex-col gap-4 text-left">
              <div className="rounded-xs  bg-gradient-to-r from-primary to-secondary-25 p-[2px]">
                <input
                  className="w-full rounded-xs !bg-gradient-pink   p-2"
                  placeholder="User Name"
                  type="text"
                  value={signUp.userName}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setSignUp({ ...signUp, userName: e.target.value })}
                />
              </div>
              <div>
                <div className="rounded-xs  bg-gradient-to-r from-primary to-secondary-25 p-[2px]">
                  <input
                    className="w-full rounded-xs !bg-gradient-pink p-2"
                    placeholder="User Email"
                    type="email"
                    value={signUp.email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setSignUp({ ...signUp, email: e.target.value })}
                  />
                </div>
                {signUp.email && !EmailregEx.test(signUp.email) && (
                  <Typography className="text-danger-600">Wrong Email</Typography>
                )}
              </div>
              <div>
                <div className="rounded-xs  bg-gradient-to-r from-primary to-secondary-25 p-[2px]">
                  <input
                    className="w-full rounded-xs !bg-gradient-pink   p-2"
                    placeholder="User Password"
                    type="password"
                    value={userPass}
                    onChange={e => {
                      setUserpass(e.target.value)
                    }}
                  />
                </div>
                {userPass && !PassRegEx.test(userPass) && (
                  <Typography className="text-danger-600">
                    Password must contain at least 6 char including upper/lowercase and number
                  </Typography>
                )}
              </div>
              <div>
                <div className="rounded-xs  bg-gradient-to-r from-primary to-secondary-25 p-[2px]">
                  <input
                    className="w-full rounded-xs !bg-gradient-pink   p-2"
                    placeholder="Confirm Password"
                    type="password"
                    value={signUp.password}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setSignUp({ ...signUp, password: e.target.value })}
                  />
                </div>
                {userPass && signUp.password && (
                  <>
                    {userPass !== signUp.password ? (
                      <Typography className="text-danger-600">Password Not Same</Typography>
                    ) : (
                      !PassRegEx.test(signUp.password) && (
                        <Typography className="text-danger-600">
                          Password must contain at least 6 char including upper/lowercase and number
                        </Typography>
                      )
                    )}
                  </>
                )}
              </div>
            </div>
            <div className="flex w-full flex-col gap-4">
              <Button
                className="rounded-xs !bg-button-gradient p-2 px-2"
                disabled={
                  signUp.userName === '' ||
                  signUp.email === '' ||
                  signUp.password === '' ||
                  !PassRegEx.test(signUp.password)
                }
                onClick={() => handleSignup()}
              >
                Sign Up
              </Button>
              <div className="grid w-full grid-cols-2 gap-[10px] ">
                <Button
                  className="flex flex-row items-center justify-center gap-2 rounded-xs bg-gradient-pink p-2 px-2"
                  onClick={() => handleSignIn('google')}
                >
                  <IconAtom alt={''} className="flex-shrink-0" height={16} src={googleIcon} width={16} />
                  <Typography className="mt-[4px] !hidden xsm:!flex" size="body">
                    Sign up with Google
                  </Typography>
                  <Typography className="mt-[4px] !flex xsm:!hidden" size="body">
                    Google
                  </Typography>
                </Button>
                <Button
                  className="flex flex-row items-center justify-center gap-2 rounded-xs bg-gradient-pink p-2 px-2"
                  onClick={() => handleSignIn('discord')}
                >
                  <DiscordIcon />{' '}
                  <Typography className="mt-[4px] !hidden xsm:!flex" size="body">
                    Sign up with Discord
                  </Typography>
                  <Typography className="mt-[4px] !flex xsm:!hidden" size="body">
                    Discord
                  </Typography>
                </Button>
              </div>
            </div>
            <div className="mt-3 flex flex-row gap-2">
              <Typography>Already have an account ?</Typography>
              <Button onClick={() => router.push('/login')}>
                <Typography className="text-secondary-300">Log In</Typography>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </SignUpLayout>
  )
}

export default SignUP
