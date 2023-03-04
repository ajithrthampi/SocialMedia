import { useQuery } from '@tanstack/react-query'
import jwtDecode from 'jwt-decode'
import React, { useContext, useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import axiosinstance from '../../axios/axiosinstance'
import { UserContext } from '../../Pages/context/Context'
import Connection from '../../Pages/userpages/connection/Connection'
import { view_post, view_Profile_Details } from '../../services/UserApi'
import Navbar from '../navbar/Navbar'
import PostFormCard from '../post/PostFormCard'
import ThirdFormDetails from '../post/ThirdFormDetails'
import Sidebar from '../sidebar/Sidebar'

const Layout = ({ children }: any) => {

  const [profileDetails, setProfileDetails] = useState<any>()
  const { user } = useContext(UserContext)
  const location = useLocation();
  const [userIdData, setUserIdData] = useState<any>()
  const [state, setState] = useState<boolean>()


  useEffect(() => {
    try {
      const data = localStorage.getItem('token')
      if (data != null) {
        const userData: any = jwtDecode(data)
        const userId = userData?.id
        setUserIdData(userId)
        setState(true)
      }
    } catch (error) {
      console.log("user id rreor", error);
    }
  }, [state,location])
  // console.log("userIdData userIdData",userIdData);
  
  

  // USER DATA

  const { data, isLoading, refetch } = useQuery(["Id"], () => 
    // return axiosinstance.get("viewpost", {
    //   headers: {
    //     "x-access-token": localStorage.getItem("token"),
    //   },
    // }).then((res) => res.data)
    //   .catch((err) => {
    //     // navigate("/error")
    //   })
    view_post()
  );

  console.log("mmmmmmmmmmmmmmmmmmmmmmmmmm..,.>,./,",data);
  



  //PROFILE DETAILS SENDING

  // useEffect(() => {
  //   try {
  //     // const userId = user?.id
  //     console.log("userId userId userId userId",userIdData);
      
  //     axiosinstance.get("/viewprofiledetails/" + userIdData, {
  //       headers: {
  //         "x-access-token": localStorage.getItem("token"),
  //       },
  //     }).then((response) => {
        
  //       setProfileDetails(response.data)
  //       refetch()

  //     })
  //   } catch (err) {
  
  //   }
  // }, [state])

  useEffect(() => {

    viewProfileDetails(userIdData)
}, [user,state])

const viewProfileDetails = async (userIdData:any) => {
   const viewProfileDetailsResponce = await view_Profile_Details(userIdData)
   setProfileDetails(viewProfileDetailsResponce)
 console.log("Navbar details....", viewProfileDetailsResponce);
}
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