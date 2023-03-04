
import { Fragment, useState,useContext } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { log } from 'console'
import { useQuery } from '@tanstack/react-query'
import axiosinstance from '../../../axios/axiosinstance'
import useDebounce from '../../../hooks/useDebounce'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/Context'
import { passfriendDetails } from '../../../redux/store/features/userSlice'
import Post from '../../../Component/post/Post'
import { search_user } from '../../../services/UserApi'

interface search {
  setSearchOpen: any
  open: any
  tele: any
  onClose: any
  children: any
}

const Search = ({ setSearchOpen, open, tele, children }: search) => {

  const [searchName, setSearchName] = useState<null | HTMLElement>()
  const [searchAncher, setSearchAncher] = useState<null | HTMLElement>()
  const [opens, setOpens] = useState<boolean>(false)
  const navigate = useNavigate()
  const { user } = useContext(UserContext)
  const dispatch = useDispatch()

  if (user) {
    var userId = user.id
}

// All data

const { data } = useQuery(["Id"], () => {
  return axiosinstance.get("viewpost", {
      headers: {
          "x-access-token": localStorage.getItem("token"),
      },
  }).then((res) => res.data)
      .catch((err) => {
          navigate("/error")
      })
});


  const debouncedValue = useDebounce(searchName, 500)

  const { data: searchResult, isLoading, refetch } = useQuery(["searchUserValues", debouncedValue], () => 
    // return axiosinstance.get("/searchuser/" + debouncedValue, {
    //   headers: {
    //     "x-access-token": localStorage.getItem("token"),
    //   },
    // }).then((res) => res.data)
    //   .catch((err) => {
    //     // navigate("/error")
    //     console.log(err);

    //   })
    search_user(debouncedValue)

  )
  // console.log("dataaaa", searchResult);


  const handleSearch = (e: any) => {
    // console.log(e.target.value)
    if (e.target.value) {
      setSearchAncher(e.currentTarget)
      setOpens(true)
      refetch()
    } else {
      setOpens(false)
    }
    console.log("Search anem", searchAncher);
    setSearchName(e.target.value)

  }

  // GO TO PROFILE ACCOUNT

  const handleFriendProfile = (item:any) => {
    console.log(item?._id);

    if(item?.userId?._id === userId) {
      navigate("/profile")
  } else{
       dispatch(passfriendDetails(item))
  navigate("/fried-Profile")
  }
    
  }

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
                            <input
                              type="search"
                              onChange={handleSearch}
                              className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal
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

                      {/* Search content */}
                    {searchName ? 
                    
                    <>
                     { searchResult && searchResult?.map((item: any, index: number) => (
                          <div className='pt-4 flex gap-3'>
                            {/* {data?.map((Post:any) => (
                              <> */}
                              <div>
                              <img onClick={() => handleFriendProfile(item)} className=" w-14 h-14 rounded-full object-cover  dark:ring-gray-500" src={`/images/${item?.Images}`} alt="Bordered avatar" />
                            </div> 
                              {/* </>
                            ))} */}
                            
                            <div>
                              <div className='text-sm text-gray-300'>{item?.username}</div>
                              <div className='text-sm text-gray-600'>{item?.name}</div>
                            </div>

                          </div>
                        ))}
                    </> 
                    :
                     <div>
                        <div className='w-20 h-20 pl-3'>No User</div>
                     </div>
                    }
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