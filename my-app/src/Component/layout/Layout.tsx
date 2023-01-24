import React from 'react'
import { Outlet } from 'react-router-dom'
import PostFormCard from '../post/PostFormCard'
import Sidebar from '../sidebar/Sidebar'

const Layout = ({ children }: any) => {
  return (
    <div className='hidden md:block  px-8 '>
      <div className='flex -mt-3  mx-auto gap-6'>
        <Sidebar />
        {children}
      </div>
    </div>
  )
}

export default Layout