/* eslint-disable @typescript-eslint/no-explicit-any */
import Typography from '../Typography'

export const TopAssets = ({ checked, onChange, label }: any) => {
  return (
    <div className="!flex !w-full flex-row items-center justify-center gap-3 !rounded-[6px] bg-blackCardBg p-3 font-Lexend xxsm:!w-auto">
      {/* <Typography className="w-max" size="body">
        {label}
      </Typography>
      <input
        checked={checked}
        className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
        // className="mr-2 mt-[0.3rem] h-3.5 w-[39px] appearance-none rounded-[0.4375rem] bg-[#0C0A14] before:pointer-events-none before:absolute before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:!bg-[#7F8489] after:content-[''] checked:!bg-[#2592D9] checked:after:ml-[1.900rem]  checked:after:rounded-full checked:after:!bg-[#E8E1E1] checked:after:transition-[background-color_0.2s,transform_0.2s] hover:cursor-pointer focus:after:rounded-full checked:focus:before:scale-100"
        type="checkbox"
        onChange={onChange}
      /> */}

      <label className="text-dark dark:text-white flex cursor-pointer select-none items-center" htmlFor="toogleTwo">
        <Typography className="mr-[10px] w-max" size="body">
          {label}
        </Typography>
        <div className="relative">
          <input checked={checked} className="peer sr-only" id="toogleTwo" type="checkbox" onChange={onChange} />
          <div className="dark:bg-dark-2 h-[14px] w-[34px] rounded-full bg-[#000000] shadow-inner peer-checked:bg-blue"></div>
          <div className="dot shadow-switch-1 dark:bg-dark-4 absolute left-0 top-1/2 h-[18px] w-[18px] -translate-y-1/2 rounded-full bg-[#7F8489] duration-100 peer-checked:translate-x-full peer-checked:bg-[#ffffff]"></div>
        </div>
      </label>
    </div>
  )
}
