import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className='text-white'>
            <div className=' flex '>
                <div className=" py-24 text-center flex-1 bg-[#1F2937]">
                    <h2 className='text-[32px] font-medium  mb-[24px]'>CONTACT US</h2>
                    <p className='text-[20px] font-medium'>123 ABS Street, Uni 21, Bangladesh</p>
                    <p className='text-[20px] font-medium'>+88 123456789</p>
                    <p className='text-[20px] font-medium'>Mon - Fri: 08:00 - 22:00</p>
                    <p className='text-[20px] font-medium'>Sat - Sun: 10:00 - 23:00</p>
                </div>
                <div className='py-24 bg-[#111827] flex-1 text-center'>
                    <h2 className='text-[32px] font-medium '>Follow US</h2>
                    <p className='my-[24px] text-[20px] font-medium'>Join us on social media</p>
                    <div className='flex justify-center gap-8'
                    >
                        <FaFacebookF className='text-[35px]'></FaFacebookF>
                        <FaInstagram className='text-[35px]'></FaInstagram>
                        <FaTwitter className='text-[35px]'></FaTwitter>
                    </div>
                </div>
            </div>
            <p className='text-center bg-[#151515] py-[17px] text-[20px] font-medium'>Copyright ©{year} CulinaryCloud. All rights reserved.</p>
        </footer>
    );
};

export default Footer;