import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import axiosinstance from '../../axios/axiosinstance'

const ForgotPasswordOpt = () => {

    const [otpCheck, setOtp] = useState({ otp: '', password: '' })
    const [incorrectOtp, setIncorrectOtp] = useState(false)
    const navigate = useNavigate()
    const { register, formState: {
        errors
    }, handleSubmit } = useForm()



    const handleChange = (e: any) => {
        console.log('llll');
        const { name, value } = e.target
        setOtp({
            ...otpCheck,
            [name]: value
        })
    }

    const submit = () => {
        const { otp, password } = otpCheck
        axiosinstance.post("/otp", otpCheck).then((response) => {
            if (response.data.msg === "incorrect otp") {
                setIncorrectOtp(true)
            }
            if (response.data.msg === "otp verified") {
                navigate('/')
            }
        }).catch((err) => {
            navigate('/error')
        })
    }
    return (
        <>
            <div>
                <section className="b h-screen  flex items-center justify-center  bg-gradient-to-r from-[#191819] to-[#3d3d3d] md:px-0 px-4">
                    <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5   items-center">
                        <div className='w-[500px] '>

                        
                            <div className='py-5 px-5 flex flex-col gap-4'>
                                <form onSubmit={handleSubmit(submit)}>
                                    <div>
                                        <div>Enter Otp</div>
                                        <input
                                            {...register("otp", { required: 'Otp is required' })}
                                            className="p-2 mt-2 rounded-xl border w-full border-yellow-500"
                                            type="password"
                                            name="otp"
                                            placeholder="XXXX"
                                            onChange={handleChange}
                                        />

                                    </div>
                                    <div>
                                        <div>Enter password</div>
                                        <input
                                            {...register("password", { minLength: 3, required: true })}
                                            className="p-2 mt-2 rounded-xl border w-full border-yellow-500"
                                            type="password"
                                            name="password"
                                            placeholder="password"
                                            onChange={handleChange}
                                        />
                                        <div className="text-red-600">
                                            {errors.password?.type === "minLength" && "Password must be atleast 3 digit"}
                                            {errors.password?.type === "required" && "Password is required"}
                                        </div>
                                    </div>
                                    <div className='px-5 pt-4'>
                                        <button className="bg-[#0d3980] rounded-xl text-white py-2 w-full hover:scale-105 duration-300">Reset Password</button>
                                    </div>
                                </form>

                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default ForgotPasswordOpt