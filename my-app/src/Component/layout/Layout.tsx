import { useQuery } from '@tanstack/react-query'
import React, { useContext, useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import axiosinstance from '../../axios/axiosinstance'
import { UserContext } from '../../Pages/context/Context'
import Connection from '../../Pages/userpages/connection/Connection'
import Navbar from '../navbar/Navbar'
import PostFormCard from '../post/PostFormCard'
import ThirdFormDetails from '../post/ThirdFormDetails'
import Sidebar from '../sidebar/Sidebar'

const Layout = ({ children }: any) => {

  const [profileDetails, setProfileDetails] = useState<any>()
  const { user } = useContext(UserContext)
  const location = useLocation();

  // USER DATA

  const { data, isLoading, refetch } = useQuery(["Id"], () => {
    return axiosinstance.get("viewpost", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    }).then((res) => res.data)
      .catch((err) => {
        // navigate("/error")
      })
  });

  useEffect(() => {
    try {
      const userId = user.id
      axiosinstance.get("/viewprofiledetails/" + userId, {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      }).then((response) => {
        console.log(response.data[0].name, 'yesyesyesyes');
        setProfileDetails(response.data)
        refetch()

      })
    } catch (err) {
      // navigate('/error')
      console.log("Eror message...", err);

    }
  }, [user])

  return (
    <div className='hidden md:block  px-8  '>
      <div className='flex -mt-3  mx-auto gap-6  '>
        <Sidebar />
        {(location.pathname === "/profile") ? (
          <>
            {children}
          </>
        ) : (location.pathname === "/message") ? (
          <>
            {children}
          </>
        ) : (location.pathname === "/fried-Profile") ? (
          <>
            {children}
          </> 
         ):
        <>
          {children}
          <ThirdFormDetails profileDetails={profileDetails} data={data} />
        </>}

      </div>
    </div>
  )
}

export default Layout