import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'



const Signup = () => {
  const navigate = useNavigate()
  const { register, formState: { errors }, handleSubmit, } = useForm()
  const [user, setUser] = useState({
    username: '',
    email: '',
    // phone: '',
    password: '',
    name: ''
  })

  const [userExist, setUserExist] = useState(false)
  const handleChange = (e: any) => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
    console.log(user);
  }

  const authCheck = () => {
    axios.get("http://localhost:4000/isUserAuth", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    }).then((response) => {
      console.log(response, 'response jwt');
      if (!response.data.auth) {
        navigate('/user/home')
      }
    })
  }

  useEffect(() => {
    authCheck()
  }, [])

  const onSubmit = (data: any, e: any) => {
    console.log("data", data);
    try {

      const { username, email, password, name } = user
      if (username && email && password && name) {
        axios.post("http://localhost:4001/signup", user).then((response) => {
          console.log(response.data.msg);
          if (response.data.msg == "User exist") {
            setUserExist(!userExist)
            console.log(response.data.msg);
            console.log('user');
            navigate('/signup')
          } if (response.data.msg == "No user exist") {
            console.log("no user");
            console.log(response.data.msg);
            navigate('/')
          }
        })
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>

      <section className="b h-screen w-screen flex items-center justify-center  bg-gradient-to-r from-[#191819] to-[#3d3d3d] md:px-0 px-4">

        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5   items-center">
          <div className="md:w-1/2 px-8 md:px-16">
            <h2 className="font-bold text-2xl text-[#002D74]">Register</h2>

            <h1 className="pl-28 text-red-600 text-sm font-semibold">
              {userExist ? "Email already exist" : ""}
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              action="" className="flex flex-col gap-4">
              {/* <div> */}
                <input
                  className="p-2 mt-2 rounded-xl border"
                  type="text"
                  placeholder="Fullname"
                  {...register("name", { required: true })}
                  name="name"
                  onChange={handleChange}
                />
                <div className="text-red-600 text-sm font-semibold">
                  {errors.name?.type === "required" && "Name is required"}
                </div>
              {/* </div> */}

              {/* <div> */}
                <input
                  className="p-2 mt-2 rounded-xl border"
                  type="text"
                  placeholder="Username"
                  {...register("username", { required: true })}
                  name="username"
                  onChange={handleChange}
                />
                <div className="text-red-600 text-sm font-semibold">
                  {errors.username?.type === "required" && "Username is required"}
                </div>
              {/* </div> */}

              {/* <div> */}
                <input
                  className="p-2 mt-2 rounded-xl border"
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    required: true,
                    pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                  })}
                  name="email"
                  onChange={handleChange}
                />
                <div className="text-red-600 text-sm font-semibold">
                  {errors.email?.type === "required" && "Email is required"}
                  {errors.email?.type === "pattern" &&
                    "Entered email is in wrong format"}
                </div>
              {/* </div> */}

              {/* <div> */}
                <div className="relative">
                  <input
                    className="p-2 rounded-xl border w-full"
                    type="password"
                    placeholder="Password"
                    {...register("password", {
                      required: true,
                      maxLength: 12,
                      minLength: 5
                    })}
                    name="password"
                    onChange={handleChange}
                  />
                  <div className="text-red-600 text-sm font-semibold">
                    {errors.password?.type === "minLength" && "Entered number is less than 6 digits"}
                    {errors.password?.type === "maxLength" && "Entered nuber is more than 12 digits"}
                    {errors.password?.type === "required" && "Password is required"}
                  </div>
                {/* </div> */}

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2" viewBox="0 0 16 16">
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                </svg>
              </div>
              <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">Login</button>
            </form>

            {/* <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
              <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px">
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
              </svg>
              Login with Google
            </button> */}

            <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
            </div>

            <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
              <p className="text-xs mt-4 md:px-0 px-7 text-[#002D74]">If you are already a member, easily log in</p>
              <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300"><Link to="/">Login</Link></button>
            </div>
          </div>


          <div className="relative w-1/2 md:block hidden  bg-zinc-900/70 rounded-2xl ">
            <img className=" object-cover mix-blend-overlay " src="https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=600" />

            <div className='  flex justify-center  items-center '>
              <div className='absolute text-5xl text-white top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 caret-transparent' >Welcome</div>
              <div className='absolute bottom-64 text-gray-300  text-xs px-10 flex text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus consequatur quidem deleniti voluptatem iste optio voluptas um!</div>
            </div>-
          </div>
        </div>

      </section>

    </>
  )
}

export default Signup