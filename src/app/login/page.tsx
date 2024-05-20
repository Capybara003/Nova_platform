/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
'use client'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useMemo, useState } from 'react'
import { toast } from 'react-toastify'

import LoginLayout from './layout'

import { useApi } from 'app/components/api'
import googleIcon from 'assets/images/googleIcon.png'
import Button from 'design-systems/Atoms/Button'
import { DiscordIcon } from 'design-systems/Atoms/Icons'
import IconAtom from 'design-systems/Atoms/Logo'
import Typography from 'design-systems/Atoms/Typography'
import { EmailregEx, PassRegEx } from 'utils/regex'

const Login: React.FC = () => {
  const { login, signInAuth } = useApi()
  const local = localStorage.getItem('authName')
  const [logIn, setlogIn] = useState<any>({
    userName: '',
    email: '',
    registerType: 'manual',
    password: '',
  })

  const session = useSession()
  const router = useRouter()

  const token = localStorage?.getItem('token')
  const ButtonAuthLocal = localStorage?.getItem('buttonAuth')

  const handleLogin = async () => {
    try {
      if (token === null) {
        if (logIn.registerType === 'manual') {
          delete logIn.userName
          delete logIn.registerType
        }

        const { data } = await login.mutateAsync(logIn)

        // If login successful, navigate to homepage
        if (data && data.success) {
          localStorage.setItem('token', data.user.token)
          localStorage.setItem('id', data.user.id)
          localStorage.setItem('UserData', JSON.stringify(data.user))

          toast.success(data.message, {
            position: toast.POSITION.TOP_RIGHT,
          })
          router.push('/')
        } else {
          toast.error(data.message, {
            position: toast.POSITION.TOP_RIGHT,
          })
        }
      } else {
        toast.warning('Already Login', {
          position: toast.POSITION.TOP_RIGHT,
        })
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message, {
        position: toast.POSITION.TOP_RIGHT,
      })
    }
  }

  const handleSignIn = async (registerType1: string) => {
    await signIn(registerType1)
    localStorage?.setItem('authName', registerType1 || '')
    setlogIn({ ...logIn, registerType: registerType1 })
  }

  useMemo(() => {
    if (session.status === 'authenticated' && local !== null && token === null) {
      setlogIn({
        ...logIn,
        userName: session.data.user?.name,
        email: session.data.user?.email,
        profilePic: session.data.user?.image,
        registerType: local,
      })
    }
  }, [session.status])

  const handleAuth = async () => {
    // debugger
    try {
      // if (EmailregEx.test(email) && PassRegEx.test(userPass) && PassRegEx.test(password)) {
      if (logIn.registerType === 'google' || logIn.registerType === 'discord') {
        delete logIn.password
      }
      const { data } = await signInAuth.mutateAsync(logIn)

      if (data && data.success) {
        toast.success(data.message, {
          position: toast.POSITION.TOP_RIGHT,
        })
        localStorage.setItem('token', data?.user?.token)
        localStorage.setItem('id', data?.user?.id)
        localStorage.setItem('UserData', JSON.stringify(data.user))
        if (token !== '') {
          // redirect('/market-analitics')
          router.push('/')
        }
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
    if (logIn.profilePic && session.status === 'authenticated' && token === null && ButtonAuthLocal === 'buttonAuth') {
      handleAuth()
    }
  }, [session.status, logIn.profilePic])

  const handleButton = () => {
    localStorage.setItem('buttonAuth', 'buttonAuth')
  }
  return (
    <LoginLayout>
      <div>
        <div className=" flex h-screen w-full items-center justify-center font-Lexend">
          <div className=" w-full max-w-[580px] items-center justify-center !rounded-lg !bg-none !px-5 !py-4 xsm:!bg-gradient-pink xsm:!px-[77px]  xsm:!py-[32px]">
            <div className="gap flex w-full flex-col items-center justify-center gap-4 text-left">
              <Typography className="" size="h3">
                Log In
              </Typography>
              <div className="mt-[58px] flex w-full flex-col gap-4">
                <div>
                  <div className="rounded-xs  bg-gradient-to-r from-primary to-secondary-25 p-[2px]">
                    <input
                      className="w-full rounded-xs !bg-gradient-pink   p-2  "
                      placeholder="Enter email"
                      type="email"
                      value={logIn.email}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => setlogIn({ ...logIn, email: e.target.value })}
                    />
                  </div>
                  {logIn.email && !EmailregEx.test(logIn.email) && (
                    <Typography className="text-danger-600">Wrong Email</Typography>
                  )}
                </div>
                <div>
                  <div className="rounded-xs  bg-gradient-to-r from-primary to-secondary-25 p-[2px]">
                    <input
                      className="w-full rounded-xs !bg-gradient-pink   p-2"
                      placeholder="Enter Password"
                      type="password"
                      value={logIn.password}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => setlogIn({ ...logIn, password: e.target.value })}
                    />
                  </div>
                  {logIn.password && !PassRegEx.test(logIn.password) && (
                    <Typography className="text-danger-600">
                      Password must contain at least 6 char including upper/lowercase and number
                    </Typography>
                  )}
                </div>
                <Button className="text-right font-normal">Forgot Password?</Button>
              </div>
              <div className="flex w-full flex-col gap-4">
                <Button
                  className="rounded-xs !bg-button-gradient p-2 px-2"
                  disabled={logIn.email === '' && logIn.password === ''}
                  type="button"
                  onClick={() => handleLogin()}
                >
                  Log In
                </Button>
                <div className="grid w-full grid-cols-2 gap-[10px] ">
                  <Button
                    className="flex flex-row items-center justify-center gap-2 rounded-xs bg-gradient-pink p-2 px-2"
                    onClick={() => {
                      handleSignIn('google'), handleButton()
                    }}
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
                    onClick={() => {
                      handleSignIn('discord'), handleButton()
                    }}
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
              <div className="mt-[86px] flex flex-row gap-2">
                <Typography>Don't have an account ?</Typography>
                <Button type="button" onClick={() => router.push('/signup')}>
                  <Typography className="text-secondary-300">Sign Up</Typography>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LoginLayout>
  )
}

export default Login
