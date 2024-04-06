import React from 'react';
import Navbar from '../shared/Navbar';
import map from "../../assets/map.png"
import room1 from '../../assets/room1.png'
import room2 from '../../assets/room2.png'
import room3 from '../../assets/room3.png'
import star from '../../assets/star_1_.png'

const PlaceDetails = () => {
    return (
        <div>
            <div className='text-black '>
                <Navbar></Navbar>
            </div>
            <div className='mx-4 lg:mx-24 border-t border-[#D1D1D1]'>
                <p className='text-base font-normal mt-5 text-[#2B2B2B]'>252 stays Apr 13-17 3 guests</p>
                <h2 className='font-bold mb-7 text-2xl'>Stay in Cox’s Bazar</h2>
                <div className='grid grid-cols-2 gap-5'>
                    <div>
                        <div >
                            <div className='grid grid-cols-2 mb-9 gap-5'>
                                <div >
                                    <img src={room1} alt="" />
                                </div>
                                <div>
                                    <h2 className='text-lg text-black font-medium mb-3'>Light bright airy stylish apt & safe
                                        peaceful stay</h2>
                                    <h5 className='font-normal text-sm text-[#6A6A6A]'>4 guests   2 bedrooms   2 beds   2 baths</h5>
                                    <h5 className='font-normal my-1 text-sm text-[#6A6A6A]'>Wif Air conditioning Kitchen</h5>
                                    <h5 className='font-normal mb-3 text-sm text-[#6A6A6A]'>Cancellation fexibility availiable</h5>
                                    <div className='flex justify-between items-center'>
                                        <p className='font-medium text-sm flex items-center'><img className='w-1/4 mr-2' src={star} alt="" />4.9 (20)</p>
                                        <p className='font-medium text-base'>$34/ <span className='font-thin'> night</span></p>
                                        <p className='font-thin text-sm'>$167 total</p>
                                    </div>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 mb-9 gap-5'>
                                <div >
                                    <img src={room2} alt="" />
                                </div>
                                <div>
                                    <h2 className='text-lg text-black font-medium mb-3'>Light bright airy stylish apt & safe
                                        peaceful stay</h2>
                                    <h5 className='font-normal text-sm text-[#6A6A6A]'>4 guests   2 bedrooms   2 beds   2 baths</h5>
                                    <h5 className='font-normal my-1 text-sm text-[#6A6A6A]'>Wif Air conditioning Kitchen</h5>
                                    <h5 className='font-normal mb-3 text-sm text-[#6A6A6A]'>Cancellation fexibility availiable</h5>
                                    <div className='flex justify-between items-center'>
                                        <p className='font-medium text-sm flex items-center'><img className='w-1/4 mr-2' src={star} alt="" />4.9 (20)</p>
                                        <p className='font-medium text-base'>$34/ <span className='font-thin'> night</span></p>
                                        <p className='font-thin text-sm'>$167 total</p>
                                    </div>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 mb-9 gap-5'>
                                <div >
                                    <img src={room3} alt="" />
                                </div>
                                <div>
                                    <h2 className='text-lg text-black font-medium mb-3'>Light bright airy stylish apt & safe
                                        peaceful stay</h2>
                                    <h5 className='font-normal text-sm text-[#6A6A6A]'>4 guests   2 bedrooms   2 beds   2 baths</h5>
                                    <h5 className='font-normal my-1 text-sm text-[#6A6A6A]'>Wif Air conditioning Kitchen</h5>
                                    <h5 className='font-normal mb-3 text-sm text-[#6A6A6A]'>Cancellation fexibility availiable</h5>
                                    <div className='flex justify-between items-center'>
                                        <p className='font-medium text-sm flex items-center'><img className='w-1/4 mr-2' src={star} alt="" />4.9 (20)</p>
                                        <p className='font-medium text-base'>$34/ <span className='font-thin'> night</span></p>
                                        <p className='font-thin text-sm'>$167 total</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='relative -top-8 -right-3'>
                        <img src={map} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceDetails;