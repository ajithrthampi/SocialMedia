import React from 'react'

const SidebarSkeleton = () => {
    return (
        <>
            <div className="border border-[#3b3838] shadow rounded-md h-[643px] p-4 max-w-sm xl:w-1/5 hidd xl:max-w-[280px] xl:min-w-[270px] mx-auto">
                <div className='flex flex-col gap-10'>
                    <div className="animate-pulse flex space-x-4 ">
                        <div className="rounded-full bg-[#3b3838] h-10 w-10"></div>
                        <div className="flex-1 space-y-6 py-4">
                            <div className="h-2 bg-[#3b3838] rounded"></div>
                        </div>
                    </div>

                    <div className="animate-pulse flex space-x-4 ">
                        <div className="rounded-full bg-[#3b3838] h-10 w-10"></div>
                        <div className="flex-1 space-y-6 py-4">
                            <div className="h-2 bg-[#3b3838] rounded"></div>
                        </div>
                    </div>

                    <div className="animate-pulse flex space-x-4 ">
                        <div className="rounded-full bg-[#3b3838] h-10 w-10"></div>
                        <div className="flex-1 space-y-6 py-4">
                            <div className="h-2 bg-[#3b3838] rounded"></div>
                        </div>
                    </div>

                      <div className="animate-pulse flex space-x-4 ">
                        <div className="rounded-full bg-[#3b3838] h-10 w-10"></div>
                        <div className="flex-1 space-y-6 py-4">
                            <div className="h-2 bg-[#3b3838] rounded"></div>
                        </div>
                    </div>

                      <div className="animate-pulse flex space-x-4 ">
                        <div className="rounded-full bg-[#3b3838] h-10 w-10"></div>
                        <div className="flex-1 space-y-6 py-4">
                            <div className="h-2 bg-[#3b3838] rounded"></div>
                        </div>
                    </div>

                                                
                </div>
            </div>
        </>
    )
}

export default SidebarSkeleton