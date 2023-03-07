import React from 'react'

const ThirdFirstSkeleton = () => {
    return (
        <>
            <div className="border border-[#3b3838] shadow rounded-3xl p-4  mb-5  h-[370px] mx-auto">
                {/* <div className="animate-pulse flex space-x-4">
                    <div className="rounded-full bg-[#3b3838] h-10 w-10"></div>
                    <div className="flex-1 space-y-6 py-1">
                        <div className="h-2 bg-[#3b3838] rounded"></div>
                        <div className="space-y-3">
                            <div className="grid grid-cols-3 gap-4">
                                <div className="h-2 bg-[#3b3838] rounded col-span-2"></div>
                                <div className="h-2 bg-[#3b3838] rounded col-span-1"></div>
                            </div>
                            <div className="h-2 bg-[#3b3838] rounded"></div>
                        </div>
                    </div>
                </div> */}

                <div className="animate-pulse flex   justify-center space-x-4">
                    <div className="flex justify-center items-center rounded-3xl bg-[#3b3838] w-20 h-20  box-border"></div>
                </div>
                <div className="animate-pulse  flex flex-col gap-8 space-x-4">
                    <div className="flex flex-col gap-5 justify-center items-center  pt-6">
                        <div className="h-2 bg-[#3b3838]  rounded px-10 w-[200px]"></div>
                        <div className="h-2 bg-[#3b3838]  rounded px-10 w-[100px]"></div>
                    </div>
                    <div>
                        <div className="h-2 bg-[#3b3838] rounded"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ThirdFirstSkeleton