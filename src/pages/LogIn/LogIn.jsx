import bgImg from '../../assets/reservation/wood-grain-pattern-gray1x.png'
import img from '../../assets/others/authentication2.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { useEffect } from 'react';
import { FaFacebookF, FaGit, FaGithub, FaGoogle } from "react-icons/fa";

const LogIn = () => {
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    return (
        <div style={{ backgroundImage: `url("${bgImg}")` }} className='bg-center bg-cover h-auto  py-24'>
            <div style={{ boxShadow: '10px 10px 10px 10px rgba(0, 0, 0, 0.25)' }} className='lg:flex items-center justify-center gap-24 w-[90%] mx-auto h-auto p-24 '>
                <img className='flex-1' src={img} alt="" />
                <div className='flex-1'>
                    <form className='flex flex-col gap-5 w-full'>
                        <h2 className='text-[48px] text-center font-bold'>Login</h2>

                        <label className='text-[20px] text-[#444]' htmlFor="email" >Email</label>
                        <input className='px-6 py-5 rounded-lg' type="email" placeholder='Type here' />


                        <label className='text-[20px] text-[#444]' htmlFor="password">Password</label>
                        <input className='px-6 py-5 rounded-lg' type="password" placeholder='Enter your password' />


                        <LoadCanvasTemplate />
                        <input className='px-6 py-5 rounded-lg' type="text" placeholder='Type Here' />

                        <input className='px-6 py-5 rounded-lg bg-[#dbb984] text-white font-bold text-xl' type="submit" value="Sign In" />
                    </form>
                    <p className='text-[#D1A054] text-xl text-center my-5'>New here? <span className='font-bold'>Create a New Account</span></p>
                    <p className='text-xl font-medium text-center'>Or sign in with</p>
                    <div className='flex items-center justify-evenly
                    mt-6'>
                        <div className='w-[52px] h-[52px] rounded-full border-2 border-black flex items-center justify-center'>
                            <FaFacebookF className='text-2xl' />


                        </div>
                        <div className='w-[52px] h-[52px] rounded-full border-2 border-black flex items-center justify-center'>
                            <FaGoogle className='text-2xl' />
                        </div>
                        <div className='w-[52px] h-[52px] rounded-full border-2 border-black flex items-center justify-center'>
                            <FaGithub className='text-2xl' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;