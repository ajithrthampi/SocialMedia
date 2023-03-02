import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import UserProfile from './Component/User/UserProfile';
import HomePage from './Pages/homepages/HomePage';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import AdminLogin from './Pages/admin/AdminLogin';
import AdminHome from './Pages/admin/AdminHome';
import Error from './Pages/error/Error';
import BasicTable from './Component/table/BasicTable';
import PostModal from './Component/user-modal/PostModal';
import Search from './Pages/userpages/search/Search';
import Message from './Pages/userpages/message/mesageLargeScreen/Message';
import Notification from './Pages/userpages/notification/Notification';
import Connection from './Pages/userpages/connection/Connection';
import EditProfile from './Pages/userpages/profile/EditProfile';
import Profile from './Pages/userpages/profile/Profilee';
import EditUserModal from './Component/user-modal/EditUserModal';
import Example from './Pages/userpages/notification/Notification';

import { Context, UserContext } from './Pages/context/Context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import SkeletonElement from './skeleton/SkeletonElement';
import DownNavbar from './Component/navbar/DownNavbar';
import MessageMobile from './Pages/userpages/message/mesasegSmallScreen/MessageMobile';
import jwtDecode from 'jwt-decode';
import FriendProfile from './Component/User/FriendProfile';
import Dashboard from './Pages/admin/Pages/Dashboard';
import UserManagement from './Pages/admin/Pages/UserManagement';
import PostManagement from './Pages/admin/Pages/PostManagement';

const socketio = require('socket.io-client')("ws://localhost:8000")

function App() {


  const { user } = useContext(UserContext)
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

  }, [state])
  // console.log("LOgged datatass", userIdData);
//  console.log("lllllllllllllllllllllllllllllllllllllllllllllllllllll  ", user);


  useEffect(() => {
    socketio?.emit("addUser", userIdData?.id, userIdData?.name)
   
  }, [state])


  const client = new QueryClient();
  return (
    <div className="App overflow-hidden max-h-screen">
      <QueryClientProvider client={client}>
        <Router>
          {/* {userIdData ?
            <>

            </>
            :
            <>

            </>} */}
          {/* <DownNavbar /> */}
          <Context>
            <Routes>
              <Route path="*" element={<Error />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/" element={<Login />} />


              <Route path="/home" element={<HomePage  socket={socketio}  />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/message" element={<Message socket={socketio} />} />
              <Route path="/connection" element={<Connection />} />
              <Route path="/skeleton" element={<SkeletonElement />} />
              {/* <Route path="/messageee" element={<MessageMobile />} /> */}
              <Route path="/fried-Profile" element={<FriendProfile />} />



              <Route path="/adminlogin" element={<AdminLogin />} />
              <Route path="/adminhome" element={<AdminHome />} >
                <Route path="" element={<Dashboard />} />
                <Route path="usermanagement" element={<UserManagement />} />
                <Route path="postmanagement" element={<PostManagement />} />
              </Route>

            </Routes>
          </Context>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
