import axios from 'axios'
import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Layout from '../../Component/layout/Layout'
import DownNavbar from '../../Component/navbar/DownNavbar'
import Navbar from '../../Component/navbar/Navbar'
import Post from '../../Component/post/Post'
import PostFormCard from '../../Component/post/PostFormCard'
import Connection from '../userpages/connection/Connection'

interface Socket_io {
  socket: any
  
 }

const HomePage = ({socket}:Socket_io) => {

  const navigate = useNavigate()

  const authCheck = () => {
    axios.get("http://localhost:4001/isUserAuth", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    }).then((response) => {
      console.log(response, 'response jwt');
      if (!response.data.auth) {
        navigate('/')
      }
    }).catch((err) => {
      navigate('/error')
    })
  }

  useEffect(() => {
    // authCheck()
  }, [])

  return (
    <>
      <div className='max-h-screen overflow-hidden '>
        <Navbar />
        
        <Post />
        
        <Layout>
          <PostFormCard socket = {socket}  />
        </Layout>
        {/* <DownNavbar /> */}
      </div>
    </>
  )
}

export default HomePage