import bgImg from '../../assets/reservation/wood-grain-pattern-gray1x.png'
import img from '../../assets/others/authentication2.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const LogIn = () => {
    const navigate = useNavigate()

    const location = useLocation();


    const from = location.state?.from?.pathname || "/";

    const { logIn } = useContext(AuthContext);
    const [isDisabled, setIsDisabled] = useState(true)
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        logIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Login Successful',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true })
            }).catch(error => {
                console.log(error.message);
            })
    }
    const handleValidate = (e) => {
        const user_captcha_value = e.target.value;
        console.log(user_captcha_value);
        if (validateCaptcha(user_captcha_value)) {
            setIsDisabled(false)
            console.log(isDisabled);
        } else {
            setIsDisabled(true)
        }
    }
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    return (
        <div style={{ backgroundImage: `url("${bgImg}")` }} className='bg-center bg-cover h-auto  py-24'>
            <div style={{ boxShadow: '10px 10px 10px 10px rgba(0, 0, 0, 0.25)' }} className='lg:flex items-center justify-center gap-24 w-[90%] mx-auto h-auto p-24 '>
                <img className='flex-1' src={img} alt="" />
                <div className='flex-1'>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-5 w-full'>
                        <h2 className='text-[48px] text-center font-bold'>Login</h2>

                        <label className='text-[20px] text-[#444]' htmlFor="email" >Email</label>
                        <input className='px-6 py-5 rounded-lg' type="email" placeholder='Type here' name="email" />


                        <label className='text-[20px] text-[#444]' htmlFor="password">Password</label>
                        <input className='px-6 py-5 rounded-lg' type="password" placeholder='Enter your password' name="password" />


                        <LoadCanvasTemplate />
                        <input onBlur={handleValidate} className='px-6 py-5 rounded-lg' type="text" placeholder='Type Captcha Here' />

                        <input className=' btn bg-[#dbb984] hover:bg-[#dbb984] rounded-lg bg- text-white font-bold text-xl' type="submit" value="Sign In" disabled={false} />

                    </form>
                    <p className='text-[#D1A054] text-xl text-center my-5'>New here? <Link to="/register"><span className='font-bold'>Create a New Account</span></Link></p>
                    <p className='text-xl font-medium text-center'>Or sign in with</p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default LogIn;