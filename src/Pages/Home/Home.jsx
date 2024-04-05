import banner from '../../assets/banner.png'
import Navbar from '../shared/Navbar';

const Home = () => {
    return (
        <div className=''>
            <div className=" min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${banner})` }}>
                <div className="bg-black w-full min-h-screen bg-opacity-60 ">
                    <Navbar></Navbar>
                    <div className="flex gap-9 text-white">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Cox's bazar</h1>
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;