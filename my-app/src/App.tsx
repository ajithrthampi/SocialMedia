import React from 'react';
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
import Message from './Pages/userpages/message/Message';
import Notification from './Pages/userpages/notification/Notification';
import Connection from './Pages/userpages/connection/Connection';
import EditProfile from './Pages/userpages/profile/EditProfile';
import Profile from './Pages/userpages/profile/Profilee';
import EditUserModal from './Component/user-modal/EditUserModal';
import Example from './Pages/userpages/notification/Notification';
import Sample from './Component/User/Sample';




function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/" element={<Login />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/message" element={<Message />} />
          <Route path="/connection" element={<Connection />} />
          <Route path="/sample" element={<Sample />} />
      

          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/adminhome" element={<AdminHome />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
