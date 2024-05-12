/* eslint-disable react/no-unescaped-entities */
import ResetPasswordLayout from './layout'

import Button from 'design-systems/Atoms/Button'
import Typography from 'design-systems/Atoms/Typography'
import Box from 'design-systems/Molecules/Box'
import InputAtom from 'design-systems/Atoms/Input/InputAtom'

const ResetPassword: React.FC = () => {
  return (
    <ResetPasswordLayout>
      <div className="font-Poppins flex min-h-[calc(100vh-230px)] w-full items-center justify-center">
        <Box className="w-2/5 items-center justify-center rounded-lg bg-gradient-pink p-2 py-4">
          <div className="gap flex flex-col items-center justify-center gap-4">
            <Typography className="mt-4" size="h3">
              Reset Password
            </Typography>
            <div className="mt-8 flex w-3/4 flex-col gap-4">
              <InputAtom
                className="rounded-xs border-2 border-[#C517D1] bg-transparent p-2 px-2"
                placeholder="User Email"
                type="email"
              />
            </div>
            <div className="flex w-3/4 flex-col gap-4">
              <Button className="rounded-xs bg-button-gradient p-2 px-2">Send Reset Link</Button>
            </div>
            <div className="mb-4 mt-40 flex flex-row gap-2">
              <Typography>Don't have an account ?</Typography>
              <Button>
                <Typography className="text-secondary-300">Sign Up</Typography>
              </Button>
            </div>
          </div>
        </Box>
      </div>
    </ResetPasswordLayout>
  )
}

export default ResetPassword
