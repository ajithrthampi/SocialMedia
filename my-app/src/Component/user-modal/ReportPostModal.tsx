import axios from 'axios'
import { log } from 'console'
import React, { useContext, useState } from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { IoMdClose } from 'react-icons/io'
import axiosinstance from '../../axios/axiosinstance'
import { UserContext } from '../../Pages/context/Context'

interface modal {
  isVisible: boolean
  onClose: () => void
  children: any
  reportState: any
}

const ReportPostModal = ({ isVisible, onClose, reportState }: modal) => {
  // console.log("report data", reportState);

  const [reportThanks, setReportThanks] = useState(false)
  const [reportPostId, setReportPostId] = useState('')
  const [reportDetails, setReportDetails] = useState(false)
  const { user } = useContext(UserContext)

  //REPORT POST

  const report = (text: string) => {
    const userId = user?.id
    console.log("report statetettetetette",userId);
    
    const details = { reportState, userId }
    // console.log("detailss.....",details);

    axios.post("http://localhost:4001/report/"+text,details, {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
      
    }).then((response) => {
      console.log("logged");
      console.log(response, 'resssssss');
      if (response.data.msg === 'reported') {
       
        //  onClose()
         setReportThanks(true) 
      }
    }).catch((err) => {
      // navigate('/error')
      console.log('Error',err);

    })
  }

  const closeModal = () => {
    setReportThanks(false)
    onClose()
  }

  if (!isVisible) return null
  return (
    <>

      <div className='fixed  inset-0 bg-black bg-opacity-25 backdrop-blur-sm
               md:flex justify-center items-center pt- md:pt-0'>
        <div className=' flex flex-col'>
          <button className='text-white '
            onClick={() => onClose()} >
            <IoMdClose size={25} />
          </button>
          <div className='flex justify-center items-center text-white'>

            <div className='w-[400px] h-full bg-[#2A2A2A] p-3'>

              <div className='p-2 flex justify-center'>
                <h1>Report</h1>
              </div>
              <div className="mt- text-xs border-b border-[#5b5858] py-  text-[#002D74]"></div>
              <div className='p-2'>why are you reporting this post?</div>
              <div className='max-h-screen overflow-y-scroll scroll-smooth scrollbar-none pb-24'>
              <div className=' flex flex-col gap-7 text-sm p-2 cursor-pointer'>
                <div className='' onClick={() => report("t is a scam")}>It is a scam</div>
                <div className='' onClick={() => report("Violence or dangerous signal")}>Violence or dangerous signal</div>
                <div className='' onClick={() => report("Sale of illegal goods")}>Sale of illegal goods</div>
                <div className='' onClick={() => report("Bullying or harrassment")}>Bullying or harrassment</div>
                <div className='' onClick={() => report("Suicide or life injury")}>Suicide or life injury</div>
                <div className='' onClick={() => report("False information")}>False information</div>
                <div className='' onClick={() => report("Fraud contents")}>Fraud contents</div>
                <div className='' onClick={() => report("I just dont like this")}>I just dont like this</div>
              </div>
            </div>
            </div>
          </div>

        </div>
      </div>

      {reportThanks&&<div id="popup-modal" className="overflow-y-auto fixed top-0 right-0 left-0 backdrop-blur-sm z-50 md:inset-0 h-modal  md:h-full justify-center items-center" aria-hidden="true">
                <div className="relative mx-auto mt-36 w-full max-w-sm h-full md:h-auto">
                    <div className="relative bg-white border-2 border-black  m-2 rounded-lg shadow-md ">
                        <h1 className=' mt-4 text-green-500 text-2xl text-center px-auto'>Report Success</h1><hr className='border-black mt-2'/>
                        <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal" onClick={closeModal}>
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span className="sr-only" >Close modal</span>
                        </button>
                        <div className="p-6  w-full">
                
                            <AiOutlineCheckCircle color='green' size='100px' className='mx-auto'/>
                            <h1 className=" text-xl font-normal text-center text-black w-full">Thanks for letting us know</h1>
                            <p className=" text-sm font-normal text-center text-slate-500 w-full" >Your feedback is important in helping us keep the SeeChat community safe.</p>
                        </div>
                    </div>
                </div>
            </div>}



    </>
  )
}

export default ReportPostModal