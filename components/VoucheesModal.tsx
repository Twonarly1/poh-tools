import React, { Fragment } from 'react'
import { Transition, Dialog } from '@headlessui/react'
import { InformationCircleIcon, XIcon } from '@heroicons/react/outline'
import { useRecoilState } from 'recoil'
import { voucheesStateModal } from '../atoms/voucheesAtom'
import router from 'next/router'
import { conciseEthAddress, formatUnix } from '../lib/utils'
import Avatar from './Avatar'
import Timeago from 'react-timeago'

//fix this
type Props = {
  submission: any
}

const VoucheesModal = ({ submission }: Props) => {
  let [isOpen, setIsOpen] = useRecoilState(voucheesStateModal)

  return (
    <>
      <button
        className="ml-1"
        onClick={() => {
          setIsOpen(true)
        }}
      >
        <InformationCircleIcon className="h-6  w-6 cursor-pointer items-center" />
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => {
            setIsOpen(false)
          }}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-50" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="-mt-24 inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="dialog bg-white text-gray-400">
                <Dialog.Title
                  as="h3"
                  className="text-center text-lg font-medium leading-6"
                >
                  Vouchees
                </Dialog.Title>
                <button onClick={() => setIsOpen(false)}>
                  <XIcon className="absolute  top-4 right-4 w-7 text-gray-400" />
                </button>
                <div className="bg-white">
                  {submission?.vouchees?.map(
                    (submission: any, index: number) => (
                      <div
                        className="mt-1 flex cursor-pointer items-center justify-between rounded-full text-sm "
                        onClick={() => {
                          router.push(`/registry/${submission.id}`)
                          setIsOpen(false)
                        }}
                        key={index}
                      >
                        <div className="flex items-center space-x-3">
                          <p className="hover:rounded-full hover:ring-2">
                            <Avatar seed={submission.id as string} />
                          </p>
                          <div className="font-bold text-black">
                            {submission.name}
                          </div>
                          <div> {conciseEthAddress(submission.id)}</div>
                        </div>
                        <Timeago
                          //@ts-ignore
                          date={formatUnix(submission?.submissionTime)}
                        />
                      </div>
                    )
                  )}
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default VoucheesModal
