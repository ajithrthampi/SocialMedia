import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import axiosinstance from '../../axios/axiosinstance'

const ForgotPassword = () => {

    const { register, formState: { errors }, handleSubmit } = useForm()
    const [error, setError] = useState(false)
    const navigate = useNavigate()
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e: any) => {
        console.log('llll');
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })

    }

    const submit = () => {
        const { email, password } = user
        if (email) {
            console.log('in axios');
            axiosinstance.post("/forgotpassword", user).then((response) => {
                if (response.data.msg == "ChangePassword") {
                    navigate('/otp')
                } else {
                    setError(true)
                }
            }).catch((err) => {
                navigate('/error')
            })
        }
    }
    return (
        <>
            <div>
                <section className="b h-screen  flex items-center justify-center  bg-gradient-to-r from-[#191819] to-[#3d3d3d] md:px-0 px-4">
                    <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5   items-center">
                        <div className='md:w-[550px]  md:h-[250px] w-[300px] h-[200px]'>
                            <form onSubmit={handleSubmit(submit)}>
                                <div className='mt-10 px-5'>
                                {error && <h1 className=' flex justify-center items-center mx-28 mb-4 text-red-600'>Invalid Email Address</h1>}
                                    <div>Email</div>
                                    <input
                                        className="p-2 mt-2 rounded-xl border w-full border-yellow-500"
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        onChange={handleChange}
                                    />
                                     {/* {errors.email&&(<small className='text-red-500'>{errors.email.message}</small>)} */}
                                </div>

                                <div className='px-5 pt-2'>
                                    <button className="bg-[#0d3980] rounded-xl text-white py-2 w-full hover:scale-105 duration-300">Reset Password</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default ForgotPassword