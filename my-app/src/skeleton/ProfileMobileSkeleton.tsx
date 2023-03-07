import React from 'react'

const ProfileMobileSkeleton = () => {
    return (
        <>
            <div className="md:hidden border border-[#3b3838] shadow rounded-md p-4  w-screen ">
                <div className='flex flex-row gap-10 items-center'>
                    <div className="rounded-full bg-[#3b3838] h-20 w-20 "></div>
                    <div className="h-2 bg-[#3b3838] rounded w-16 col-span-2"></div>
                    <div className="h-2 bg-[#3b3838] rounded w-16 col-span-2"></div>
                </div>
                <div className='flex flex-col gap-3 pt-7'>
                    <div className="h-2 bg-[#3b3838] rounded w-14 col-span-2"></div>
                    <div className="h-2 bg-[#3b3838] rounded w-14 col-span-2"></div>
                </div>

                <div className='pt-6 flex flex-col gap-3'>
                    <div className="h-2 bg-[#3b3838] rounded-md col-span-2 py-4"></div>
                    <div className="h-2 bg-[#3b3838] rounded-md col-span-2 py-4"></div>
                </div>
                <div>
                    <div className="h-1 bg-[#3b3838] rounded col-span-2 mt-7 "></div>
                </div>

                <div className='pt-10 flex gap-1 justify-center items-center '>
                    <div className=" bg-[#3b3838] rounded-md w-28 h-28 py-4"></div>
                    <div className=" bg-[#3b3838] rounded-md w-28 h-28 py-4"></div>
                    <div className=" bg-[#3b3838] rounded-md w-28 h-28 py-4"></div>
                </div>
            </div>
        </>
    )
}

export default ProfileMobileSkeleton