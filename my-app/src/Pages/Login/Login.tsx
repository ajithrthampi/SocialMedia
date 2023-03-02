import axios from 'axios'
import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import axiosinstance from '../../axios/axiosinstance'
import { UserContext } from '../context/Context'

const Login = () => {
  const navigate = useNavigate()

  const [userExist, setUserExist] = useState(false)
  const [blockedUser, setBlockedUser] = useState(false)
  const [state, setState] = useState<boolean>(false)
  const [userIid, setUseriID] = useState<any>()

  const [userr, setUser] = useState({
    email: "",
    password: ""
  })

  const { user } = useContext(UserContext)

  if (user) {
    var userId = user?.id
}



  const handleChange = (e: any) => {
    const { name, value } = e.target
    setUser({
      ...userr,
      [name]: value
    })
  }

  const authCheck = () => {
    axiosinstance.get("/isUserAuth", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    }).then((response) => {
      // console.log(response, 'response jwt');
      if (response.data.auth) {
        navigate('/home')
      }
    }).catch((err) => {
      // navigate('/error')
    })
  }

  useEffect(() => {
    setUseriID(user?.name)
  },[state])
  console.log("userId.,.,.,.,.,.,.,.,", userIid);
  

  const submit = (e: any) => {
    e.preventDefault()
    const { email, password } = userr
    try {
      axiosinstance.post("/login", userr).then((response) => {
        // console.log("submitted");
      //  setState( response.data.user.email)
        // console.log(response.data, 'response in login');
        if (response.data.auth) {
          // console.log('user.....', response.data.user.email);
          console.log("state,.,.,",state)
          setState(true)
          localStorage.setItem("token", response.data.token)

          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: `Signed in successfully ${userIid}` 
          })
          navigate('/home')
        } else {
          if (response.data.message == "Wrong username password") {
            setUserExist(true)
          }
          if (response.data.message == "The user is blocked") {
            setBlockedUser(true)
          }
          if (response.data.message == "no user exists") {
            setUserExist(true)
          }
        }

      }).catch((err) =>
      console.log(err)
       
      
      )

    } catch (err) {
      // navigate('/error')
      console.log("error");

    }
    // }
  }

  useEffect(() => {
    authCheck()
  }, [])

  return (
    <div>

      <section className="b h-screen  flex items-center justify-center  bg-gradient-to-r from-[#191819] to-[#3d3d3d] md:px-0 px-4">
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5   items-center">

         

          <div className="md:w-1/2 px-8 md:px-16">
            <h2 className="font-bold text-2xl text-[#002D74]">Login</h2>
            <div className="text-red-600 text-center">
            {userExist?"Invalid email or password":""}
            {blockedUser?"The user is blocked":""}
          </div>

            <form action="" className="flex flex-col gap-4">
              <input
                className="p-2 mt-2 rounded-xl border"
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={handleChange}
              />

              <input
                className="p-2 mt-2 rounded-xl border"
                type="password"
                name="password"
                placeholder="password"
                onChange={handleChange}
              />
              <button className="bg-[#0d3980] rounded-xl text-white py-2 hover:scale-105 duration-300"
                onClick={submit}
              >Login</button>
            </form>

            <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
            </div>
            <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
              {/* <Link to="/home">  */}
              <p className="text-xs mt-4 md:px-0 px-7 text-[#2b4e86] cursor-default">If you are not a user ! please register   </p> 
              {/* </Link> */}

              <Link to="/signup">
                <button
                  className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300"
                >
                  Signup
                </button>
              </Link>
            </div>
          </div>
          <div className="relative w-1/2 md:block hidden  bg-zinc-900/70 rounded-2xl ">
            <img className=" object-cover mix-blend-overlay " src="https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <div className='  flex justify-center  items-center '>
              <div className='absolute text-5xl text-white top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2' >Welcome</div>
              <div className='absolute bottom-64 text-gray-300  text-xs px-10 flex text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus consequatur quidem deleniti voluptatem iste optio voluptas um!</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Login