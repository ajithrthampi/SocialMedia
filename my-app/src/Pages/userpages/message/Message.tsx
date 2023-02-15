import React from 'react'
import Layout from '../../../Component/layout/Layout'
import Navbar from '../../../Component/navbar/Navbar'
import MessageMobile from './MessageMobile'
import MessageMobileProfile from './MessageMobileProfile'

const Message = () => {
  return (
    <>

      <Navbar />
      <Layout>
        <div className='lg:w-4/5 xl:w-5/5  w-1/2 sm:w-full sm:hidden md:block'>
          <div className=' pb-24'>
            <div className='flex justify-center items-center  text-xl text-white '>
              <div className='bg-[#2A2A2A] w-full h-[643px] rounded-3xl'>
                <div className='grid lg:grid-cols-6 grid-cols-7'>

                  {/* First Part */}

                  <div className='lg:col-span-2 col-span-3'>
                    <div className='flex justify-center items-center pt-4'>
                      <input
                        type="search"
                        // onChange={handleSearch}
                        className="form-control relative block w-64 px-3  py-1.5 text-base font-normal 
                      text-gray-700 bg-[#7069695d] bg-clip-padding border border-solid border-gray-300 rounded-full transition ease-in-out m-0
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="button-addon2"
                      />
                    </div>
                    <div className="mt- text-xs border-b border-[#5b5858] py-3 text-[#002D74]"></div>


                    {/* Profile */}
                    <div className='flex flex-col gap-2  max-h-[550px] overflow-y-scroll scroll-smooth scrollbar-none'>
                      <div>
                        <div className='flex gap-3 p-3 justify-between'>
                          <div className='flex gap-4'>
                            <div className='lg:w-12 lg:h-12 md:w-8 md:h-8 rounded-full overflow-hidden cursor-pointer'>
                              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA0BrKaI0cwXl3-wpk6Fu2gMbrP1LKk6waAlhKhrTzTobcVlka34MsNf4Yp3k1tG4ufTY&usqp=CAU' alt="profilepic" />
                            </div>
                            <div className='flex flex-col gap-1'>
                              <div className='lg:text-base md:text-xs font-medium'>Ajith R Thampi</div>
                              <h4 className='text-xs'>can you send it to me</h4>
                            </div>
                          </div>
                          <div className='flex flex-col'>
                            <div className='text-xs '>today</div>
                            <div className='text-xs'>11:50</div>
                          </div>
                        </div>


                        {/* Profile second */}

                        <div className='flex gap-3 p-3 justify-between'>
                          <div className='flex gap-4'>
                            <div className='lg:w-12 lg:h-12 md:w-8 md:h-8 rounded-full overflow-hidden cursor-pointer'>
                              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA0BrKaI0cwXl3-wpk6Fu2gMbrP1LKk6waAlhKhrTzTobcVlka34MsNf4Yp3k1tG4ufTY&usqp=CAU' alt="profilepic" />
                            </div>
                            <div className='flex flex-col gap-1'>
                              <div className='lg:text-base md:text-xs font-medium'>Ajith R Thampi</div>
                              <h4 className='text-xs'>can you send it to me</h4>
                            </div>
                          </div>
                          <div className='flex flex-col'>
                            <div className='text-xs '>today</div>
                            <div className='text-xs'>11:50</div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                  {/* Second Part */}

                  <div className='lg:col-span-4 col-span-4 bg-[#111111] h-[643px]'>
                    <div>
                      <div className='w-full  bg-[#353535]  p-3 flex gap-2 h-[79px]'>
                        <div className='lg:w-12 lg:h-12 md:w-8 md:h-8 rounded-full overflow-hidden cursor-pointer'>
                          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA0BrKaI0cwXl3-wpk6Fu2gMbrP1LKk6waAlhKhrTzTobcVlka34MsNf4Yp3k1tG4ufTY&usqp=CAU' alt="profilepic" />
                        </div>
                        <div className='flex flex-col'>
                          <div className=' text-lg'>Ajay R Thampi</div>
                          <div className=' text-xs'>online now</div>
                        </div>
                      </div>
                    </div>

                    {/* Message chat content */}

                    <div id="messages" className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
                      <div className="chat-message">
                        <div className="flex items-end">
                          <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                            <div><span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">Can be verified on any platform using docker</span></div>
                          </div>
                          <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile"
                            className="w-8 h-8 rounded-full order-1" />
                        </div>
                      </div>

                      <div className="chat-message">
                        <div className="flex items-end justify-end">
                          <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                            <div><span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">Your error message says permission denied, npm global installs must be given root privileges.</span></div>
                          </div>
                          <img src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" 
                          className="w-6 h-6 rounded-full order-2"/>
                        </div>
                      </div>
                    </div>



                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>

      <MessageMobileProfile/>

    </>
  )
}

export default Message