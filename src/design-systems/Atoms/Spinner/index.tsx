/* eslint-disable @typescript-eslint/no-unused-vars */
import { SpinnerProps } from './interface'

const Spinner: React.FC<SpinnerProps> = ({ className }) => {
  return (
    <div className="z-40 flex h-screen w-full items-center justify-center rounded-xl shadow-md">
      <div className=" h-12 w-12 rounded-full !bg-primary">
        <div className=" h-12 w-12 animate-ping rounded-full !bg-blue">
          <div className=" h-12 w-12 animate-ping rounded-full !bg-primary">
            <div className=" h-12 w-12 animate-ping rounded-full !bg-blue"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Spinner
