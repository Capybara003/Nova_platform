import { TEModal, TEModalBody, TEModalContent, TEModalDialog, TEModalHeader } from 'tw-elements-react'

import { FilterIcon } from '../Icons'
import Typography from '../Typography'
import Button from '../Button'
import IconAtom from '../Logo'

import { ModelProps } from './interface'

import closeIcon from 'assets/images/close.svg'

export const Model: React.FC<ModelProps> = ({ children, setShow, showModal, heading, isShowIcon = true }) => {
  return (
    <TEModal
      className="flex items-start justify-center !rounded-[24px] backdrop-blur-sm md:!items-center"
      setShow={setShow}
      show={showModal}
    >
      <TEModalDialog className="m-4 h-auto w-full rounded-[12px] bg-gradint-dark-pink !from-blue !to-primary p-1 xxsm:m-10 md:!m-0 md:!max-w-max md:!rounded-e-[26px] md:!rounded-s-[22px] md:!bg-gradient-to-t md:!py-0 md:!pe-0 md:!ps-1">
        <TEModalContent className="!h-full !w-full !bg-blackBg md:!rounded-e-[22px] md:!rounded-s-20">
          <TEModalHeader className="!border-0 !pb-[10px]">
            <div className="ml-2 mr-2 mt-2 flex w-full flex-row justify-between">
              <div className="flex justify-start gap-2 md:!flex-1">
                {isShowIcon && <FilterIcon />}
                <Typography className="hidden font-medium md:!block" size="subtitle">
                  {heading}
                </Typography>
              </div>
              <Typography className="block font-medium md:!hidden" size="subtitle">
                {heading}
              </Typography>
              <div className="text-right">
                <Button className="cursor-pointer" onClick={() => setShow(!showModal)}>
                  <IconAtom alt={''} className="flex-shrink-0" height={19} src={closeIcon} width={19} />
                </Button>
              </div>
            </div>
          </TEModalHeader>
          <TEModalBody className="!pt-[12px]">{children}</TEModalBody>
        </TEModalContent>
      </TEModalDialog>
    </TEModal>
  )
}
