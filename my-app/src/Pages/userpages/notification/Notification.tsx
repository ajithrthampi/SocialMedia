import { Children, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

interface noti {
  open: boolean
  setOpen: any
  children: any
  onClose: any
  isOpen:boolean
  title: string
}

export default function Notifi( { open , setOpen,  onClose,isOpen , title, children}: noti ) {
  
  // const [open, setOpen] = useState(true)

  return (
    <>
    <Transition.Root show={open} as={Fragment} >
      <Dialog as="div" className="relative z-10 hidden sm:block" 
      onClose={setOpen}
      >
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

        <div className="fixed inset-0 overflow-hidden ">
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
                      <button
                        type="button"
                        className="rounded-md text-gray-300 hover:text-white focus:outline-auto  focus:ring-white border"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only text-white">Close panel</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  
                  <div className="flex h-full flex-col overflow-y-scroll scrollbar-color:black bg-[#191819] py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <Dialog.Title className="text-lg font-medium text-gray-300">Notification</Dialog.Title>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6 text-white">

                      {/* Replace with your content */}
                      {title}
                      
                      {/* /End replace */}
                      
                      
                    </div>
                    
                  </div>
                  
                </Dialog.Panel>
                
              </Transition.Child>
           
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
    </>
  )
}
