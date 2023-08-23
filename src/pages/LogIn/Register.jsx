import bgImg from '../../assets/reservation/wood-grain-pattern-gray1x.png'
import img from '../../assets/others/authentication2.png'
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Register = () => {
    return (
        <div style={{ backgroundImage: `url("${bgImg}")` }} className='bg-center bg-cover h-auto  py-24'>
            <div style={{ boxShadow: '10px 10px 10px 10px rgba(0, 0, 0, 0.25)' }} className='lg:flex flex-row-reverse items-center justify-center gap-24 w-[90%] mx-auto h-auto p-24 '>
                <img className='flex-1' src={img} alt="" />
                <div className='flex-1'>
                    <form className='flex flex-col gap-5 w-full'>
                        <h2 className='text-[48px] text-center font-bold'>Sign Up</h2>

                        <label className='text-[20px] text-[#444]' htmlFor="email" >Name</label>
                        <input className='px-6 py-5 rounded-lg' type="text" placeholder='Type here' name="name" />

                        <label className='text-[20px] text-[#444]' htmlFor="email" >Email</label>
                        <input className='px-6 py-5 rounded-lg' type="email" placeholder='Type here' name="email" />


                        <label className='text-[20px] text-[#444]' htmlFor="password">Password</label>
                        <input className='px-6 py-5 rounded-lg' type="password" placeholder='Enter your password' name="password" />

                        <input className='px-6 py-5 rounded-lg bg-[#dbb984] text-white font-bold text-xl' type="submit" value="Sign Up" />
                    </form>
                    <p className='text-[#D1A054] text-xl text-center my-5'>Already registered? <Link to="/login"><span className='font-bold'> Go to log in</span></Link></p>
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

export default Register;