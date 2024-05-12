/* eslint-disable @typescript-eslint/no-explicit-any */
import { TEModalDialog, TEModalContent, TEModalHeader, TEModalBody, TEModalFooter, TERipple } from 'tw-elements-react'
import TEModal from 'tw-elements-react/dist/types/components/Modal/Modal'

export const ResetPassword = ({ showModal, setShowModal }: any) => {
  return (
    <TEModal setShow={setShowModal} show={showModal}>
      <TEModalDialog>
        <TEModalContent>
          <TEModalHeader>
            {/* <!--Modal title--> */}
            <h5 className="text-xl leading-normal font-medium text-neutral-800 dark:text-neutral-200">Modal title</h5>
            {/* <!--Close button--> */}
            <button
              aria-label="Close"
              className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
              type="button"
              onClick={() => setShowModal(false)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </TEModalHeader>
          {/* <!--Modal body--> */}
          <TEModalBody>Modal body text goes here.</TEModalBody>
          <TEModalFooter>
            <TERipple rippleColor="light">
              <button
                className="text-xs leading-normal bg-primary-100 text-primary-700 hover:bg-primary-accent-100 focus:bg-primary-accent-100 active:bg-primary-accent-200 inline-block rounded px-6 pb-2 pt-2.5 font-medium uppercase transition duration-150 ease-in-out focus:outline-none focus:ring-0"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </TERipple>
            <TERipple rippleColor="light">
              <button
                className="text-xs leading-normal text-white hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 font-medium uppercase shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                type="button"
              >
                Save changes
              </button>
            </TERipple>
          </TEModalFooter>
        </TEModalContent>
      </TEModalDialog>
    </TEModal>
  )
}
