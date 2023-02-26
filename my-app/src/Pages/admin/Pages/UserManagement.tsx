import React, { useEffect, useReducer, useState } from 'react'
import Swal from 'sweetalert2'
import axiosinstance from '../../../axios/axiosinstance'

const UserManagement = () => {

  const [user, setUser] = useState([])
  const [status, setStatus] = useReducer((state: any, action: any) => {
    return action;
  }, false);

  useEffect(() => {

    async function viewUser() {
      const userData = await axiosinstance.get("/admin/users")
      if (userData) {
        setUser(userData.data)
      }
    }
    viewUser()
  }, [status])

  console.log("user...", user);

  const block = (e: any, id: any) => {
    Swal.fire({
      title: "Block",
      text: "Are you sure you want to block the user?",
      icon: "success",
      confirmButtonText: "OK",
      showCancelButton: true
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(id);
        axiosinstance.post("/admin/block/" + id)
        setStatus(!status)
      }
    })
  }

  const Unblock = (e: any, id: any) => {
    Swal.fire({
      title: "Unblock",
      text: "Are you sure you want to unblock the user?",
      icon: "success",
      confirmButtonText: "OK",
      showCancelButton: true
    }).then((result) => {
      if (result.isConfirmed) {
        axiosinstance.post("/admin/unblock/" + id)
        setStatus(!status)
      }
    })
  }

  const Approve = (e: any, id: any) => {
    Swal.fire({
      title: "Verify",
      text: "Are you sure you want to verify the user?",
      icon: "success",
      confirmButtonText: "OK",
      showCancelButton: true
    }).then((result) => {
      if (result.isConfirmed) {
        axiosinstance.post("/admin/verify/" + id).then((res) => {
          console.log(res);
          
        })
        setStatus(!status)
      }
    })
  }


  return (
    <>

      <div className='text-3xl font-semibold text-white'>User Management</div>

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
                      Image
                    </th>
                    <th scope="col" className="text-md font-medium text-gray-900 px-6 py-4 text-left">
                      Name
                    </th>
                    <th scope="col" className="text-md font-medium text-gray-900 px-6 py-4 text-left">
                      Email
                    </th>
                    <th scope="col" className="text-md font-medium text-gray-900 px-6 py-4 text-left">
                      Phone
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
                  {user?.map((users: any, index: number) => (

                    <tr key={index} className="bg-gray-100 border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {index + 1}
                      </td>
                      <td className="text- text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
                        <div className='w-12 h-12 rounded-xl overflow-hidden mt-2'>
                          <img className='' src={`/images/${users.Images}`} alt="" />
                        </div>
                      </td>
                      <td className="text- text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
                        {users.name}
                      </td>
                      <td className="text-sm text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
                        {users.email}
                      </td>
                      <td className="text-sm text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
                        {users.phone ? <>
                          {users.phone}
                        </>
                          :
                          <>
                            Phone number not given
                          </>
                        }
                      </td>
                      {users.userStatus ?
                        <td className="text-sm text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
                          <button onClick={(e) => {
                            block(e, users._id)
                          }} className='bg-red-600 approve px-5 text-white rounded-md py-1'>block</button>
                        </td>
                        :
                        <td className="text-sm text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
                          <button onClick={(e) => {
                            Unblock(e, users._id)
                          }} className='bg-green-600 approve px-5 text-white rounded-md py-1'>Unblock</button>
                        </td>}

                      {/* {users.verification === false ?
                        <td className="py-4 px-6">
                          <button onClick={(e) => {
                            Approve(e, users._id)
                          }} className='bg-green-600 approve'>Approve</button>
                        </td>
                        : users.verification === true ? <h1 className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                          Approved
                        </h1> :
                          <td className="py-4 px-6">

                          </td>} */}


                      {/* {users.applyVerification  === false ? <td className="py-4 px-6">

                        <button onClick={(e) => {
                          Approve(e, users._id)
                        }} className='bg-green-600 approve rounded-md py-1 px-5'>Approve</button>
                      </td>
                        : users.verification ? <h1 className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'>Approved</h1> :
                          <td className="py-4 px-6">
                            sddfdsf
                          </td>} */}

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* </template> */}

    </>
  )
}

export default UserManagement