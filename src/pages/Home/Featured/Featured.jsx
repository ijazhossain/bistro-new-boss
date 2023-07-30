import featureImg from '../../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div className='featured-container '>
            <div className=" px-56 py-12  bg-black bg-opacity-70">
                <div className="w-[90%] md:w-4/12 mx-auto text-center mb-12">
                    <p className="text-[#D99904] italic mb-4 mt-4">---Check it out---

                    </p>
                    <h2 className="text-[40px] border-y-4 py-4 text-white">FROM OUR MENU
                    </h2>
                </div>
                <div className="md:flex items-center justify-center  md:gap-x-8">
                    <div className='md:w-1/2'>
                        <img className='w-full ' src={featureImg} alt="" />
                    </div>
                    <div className='md:w-1/2 text-white'>
                        <p className='text-[24px]'>March 20, 2023</p>
                        <p className='text-[24px] mb-4'>WHERE CAN I GET SOME?</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam ipsam adipisci totam molestias, earum fuga maxime dicta iure? Molestiae nisi explicabo iste rem minima minus nostrum aperiam obcaecati illo. Dolor enim dignissimos fuga perferendis, veniam optio. Reiciendis porro perspiciatis numquam!</p>
                        <button className='px-[30px] text-xl text-white mt-7 rounded-xl border-b-4 border-white py-3 hover:bg-white hover:text-black '>Read More</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Featured;