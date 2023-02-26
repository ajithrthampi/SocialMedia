import React, { useEffect, useState } from 'react'
import axiosinstance from '../../../axios/axiosinstance'

const PostManagement = () => {
  const [viewPost, setViewPost] = useState<any>()
  const [reportDetails,setReportDetails] = useState<any>()
  const [reportModal,setReportModal] = useState<boolean>(false)
  const [reportInstant,setReportInstant] = useState(false)

  useEffect(() => {
    axiosinstance.get("/admin/viewposts").then((response) => {

      setViewPost(response.data)
    })
  }, [reportInstant])
  // console.log("viewPost", viewPost);


  // Report Details
  const viewReportDetails = (post: any) => {
    console.log(post);
    const postId = post
    try {
      axiosinstance.get("/admin/reportdetails/" + postId).then((response) => {
        setReportDetails(response.data)
        setReportModal(true)
      })
    } catch (error) {
      console.log(error);
    }

  }
  console.log("reportDetails",reportDetails);
  

  //Report post

  const reportPost = (Id: any) => {
     try{
      const postId = Id
      axiosinstance.post("/admin/reportpost/" +postId ).then((response) => {  
        console.log(response);
        
        setReportInstant(!reportInstant)
      })
     }catch(err){
      console.log(err);
    }
  }
  // Unreport Post
  
  const unReportPost = (Id: any) => {
    try{
      const postId = Id
      axiosinstance.post("/admin/unreportpost/"+postId).then((response)=>{
        setReportInstant(!reportInstant)
      })
    }catch(err){
      console.log(err);
    }
  }


  return (

    <>
      <div className='text-3xl font-semibold text-white'>Post Management</div>

      {/* <template> */}
      <div className="flex flex-col pt-14 max-h-[620px] overflow-y-scroll scroll-smooth scrollbar-none">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-white border-b">
                  <tr className=''>
                    <th scope="col" className="text-md font-medium text-gray-900 px-6 py-4 text-left">
                      Sl.No
                    </th>
                    <th scope="col" className="text-md font-medium text-gray-900 px-6 py-4 text-left">
                      Post
                    </th>
                    <th scope="col" className="text-md font-medium text-gray-900 px-6 py-4 text-left">
                      User
                    </th>
                    <th scope="col" className="text-md font-medium text-gray-900 px-6 py-4 text-left">
                      Report Count
                    </th>
                    <th scope="col" className="text-md font-medium text-gray-900 px-6 py-4 text-left">
                      Report Details
                    </th>
                    <th scope="col" className="text-md font-medium text-gray-900 px-6 py-4 text-left">
                      Action
                    </th>
                    {/* <th scope="col" className="text-md font-medium text-gray-900 px-6 py-4 text-left">
                  Verification
                </th> */}
                  </tr>
                </thead>
                <tbody>
                  {viewPost?.map((post: any, index: number) => (


                    <tr
                      key={index}
                      className="bg-gray-100 border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {index + 1}
                      </td>
                      <td className="text- text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
                        <div className='w-12 h-12 rounded-xl overflow-hidden mt-2'>
                          <img className=''
                            src={`/images/${post.Images}`}
                            alt="" />
                        </div>
                      </td>
                      <td className="text- text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
                        {post.userId.name}
                      </td>
                      <td className="text-sm text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
                        {post.reportCount}
                      </td>
                      <td className="text-sm text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
                        {post.reportCount === 0 ?
                          <button className='bg-blue-600 approve px-5 py-1 rounded-md text-white' onClick={() => viewReportDetails(post._id)} disabled>
                            View All
                          </button>
                          :
                          <button className='bg-blue-600 approve px-5 py-1 rounded-md text-white' onClick={() => viewReportDetails(post._id)}>
                            View All
                          </button>
                        }
                      </td>

                      {post.reportStatus ? <td className="py-4 px-6 text-center">
                        <button className='bg-red-600 approve px-5 py-1 rounded-md text-white' onClick={() => reportPost(post._id)}>Report</button>
                      </td>
                        :
                        <td className="py-4 px-6 text-center">
                          <button onClick={() => {
                            unReportPost(post._id)
                          }} className='bg-green-600 approve px-5 py-1 rounded-md text-white'>Cancel</button>
                        </td>}

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* /MOdal */}

            {reportModal && <div id="popup-modal"  className="overflow-y-auto fixed top-0 right-0 left-0 backdrop-blur-sm z-50 md:inset-0 h-modal  md:h-full justify-center items-center" aria-hidden="true">
              <div className="relative mx-auto mt-36 w-full max-w-xl h-max md:h-auto">
                <div className="relative bg-white border-2 border-black  m-2 rounded-lg shadow-md ">
                  <h1 className=' mt-4 text-red-500 text-2xl text-center px-auto' >Report Details</h1><hr className='border-black mt-2' />
                  <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal" onClick={() => setReportModal(false)}>
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" ></path></svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                  <div className="p-6  w-full">






                    <div className='h-48 overflow-x-auto'>
                      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 scroll-table">
                        <thead className="text-xs text-gray-700 uppercase colorclass dark:bg-gray-700 dark:text-gray-400">


                          <tr>
                            <th scope="col" className="py-3 px-6 text-center">
                              Sl.No
                            </th>
                            <th scope="col" className="py-3 px-6 text-center">
                              User
                            </th>
                            <th scope="col" className="py-3 px-6 text-center">
                              Reason
                            </th>

                            {/* <th scope="col" class="py-3 px-6">
                    Block
                </th> */}
                          </tr>
                        </thead>
                        <tbody>

                          {
                            reportDetails?.map((report:any, index:number) => (


                              <tr className="bg-white  border-b dark:bg-gray-800 dark:border-gray-700 colorclass item-center">
                                <th scope="row" className="py-4 px-6 text-center font-medium colorclass whitespace-nowrap dark:text-white">
                                  {index + 1}
                                </th>

                                <td className="py-4 px-6 text-center text-black">
                                  {report.reportDetails.name}
                                </td>
                                <td className="py-4 px-6 text-center text-red-500 ">
                                  {report.report.condition}
                                </td>
                              </tr>
                            ))
                          }
                        </tbody>
                      </table>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            }

          </div>
        </div>
      </div>
    </>
  )
}

export default PostManagement