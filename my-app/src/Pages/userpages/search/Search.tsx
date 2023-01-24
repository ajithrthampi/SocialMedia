
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

interface search {
  setSearchOpen: any
  open: any
  tele: any
  onClose: any
  children: any
}

const Search = ({ setSearchOpen, open, tele, children }: search) => {


  return (
    <Transition.Root
      show={open}
      as={Fragment} >
      <Dialog as="div" className="relative z-10 hidden md:block" onClose={setSearchOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black 
          bg-opacity-75 transition-opacity backdrop-blur-sm 
          "
          />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden scrollbar-none">
          <div className="absolute inset-0 overflow-hidden  ">
            <div className="pointer-events-none fixed  inset-y-0 -left-96 -ml-28 flex max-w-full pl-10 ">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-0"
                enterTo="translate-x-full"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-full"
                leaveTo="translate-x-0"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 left-96 pl-32   -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                      {/* <button
                        type="button"
                        className="rounded-md text-gray-300 hover:text-white focus:outline-auto  focus:ring-white border"
                        onClick={() => setSearchOpen(false)}
                      >
                        <span className="sr-only text-white">Close panel</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button> */}
                    </div>
                  </Transition.Child>

                  <div className="flex h-full flex-col overflow-y-scroll scrollbar-none scrollbar-color:black bg-[#191819] py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <Dialog.Title className="text-xl font-medium text-gray-300 ">Search</Dialog.Title>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6 text-white">

                      {/* Replace with your content */}

                      <div className="flex justify-center">
                        <div className="mb-3 xl:w-96">
                          <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
                            <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal
                             text-gray-700 bg-[#7069695d] bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
                              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                              placeholder="Search"
                              aria-label="Search"
                              aria-describedby="button-addon2"
                            />
                            {/* <button className="btn  px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
                              
                            </button> */}
                          </div>
                        </div>
                      </div>

                      {/* /End replace */}
                      <div className="mt- text-xs border-b border-[#616161] py- text-[#5e1e1e]"></div>
                    </div>
                  </div>
                </Dialog.Panel>

              </Transition.Child>

            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default Search