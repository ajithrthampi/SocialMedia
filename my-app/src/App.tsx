import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PostLarge from './Component/post/PostLarge';
import Profile from './Pages/profile/Profile';
import HomePage from './Pages/homepages/HomePage';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';


function App() {
  return (
    <div className="App">
       <Router>
       <Routes>
        <Route path="/signup" element={<Signup/>}  />
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/profile" element={<Profile/>} />
        {/* <Route path="profile" element={<Profile/>} /> */}
        

       </Routes>
      </Router>
    </div>
  );
}

export default App;
