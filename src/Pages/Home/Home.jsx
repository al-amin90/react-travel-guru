import banner from '../../assets/banner.png'
import Navbar from '../shared/Navbar';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

import im1 from "../../assets/1.png"
import im2 from "../../assets/2.png"
import im3 from "../../assets/3.png"
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";


const Home = () => {
    const [swiperRef, setSwiperRef] = useState(null);

    // console.log(swiperRef);

    return (
        <div className=''>
            <div className=" min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${banner})` }}>
                <div className="bg-black w-full min-h-screen bg-opacity-60 ">
                    <div className='text-white'>
                        <Navbar></Navbar>
                    </div>
                    <div className='flex flex-col  justify-center min-h-[calc(100vh-96px)]'>
                        <div className="flex gap-9 overflow-hidden text-white">
                            <div className="max-w-md ml-24">
                                <h1 className="mb-5 text-7xl font-bebas ">Cox's bazar</h1>
                                <p className="mb-5 font-normal text-sm">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <Link to="/login" className="btn px-7 border-none rounded-lg bg-[#F9A51A] text-black">Booking <FaArrowRight className='text-lg' /></Link>
                            </div>


                            {/* carosole design  */}
                            <div className='min-w-72 -right-16 relative'>
                                <Swiper
                                    onSwiper={setSwiperRef}
                                    slidesPerView={3}
                                    centeredSlides={true}
                                    spaceBetween={20}
                                    pagination={{
                                        type: 'fraction',
                                    }}
                                    navigation={true}
                                    modules={[Pagination, Navigation]}
                                    className="mySwiper "
                                >
                                    <SwiperSlide><img src={im1} alt="" /></SwiperSlide>
                                    <SwiperSlide><img src={im2} alt="" /></SwiperSlide>
                                    <SwiperSlide><img src={im3} alt="" /></SwiperSlide>
                                    <SwiperSlide><img src={im1} alt="" /></SwiperSlide>
                                </Swiper>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;