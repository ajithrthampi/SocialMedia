import React from 'react'

const ProfileSkeleton = () => {
    return (
        <>
            <div className=" border border-[#3b3838] shadow rounded-md p-4 ! w-full ">
                <div className="animate-pulse flex justify-center items-center  gap-24">
                    <div className="rounded-full bg-[#3b3838] h-32 w-32"></div>
                    <div className=" space-y-6 py-1">
                        <div className="h-2 bg-[#3b3838] rounded w-[400px]"></div>
                        <div className="space-y-3">
                            <div className="grid grid-cols-3 gap-4">
                                <div className="h-2 bg-[#3b3838] rounded col-span-2"></div>
                                <div className="h-2 bg-[#3b3838] rounded col-span-1"></div>
                            </div>
                            <div className="h-2 bg-[#3b3838] rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileSkeleton