import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {

    const [admin, setAdmin] = useState({
        username: '',
        password: ''
    })

    const navigate = useNavigate()
    const [loginErr, setLoginErr] = useState(false)
    console.log("adminnnnnnnnnnnnnnnnnnnnnnnnn", admin);
    const handleChange = (e: any) => {
        const { name, value } = e.target
        setAdmin({
            ...admin,
            [name]: value
        })
    }

    const submit = (e: any) => {
        e.preventDefault()
        const { username, password } = admin
        // if(username && password){
        console.log('inside if');
        axios.post("http://localhost:4001/admin/login", admin).then((response) => {
            console.log('inside axios');
            console.log(response.data,'response in login');
            console.log(response.data.msg,"sdvsvsvsvvsv");
            localStorage.setItem("tokenn", response.data.token)
            if (response.data.msg == "login") {
                console.log('in login if');
                navigate('/adminhome')
            } else {
                console.log('nologin');
                setLoginErr(true)
                e.preventDefault()
            }
        })
    }
    return (
        <>

            <div className="relative w-full h-screen bg-zinc-900/90">
                <img className='absolute w-full h-full object-cover mix-blend-overlay'
                    //  src={LoginImage}
                    src="https://images.pexels.com/photos/2098428/pexels-photo-2098428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="/" />

                <div className='flex justify-center items-center h-full '>
                    <form className=" rounded-lg max-w-[400px] w-full mx-auto bg-white p-12"
                    // onSubmit={handleSubmit}
                    >
                        <h2 className='text-4xl font-bold text-center text-black py-4 relative p-8 '> Admin Login</h2>
                        <div className="text-red-600">{loginErr ? "Invalid username or password" : ""}</div>
                        <div className='flex justify-between'>
                            {/* <p>Icon facebook</p>
                    <p></p> */}
                        </div>
                        {/* <div className='text-red-500 relative'>{error}</div> */}

                        <div className='flex flex-col mb-4'>
                            <label className='relative '>Email</label>
                            <input
                                className=' rounded-lg border relative bg-gray-100 p-2'
                                type="text"
                                name="email"
                                // defaultValue={emails}
                                onChange={handleChange}

                            />
                        </div>

                        <div className='flex flex-col mb-4'>
                            <label className='relative'>Password</label>
                            <input
                                className='rounded-lg border relative bg-gray-100 p-2'
                                type="password"
                                name="password"
                                // defaultValue={password}
                                onChange={handleChange}
                            />
                        </div>

                        <button className=' rounded-lg text-white w-full py-3 mt-8  bg-indigo-600 hover:bg-indigo-500 relative '
                            onClick={submit}
                        >
                            Log In
                        </button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default AdminLogin