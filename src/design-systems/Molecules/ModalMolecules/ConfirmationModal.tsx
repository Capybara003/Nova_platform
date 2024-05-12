import Button from 'design-systems/Atoms/Button'
import { WarningIcon } from 'design-systems/Atoms/Icons'
import Line from 'design-systems/Atoms/Line'
import { Model } from 'design-systems/Atoms/Model'
import { ModelProps } from 'design-systems/Atoms/Model/interface'
import Typography from 'design-systems/Atoms/Typography'

const ConfirmationModal: React.FC<ModelProps> = ({ setShow, showModal, text, onClick }) => {
  return (
    <Model className="max-w-[650px]" isShowIcon={false} setShow={setShow} showModal={showModal}>
      <div>
        <div>
          <div className="mb-[15px] flex justify-center">
            <WarningIcon />
          </div>
          <Typography size="h3">Are you sure?</Typography>
          <Line className="!my-[44px]" />
          <Typography className="px-[50px] text-[20px] text-[#DBDBDB]">
            <span className="!text-primary">{text}</span> will be delete permanent. Do you confirm that?
          </Typography>
          <Line className="!my-[44px]" />
          <div className="flex justify-center gap-[22px] px-[50px]">
            <Button
              className=" w-full rounded-[6px] bg-gradient-pink px-[3px] pb-1 pt-[2px]"
              onClick={() => setShow(false)}
            >
              <div className=" flex h-[98%] flex-row items-center justify-center gap-2 rounded-[6px] bg-gradient-pink p-[10px] font-Lexend">
                <Typography size="body">Cancle</Typography>
              </div>
            </Button>
            <Button
              className=" flex   w-full  flex-row items-center justify-center gap-2 rounded-[6px] bg-button-gradient p-[10px] font-Lexend"
              onClick={onClick}
            >
              <Typography size="body">Confirm</Typography>
            </Button>
          </div>
        </div>
      </div>
    </Model>
  )
}
export default ConfirmationModal
