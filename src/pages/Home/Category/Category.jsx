import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'

const Category = () => {
    return (
        <div className='container w-[90%] mx-auto'>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='relative'>
                        <img src={img1} alt="" />
                        <h3 className='text-3xl -mt-16 absolute left-1/4 text-white'>SALAD</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                    <h3 className='text-3xl -mt-16 absolute left-1/4 text-white'>SOUP</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                    <h3 className='text-3xl -mt-16 absolute left-1/4 text-white'>PIZZA</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="" />
                    <h3 className='text-3xl -mt-16 absolute left-1/4 text-white'>DESSERT</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="" />
                    <h3 className='text-3xl -mt-16 absolute left-1/4 text-white'>SALAD</h3>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Category;