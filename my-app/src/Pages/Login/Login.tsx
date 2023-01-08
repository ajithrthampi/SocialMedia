import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>

      <section className="b h-screen  flex items-center justify-center  bg-gradient-to-r from-[#191819] to-[#3d3d3d] md:px-0 px-4">
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5   items-center">
          <div className="md:w-1/2 px-8 md:px-16">
            <h2 className="font-bold text-2xl text-[#002D74]">Login</h2>
            <form action="" className="flex flex-col gap-4">
              <input
                className="p-2 mt-2 rounded-xl border"
                type="email"
                name="email"
                placeholder="Fullname"
              />
              <input
                className="p-2 mt-2 rounded-xl border"
                type="password"
                name="password"
                placeholder="password"
              />
              <button className="bg-[#0d3980] rounded-xl text-white py-2 hover:scale-105 duration-300"><Link to="/home">Login</Link></button>
            </form>

            <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
            </div>
            <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
              <p className="text-xs mt-4 md:px-0 px-7 text-[#2b4e86]">If you are not a user ! please register   </p>
              <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300"><Link to="/signup">Signup</Link></button>
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