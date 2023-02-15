import React from 'react'
import Layout from '../../../Component/layout/Layout'
import Navbar from '../../../Component/navbar/Navbar'


const Connection = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <div className='lg:w-4/5 xl:lg:w-3/5  w-1/2 sm:w-full '>
          <div className=' pb-24'>
            <div className='flex justify-center items-center  text-xl text-white '>
              <div className='bg-[#2A2A2A] w-full h-[643px] rounded-3xl'>
                <div className='flex flex-col items-center justify-center pt-6  '>
                <input
                  type="search"
                  // onChange={handleSearch}
                  className="form-control relative block w-96 px-3 py-1.5 text-base font-normal
                             text-gray-700 bg-[#7069695d] bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
                              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon2"
                />

                <div className='flex flex-row gap-5 p-10'>
                  <button className='bg-[#FFFF1A] rounded-lg py-2 px-7 text-sm font-semibold text-black hover:bg-yellow-400'>Followers</button>
                  <button className='bg-[#FFFF1A] rounded-lg py-2 px-7 text-sm font-semibold text-black hover:bg-yellow-400'>Following</button>
                </div>
            
                  <div className='bg-[#1A1A1A] w-[650px] h-[430px] flex justify-center  gap-6 '>
                    <div>dskmkfnn</div>
                  </div>
                  {/* <div>sdjdnvskj</div> */}
          
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Connection