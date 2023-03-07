import React from 'react'

const Loading = () => {
    return (
        <>
            <div className="flex h-screen items-center justify-center">
                <button type="button" className="roundedmd flex justify-center items-center gap-2 rounded-xl bg-indigo-500 px-10 py-3">
                    <div
                        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current text-white border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
                        role="status">

                    </div>
                    <div className="text-xl text-white">Processing...</div>
                </button>
            </div>

        </>
    )
}

export default Loading