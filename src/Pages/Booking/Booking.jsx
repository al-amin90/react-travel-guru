import { Link, useLoaderData, useParams } from 'react-router-dom';
import Navbar from '../shared/Navbar';
import calen from "../../assets/calender_icon.png"
import { MdOutlineCalendarToday } from "react-icons/md";
import { Button } from '@material-tailwind/react';


const Booking = () => {
    const placesAll = useLoaderData();
    const { id } = useParams()

    const place = placesAll.find(p => p.id === +id);
    const { name, image, description } = place;

    return (
        <div className=''>
            <div className=" min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
                <div className="bg-black w-full min-h-screen bg-opacity-60 ">
                    <div className='text-white'>
                        <Navbar></Navbar>
                    </div>
                    <div className='min-h-[calc(100vh-96px)]'>
                        <div className="flex pt-11 mx-24 justify-between gap-9 overflow-hidden text-white">
                            <div className="max-w-md ">
                                <h1 className="mb-5 text-7xl font-bebas ">{name}</h1>

                                <p className="mb-5 font-normal text-sm">{description}</p>

                            </div>

                            <div>
                                <div className="hero ">
                                    <div className="hero-content">
                                        <div className="card shrink-0 w-full max-w-sm shadow-2xl rounded bg-base-100">
                                            <form className="card-body p-5  text-black ">
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Origin</span>
                                                    </label>
                                                    <input type="text" defaultValue={"Dhaka"} placeholder="Origin" className="input bg-[#F2F2F2] font-bold w-full" />
                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Destination</span>
                                                    </label>
                                                    <input type="text"
                                                        defaultValue={name} placeholder="Destination" className="input bg-[#F2F2F2] font-bold w-full" />

                                                </div>

                                                <div className='flex gap-4'>
                                                    <div className="form-control">
                                                        <label className="label">
                                                            <span className="label-text">From</span>

                                                        </label>

                                                        <label className="input bg-[#F2F2F2] font-bold  flex items-center gap-2">
                                                            <input type="text"
                                                                defaultValue={"01/09"} placeholder="Destination" className="w-full grow " />
                                                            <MdOutlineCalendarToday />
                                                        </label>

                                                    </div>
                                                    <div className="form-control">
                                                        <label className="label">
                                                            <span className="label-text">To</span>
                                                        </label>
                                                        <label className="input bg-[#F2F2F2] font-bold flex items-center gap-2">
                                                            <input type="text"
                                                                defaultValue={"01/09"} placeholder="Destination" className=" w-full grow" />
                                                            <MdOutlineCalendarToday />
                                                        </label>

                                                    </div>
                                                </div>
                                                <Link to="/placeDetails">
                                                    <Button className="mt-6 px-7 border-none text-base font-medium capitalize bg-[#F9A51A] text-black rounded-md" fullWidth>
                                                        Start Booking
                                                    </Button>
                                                </Link>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;