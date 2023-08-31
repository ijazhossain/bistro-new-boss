import bgImg from '../../assets/reservation/wood-grain-pattern-gray1x.png'
import img from '../../assets/others/authentication2.png'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
const Register = () => {
    const navigate = useNavigate();
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        // console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const newUser = result.user;
                console.log(newUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const newUser = { name: data.name, email: data.email }
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: { 'content-type': 'application/json' },
                            body: JSON.stringify(newUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    navigate('/')
                                }
                            })

                    }).catch(error => {
                        console.log(error);
                    })

            }).catch(error => {
                console.log(error.message);
            })

    };
    return (
        <div style={{ backgroundImage: `url("${bgImg}")` }} className='bg-center bg-cover h-auto  py-24'>
            <div style={{ boxShadow: '10px 10px 10px 10px rgba(0, 0, 0, 0.25)' }} className='lg:flex flex-row-reverse items-center justify-center gap-24 w-[90%] mx-auto h-auto p-24 '>
                <img className='flex-1' src={img} alt="" />
                <div className='flex-1'>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5 w-full'>
                        <h2 className='text-[48px] text-center font-bold'>Sign Up</h2>

                        <label className='text-[20px] text-[#444]' htmlFor="name" >Name</label>
                        <input {...register("name", { required: true })} className='px-6 py-5 rounded-lg' type="text" placeholder='Type here' name="name" />
                        {errors.name && <span className='text-red-600'>Name is required</span>}

                        <label className='text-[20px] text-[#444]' htmlFor="photoURL" >PhotoURL</label>
                        <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                        {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}


                        <label className='text-[20px] text-[#444]' htmlFor="email" >Email</label>
                        <input {...register("email", { required: true })} className='px-6 py-5 rounded-lg' type="email" placeholder='Type here' name="email" />
                        {errors.email && <span className='text-red-600'>Email is required</span>}

                        <label className='text-[20px] text-[#444]' htmlFor="password">Password</label>
                        <input {...register("password", {
                            required: true,
                            minLength: 6,
                            pattern: /(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{6,}/
                        })} className='px-6 py-5 rounded-lg' type="password" placeholder='Enter your password' name="password" />
                        {errors.password && <span className='text-red-600'>Password is required</span>}
                        {errors.password?.type === 'minLength' && <p className='text-red-600'>Password should be 6 characters long</p>}
                        {errors.password?.type === 'pattern' && <p className='text-red-600'>Password should have one uppercase, one number and one special character</p>}
                        <input className='px-6 py-5 rounded-lg bg-[#dbb984] text-white font-bold text-xl' type="submit" value="Sign Up" />
                    </form>
                    <p className='text-[#D1A054] text-xl text-center my-5'>Already registered? <Link to="/login"><span className='font-bold'> Go to log in</span></Link></p>
                    <p className='text-xl font-medium text-center'>Or sign in with</p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Register;