import React from 'react'

const MainSkeleton = () => {
    return (
        <>
            <div className="border border-blue-300 shadow rounded-md p-4 lg:w-5/5 h-[481px] ">
                <div className="animate-pulse flex space-x-4">
                    <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                    <div className="flex-1 space-y-6 py-1">
                        <div className="h-2 bg-slate-700 rounded"></div>
                        <div className="space-y-3">
                            <div className="grid grid-cols-3 gap-4">
                                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                            </div>
                            <div className="h-2 bg-slate-700 rounded"></div>
                        </div>
                    </div>
                </div>
                <div className="border border-blue-100 shado rounded-md  mt-4  mx-auto  h-[350px] ">
                    <div className="animate-pulse flex space-x-4">
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainSkeleton