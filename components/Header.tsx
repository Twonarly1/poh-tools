import React, { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  SearchIcon,
  FilterIcon,
  ChatAlt2Icon,
  HomeIcon,
} from '@heroicons/react/outline'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import toast from 'react-hot-toast'
import { Tab } from '@headlessui/react'
import router from 'next/router'

const Header = () => {
  function alert() {
    toast.error(
      (t) => (
        <div className="flex space-x-2">
          Please see <b className="px-1 text-green-800">apollo-client.js</b>
          <button onClick={() => toast.dismiss(t.id)}>&nbsp;Dismiss</button>
        </div>
      ),
      {
        style: {
          border: '1px solid #713200',
          padding: '16px',
          color: '#713200',
        },
        iconTheme: {
          primary: 'rgb(255, 3, 3)',
          secondary: '#FFFAEE',
        },
      }
    )
  }

  return (
    <div className="w-full bg-white shadow-lg">
      <div className="sticky top-0 z-50 mx-auto flex w-screen max-w-5xl items-center justify-between bg-white px-8 py-2">
        <div className="relative h-12 w-20 flex-shrink-0 cursor-pointer">
          <Link href="/">
            <Image
              priority
              objectFit="contain"
              layout="fill"
              src="/images/poh.svg"
            />
          </Link>
        </div>

        <div className=" inline-flex items-center text-gray-500 md:space-x-1">
          <Tab.Group>
            <Tab.List>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    onClick={() => router.push('/')}
                    className={
                      selected
                        ? 'bg-gray-100 text-gray-500 outline-none'
                        : 'bg-white text-gray-500'
                    }
                  >
                    <div className="icon">
                      <HomeIcon
                        className={
                          selected
                            ? 'h-6 w-6 items-center bg-gray-100 text-primary-orange'
                            : 'h-6 w-6 text-gray-500 hover:bg-gray-100'
                        }
                      />
                      <p className="hidden md:flex">Home</p>
                    </div>
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    onClick={() => router.push('/reddit')}
                    className={
                      selected
                        ? 'bg-gray-100 text-gray-500 outline-none'
                        : 'bg-white text-gray-500'
                    }
                  >
                    <div onClick={alert} className="icon">
                      <ChatAlt2Icon
                        className={
                          selected
                            ? 'h-6 w-6 items-center bg-gray-100 text-primary-orange'
                            : 'h-6 w-6 text-gray-500 hover:bg-gray-100'
                        }
                      />
                      <p className="hidden md:flex">Chat</p>
                    </div>
                  </button>
                )}
              </Tab>

              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    onClick={() => router.push('/registry')}
                    className={
                      selected
                        ? 'bg-gray-100 text-gray-500 outline-none'
                        : 'bg-white text-gray-500'
                    }
                  >
                    <div className="icon">
                      <SearchIcon
                        className={
                          selected
                            ? 'h-6 w-6 items-center bg-gray-100 text-primary-orange'
                            : 'h-6 w-6 text-gray-500 hover:bg-gray-100'
                        }
                      />
                      <p className="hidden md:flex">Search</p>
                    </div>
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    onClick={() => router.push('/registry/filter')}
                    className={
                      selected
                        ? 'bg-gray-100 text-gray-500 outline-none'
                        : 'bg-white text-gray-500'
                    }
                  >
                    <div className="icon">
                      <FilterIcon
                        className={
                          selected
                            ? 'h-6 w-6 items-center bg-gray-100 text-primary-orange'
                            : 'h-6 w-6 text-gray-500 hover:bg-gray-100'
                        }
                      />
                      <p className="hidden md:flex">Filter</p>
                    </div>
                  </button>
                )}
              </Tab>
              {/* ...  */}
            </Tab.List>
          </Tab.Group>
        </div>
        <ConnectButton />
      </div>
    </div>
  )
}

export default Header
