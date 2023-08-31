import { useContext } from 'react';
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                const savedUser = { name: loggedUser?.displayName, email: loggedUser?.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true })
                    })
            })
    }
    return (
        <div className='flex items-center justify-evenly
                    mt-6'>
            <div className='w-[52px] h-[52px] rounded-full border-2 border-black flex items-center justify-center'>
                <FaFacebookF className='text-2xl' />


            </div>
            <div onClick={handleGoogleSignIn} className='w-[52px] h-[52px] rounded-full border-2 border-black flex items-center justify-center'>
                <FaGoogle className='text-2xl' />
            </div>
            <div className='w-[52px] h-[52px] rounded-full border-2 border-black flex items-center justify-center'>
                <FaGithub className='text-2xl' />
            </div>
        </div>
    );
};

export default SocialLogin;