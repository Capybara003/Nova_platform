/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import Image from 'next/image'
import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify'

import PasswordReset from '../ModalMolecules/PasswordReset'

import userIcon from 'assets/images/Profile.svg'
import tweetLogo from 'assets/images/layer1.svg'
import Button from 'design-systems/Atoms/Button'
import { DiscordIcon, InfoIcon } from 'design-systems/Atoms/Icons'
import InputAtom from 'design-systems/Atoms/Input/InputAtom'
import Line from 'design-systems/Atoms/Line'
import IconAtom from 'design-systems/Atoms/Logo'
import Spinner from 'design-systems/Atoms/Spinner'
import { TopAssets } from 'design-systems/Atoms/TopAssets'
import Typography from 'design-systems/Atoms/Typography'
import { AccountTempProps } from 'design-systems/Templates/AccountTemplate/interface'
import { useInfo } from 'hooks/apis/useInfo'

const AccountInfo: React.FC<AccountTempProps> = ({ setLoading, loading }) => {
  // const ID: string | null = typeof window !== 'undefined' ? localStorage.getItem('id') : null
  const hasToken = localStorage.getItem('token')
  // const { isLoadingUser, User } = useUser(ID, hasToken)
  const [isCheckboxChecked, setIsCheckboxChecked] = useState<boolean>(false)
  const [userData, setUserData] = useState<any>({})
  useEffect(() => {
    try {
      const localUserData = localStorage.getItem('UserData')

      if (localUserData && localUserData !== undefined && localUserData !== null) {
        const parsedUserData = JSON?.parse(localUserData)
        setUserData(parsedUserData)
      }
    } catch (error) {
      console.error('Error parsing UserData:', error)
      // Handle the error (e.g., set default values or show a message to the user)
    }
  }, [])

  // const [userDetails, setUserDetails] = useState<profileBlock>({
  //   userName: userData?.userName,
  //   email: userData?.email,
  //   profilePic: userData?.profilePic,
  // })

  const [accChange, setAccChange] = useState({
    user: false,
    email: false,
    pass: false,
  })

  const [showModal, setShow] = useState(false)
  const { postUserName, profilePic } = useInfo()
  const inputRef = useRef<any>(null)
  const UploadClick = () => {
    inputRef.current.click()
  }
  // useMemo(() => {
  //   // setUserData(User)
  //   setUserDetails({
  //     userName: User?.userName,
  //     email: User?.email,
  //     profilePic: User?.profilePic === null ? '' : User?.profilePic,
  //   })
  // }, [User, isLoadingUser])
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const fileData: File[] = []
  //   const reader = new FileReader()

  //   if (e.target.files && e.target.files[0]) {
  //     reader.readAsDataURL(e.target.files[0])
  //     fileData.push(e.target.files[0])

  //     reader.onload = (event: ProgressEvent<FileReader>) => {
  //       if (event.target && event.target.result) {
  //         const fileUploaded = event.target.result as string
  //         setUserDetails({ ...userDetails, profilePic: fileUploaded })
  //         console.log("fileData===>", fileData,"fileUploaded===>",fileUploaded);
  //       }
  //     }

  //     handlePicUpdate(fileData)
  //   }
  // }
  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileData: File[] = []
    const reader = new FileReader()
    if (e.target.files && e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
      fileData.push(e.target.files[0])

      reader.onload = (event: ProgressEvent<FileReader>) => {
        if (event.target && event.target.result) {
          const fileUploaded = event.target.result as string
          setUserData({ ...userData, profilePic: fileUploaded })
        }
      }
    }
    handlePicUpdate(e.target.files)
  }

  const handleSubmit = async () => {
    try {
      setLoading(true)
      // if (userData.profilePic !== '') {
      //   delete userData.profilePic
      // }
      const result = await postUserName(userData)
      // Handle success

      if (result.success) {
        setLoading(false)
        localStorage.setItem('UserData', JSON.stringify(result.data))
        toast.success(result.message, {
          position: toast.POSITION.TOP_RIGHT,
        })
        // setTimeout(() => {
        //   window.location.reload()
        // }, 5000)
      } else {
        setLoading(false)
        toast.error(result.message, {
          position: toast.POSITION.TOP_RIGHT,
        })
      }
    } catch (error: any) {
      setLoading(false)
      toast.error(error.response?.data?.message || 'An error occurred', {
        position: toast.POSITION.TOP_RIGHT,
      })
    } finally {
      setLoading(false)
    }
  }
  const handlePicUpdate = async (img: any): Promise<void> => {
    try {
      // debugger;
      setLoading(true)
      const formData: any = new FormData()
      formData.append('email', userData.email)
      formData.append('profilePic', img[0])
      const result: any = await profilePic(formData)
      // Handle success

      if (result.success && hasToken !== null) {
        setLoading(false)
        localStorage.setItem('UserData', JSON.stringify(result.data))
        toast.success(result.message, {
          position: toast.POSITION.TOP_RIGHT,
        })
        // setTimeout(() => {
        //   if (typeof window !== undefined) {
        //     window.location.reload()
        //   }
        // }, 5000)
      } else {
        setLoading(false)
        toast.error(result.message, {
          position: toast.POSITION.TOP_RIGHT,
        })
      }
    } catch (error: any) {
      setLoading(false)
      toast.error(error.response?.data?.message || 'An error occurred', {
        position: toast.POSITION.TOP_RIGHT,
      })
    } finally {
      setLoading(false)
    }
  }

  // useMemo(() => {
  //   if (userData.profilePic !== '' && userData.profilePic) {
  //     handlePicUpdate()
  //   }
  // }, [userData.profilePic])

  return (
    <>
      <div className="">
        <div className="flex flex-col rounded-[12px] bg-blackCardBg p-2 md:!rounded-md md:!p-[22px]">
          <Typography className=" text-left font-normal" size="subtitle">
            Account
          </Typography>
          <div className="mt-[32px] flex w-full !flex-col  gap-3  md:!flex-row">
            <div className="flex  flex-shrink-0 items-center">
              <div
                className="flex  w-full items-center justify-center !rounded-[24px] p-[22px] hover:cursor-pointer md:!bg-blackCardBg"
                onClick={() => UploadClick()}
              >
                {userData && userData?.profilePic ? (
                  <Image
                    alt="NOVA Logo"
                    className="!rounded-full ring-2 ring-whiteE8"
                    height={125}
                    src={userData?.profilePic}
                    width={125}
                  />
                ) : (
                  <Image alt="NOVA Logo" className="!rounded-full" height={125} src={userIcon} width={125} />
                )}
              </div>
            </div>
            <Line className="md:!hidden" />
            <input className="hidden" ref={inputRef} type="file" onChange={e => onFileChange(e)} />
            <div className="grid w-full items-start gap-3 text-left">
              <div className="grid w-full !grid-cols-1 items-center justify-between gap-2 md:!grid-cols-4">
                <Typography className="col-span-1 text-black7f" size="md">
                  Username:
                </Typography>
                <div className="col-span-3 flex w-full items-center justify-between">
                  <div className="">
                    {!accChange.user ? (
                      <Typography
                        className="w-full overflow-hidden overflow-ellipsis font-normal text-[#E8E1E1]"
                        size="body"
                      >
                        {userData?.userName}
                      </Typography>
                    ) : (
                      <InputAtom
                        className=" h-[30px] rounded-xs border-2 border-[#C517D1] bg-transparent p-[9.9px]"
                        defaultValue={userData?.userName}
                        placeholder={userData?.userName}
                        type="text"
                        value={userData?.userName}
                        onChange={e => {
                          setUserData({ ...userData, userName: e.target.value })
                        }}
                      />
                    )}
                  </div>
                  <div className="">
                    {userData?.userName && (
                      <>
                        {!accChange.user ? (
                          <Button
                            className="col-span-1 min-w-[140px] rounded-[6px] bg-gradient-pink px-[3px] pb-1 pt-[3px] md:w-auto"
                            onClick={() => setAccChange({ ...accChange, user: !accChange.user })}
                          >
                            <div className=" flex w-full flex-row items-center justify-center gap-2 rounded-[6px] bg-gradient-pink p-[7px] font-Lexend">
                              <Typography size="md">Change</Typography>
                            </div>
                          </Button>
                        ) : (
                          <div className="grid w-full grid-cols-2 gap-1">
                            <Button
                              className=" flex  w-full  flex-row items-center justify-center gap-2 rounded-[6px] bg-button-gradient p-[10px] font-Lexend"
                              onClick={() => {
                                setAccChange({ ...accChange, user: !accChange.user }), handleSubmit()
                              }}
                            >
                              <Typography size="md">Save</Typography>
                            </Button>
                            <Button
                              className=" rounded-[6px] bg-gradient-pink px-[3px] pb-[2px] pt-[3px]"
                              onClick={() => setAccChange({ ...accChange, user: !accChange.user })}
                            >
                              <div className=" flex  w-full  flex-row items-center justify-center gap-2 rounded-[6px] bg-gradient-pink p-[7px] font-Lexend">
                                <Typography size="md">Cancel</Typography>
                              </div>
                            </Button>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="grid w-full  !grid-cols-1 items-center justify-between gap-2 md:!grid-cols-4">
                <Typography className="col-span-1 text-black7f" size="md">
                  E-Mail:
                </Typography>
                <div className="col-span-2">
                  {!accChange.email ? (
                    <Typography
                      className="w-full overflow-hidden overflow-ellipsis font-normal text-[#E8E1E1] "
                      size="body"
                    >
                      {userData?.email}
                    </Typography>
                  ) : (
                    <InputAtom
                      className=" rounded-xs border-2 border-[#C517D1] bg-transparent p-2"
                      placeholder={userData?.email}
                      type="text"
                      value={userData?.email}
                      onChange={e => {
                        setUserData({ ...userData, email: e.target.value })
                      }}
                    />
                  )}
                </div>
              </div>
              <div className="grid w-full  !grid-cols-1 items-center justify-between gap-2 md:!grid-cols-4">
                <Typography className="col-span-1 text-black7f" size="md">
                  Password:
                </Typography>
                <div className="col-span-3 flex w-full items-center justify-between">
                  <Typography
                    className="col-span-2 overflow-hidden overflow-ellipsis font-normal text-[#E8E1E1]"
                    size="body"
                  >
                    *************
                  </Typography>
                  <Button className="col-span-1 min-w-[140px] rounded-[6px] bg-gradient-pink px-[3px] pb-1 pt-[3px] md:w-auto">
                    <div
                      className=" flex  flex-row items-center justify-center gap-2 rounded-[6px] bg-gradient-pink p-[7px] font-Lexend"
                      onClick={() => setShow(true)}
                    >
                      <Typography size="md">Change</Typography>
                    </div>
                  </Button>
                </div>
              </div>
              <div className="grid w-full  !grid-cols-1 items-center justify-between gap-2 md:!grid-cols-4">
                <Typography className="col-span-1 text-black7f" size="md">
                  Discord:
                </Typography>
                <div className="col-span-3 flex items-center justify-between">
                  <Typography
                    className="col-span-2 w-full overflow-hidden overflow-ellipsis font-normal text-[#E8E1E1]"
                    size="body"
                  >
                    NFT_Token master
                  </Typography>
                  <Button className="min-w-[140px] rounded-[6px] bg-gradient-pink px-[3px] pb-1 pt-[3px] md:w-auto">
                    <div className=" flex  flex-row items-center justify-center gap-2 rounded-[6px] bg-gradient-pink p-[7px] font-Lexend">
                      <Typography size="md">Connect</Typography>
                      <DiscordIcon />
                    </div>
                  </Button>
                </div>
              </div>
              <div className="grid w-full  !grid-cols-1 items-center justify-between gap-2 md:!grid-cols-4">
                <Typography className="col-span-1 text-black7f" size="md">
                  X:
                </Typography>
                <div className="col-span-3 flex items-center justify-between">
                  <Typography
                    className=" w-full overflow-hidden overflow-ellipsis font-normal text-[#E8E1E1]"
                    size="body"
                  >
                    Token_Master121
                  </Typography>
                  <Button className="min-w-[140px] rounded-[6px] bg-gradient-pink px-[3px] pb-1 pt-[3px] md:w-auto">
                    <div className=" flex  flex-row items-center justify-center gap-2 rounded-[6px] bg-gradient-pink p-[7px] font-Lexend">
                      <Typography size="md">Connect</Typography>
                      <IconAtom alt="NOVA Logo" height={15} src={tweetLogo} width={16} />
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <Line />
          <div className=" flex !flex-col items-center justify-between gap-3 md:!flex-row">
            <div className="flex flex-row items-center justify-center gap-2">
              <InfoIcon />
              <Typography className="font-normal" size="md">
                Privacy: your profile is set Public by default
              </Typography>
            </div>
            <TopAssets
              checked={isCheckboxChecked}
              label={'Go Private'}
              onChange={() => setIsCheckboxChecked(!isCheckboxChecked)}
            />
          </div>
        </div>
      </div>
      <PasswordReset setShow={setShow} showModal={showModal} userDetails={userData} />
      {loading && <Spinner />}
    </>
  )
}

export default AccountInfo
