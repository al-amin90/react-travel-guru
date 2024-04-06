import banner from '../../assets/banner.png'
import Navbar from '../shared/Navbar';
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

import './home.css'
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";
import handleSlider from './home.js';
import { typography } from '@material-tailwind/react';


const Home = () => {
    const [swiperRef, setSwiperRef] = useState(null);
    const [place, setPlace] = useState(null)


    const placesAll = useLoaderData();

    useEffect(() => {

        const prav = document.getElementsByClassName('swiper-button-prev')[0]
        const next = document.getElementsByClassName('swiper-button-next')[0]
        prav.addEventListener("click", handleSl)
        next.addEventListener("click", handleSl)
        // setElement(element);

        return () => {
            prav.removeEventListener("click", handleSl)
            next.removeEventListener("click", handleSl)
        }
    }, [])

    const handleSl = () => {
        const element = document.getElementsByClassName('swiper-pagination-current')[0]
        const eId = element.innerText

        const place = placesAll.find(p => p.id === +eId);
        // const place = placesAll.map(p => console.log(typeof p.id));
        setPlace(place)
    }





    const { id, name, tum_image, image, description } = place || placesAll[0];
    console.log(name);
    // nextSibling
    // console.log(swiperRef.nextSibling);

    return (
        <div className=''>
            <div className=" min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
                <div className="bg-black w-full min-h-screen bg-opacity-60 ">
                    <div className='text-white'>
                        <Navbar></Navbar>
                    </div>
                    <div className='flex flex-col  justify-center min-h-[calc(100vh-96px)]'>
                        <div className="flex gap-9 overflow-hidden text-white">
                            <div className="max-w-md ml-24">
                                <h1 onClick={handleSl} className="mb-5 text-7xl font-bebas ">{name}</h1>
                                {
                                    description.length < 200 ? <p className="mb-5 font-normal text-sm">{description}</p>
                                        : <p className="mb-5 font-normal text-sm">{description.slice(0, 200)}...</p>
                                }
                                <Link to="/login" className="btn px-7 border-none rounded-lg bg-[#F9A51A] text-black">Booking <FaArrowRight className='text-lg' /></Link>
                            </div>


                            {/* carosole design  */}
                            <div className='min-w-72 h-full -right-16 relative'>
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
                                    {
                                        placesAll.map(pCard => <SwiperSlide
                                            key={pCard.id}
                                            className='relative'>
                                            <h4 className=' absolute z-20 bottom-5 font-bebas text-3xl left-4'>{pCard.name}</h4>
                                            <div className='rounded-2xl'>
                                                <div className='bg-gradient-to-b from-[#00000000] to-black h-full z-10 absolute rounded-2xl w-full'></div>
                                                <img className='w-full rounded-2xl min-h-full  object-scale-down opacity-100 ' src={pCard.tum_image} alt="" />
                                            </div>
                                        </SwiperSlide>)
                                    }

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