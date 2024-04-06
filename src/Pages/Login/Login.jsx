import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import Navbar from "../shared/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";

import face from "../../assets/face.png"
import google from "../../assets/google.png"
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";


const Login = () => {
    const { userLogIn, singWithFacebook, singWithGoogle } = useContext(AuthContext)
    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();

    const [success, setSuccess] = useState(null)

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)


    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);

        const email = form.get("email")
        const password = form.get('password')

        console.log(email, password);


        // reset error & success 
        setSuccess('')

        userLogIn(email, password)
            .then(result => {
                console.log(result.user);
                setSuccess("user login successfully")
                e.target.reset()
                navigate(`/${location.state}`)
            })
            .catch(error => {
                console.log(error);
            })

    }

    const handleSingFacebook = () => {
        singWithFacebook()
            .then(result => {
                console.log(result.user);
                setSuccess("Account Created successfully")
            })

    }
    const handleSingGoogle = () => {
        singWithGoogle()
            .then(result => {
                console.log(result.user);
                setSuccess("Account Created successfully")
            })
    }


    return (

        <div className="text-black">
            <Navbar></Navbar>
            <div className="flex flex-col my-8 items-center justify-center">
                <Card color="transparent" className="border border-[#ABABAB] rounded px-14 py-7" shadow={false}>
                    <Typography variant="h4" color="blue-gray">
                        Login
                    </Typography>

                    <form onSubmit={handleLogin} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                        <div className="mb-1 font-bold flex flex-col gap-6">

                            <Input variant="standard" name="email" label="Username or Email" placeholder="Username or Email" color="black" />
                            <Input variant="standard" name="password" label="Password" placeholder="Password" color="black" />

                            {
                                success && <p className="text-green-600 text-center">{success}</p>
                            }
                        </div>

                        <Button type="submit" className="mt-6 px-7 border-none capitalize bg-[#F9A51A] text-black text-base font-medium rounded-none" fullWidth>
                            Login
                        </Button>
                        <Typography color="gray" className="mt-4 text-center font-normal">
                            Don’t have an account? {" "}
                            <Link to="/singup" className="font-medium text-[#F9A51A] underline">
                                Create an account
                            </Link>
                        </Typography>
                    </form>
                </Card>
                <div onClick={handleSingFacebook} className="divider font-semibold w-1/4 mx-auto my-6">Or</div>
                <button className="pl-1.5 btn bg-transparent  border border-[#C7C7C7] rounded-full flex items-center justify-between w-2/6">
                    <img src={face} alt="" />
                    <h5 className="font-semibold ">Continue with Facebook</h5>
                    <h5></h5>
                </button>
                <button onClick={handleSingGoogle} className="pl-1.5 btn bg-transparent  border border-[#C7C7C7] rounded-full flex items-center justify-between mt-2 w-2/6">
                    <img src={google} alt="" />
                    <h5 className="font-semibold ">Continue with Google</h5>
                    <h5></h5>
                </button>
            </div>
        </div>
    );
};

export default Login;