import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import Navbar from "../shared/Navbar";
import { Link } from "react-router-dom";

import face from "../../assets/face.png"
import google from "../../assets/google.png"
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const SingUp = () => {
    const { createUser, singWithFacebook, singWithGoogle } = useContext(AuthContext)

    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    // console.log(createUser);


    const handleSingUp = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);

        const firstName = form.get("firstName")
        const secondName = form.get("secondName")
        const email = form.get("email")
        const password = form.get('password')
        const confirmPassword = form.get("confirmPassword")
        console.log(firstName, secondName, email, password, confirmPassword);


        // reset error & success 
        setError('')
        setSuccess('')

        // validation 
        if (password !== confirmPassword) {
            setError("Password didn't matched")
        }

        createUser(email, confirmPassword)
            .then(result => {
                console.log(result.user);
                setSuccess("Account Created successfully")
                e.target.reset()
            })
            .catch(error => {
                setError(error.message)
                console.log(error)
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
                        Create an account
                    </Typography>

                    <form onSubmit={handleSingUp} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                        <div className="mb-1 font-bold flex flex-col gap-6">
                            <Input className="font-bold" variant="standard" label="First Name" placeholder="First Name" name="firstName" color="black" />
                            <Input variant="standard" label="Last Name" name="secondName" placeholder="Last Name" color="black" />
                            <Input variant="standard" label="Username or Email" placeholder="Username or Email" required name="email" color="black" />
                            <Input variant="standard" label="Password" placeholder="Password" required name="password" color="black" />
                            <Input variant="standard" required label="Confirm Password" placeholder="Confirm Password" name="confirmPassword" color="black" />

                            {
                                error && <p className="text-red-600 text-center">{error}</p>
                            }
                            {
                                success && <p className="text-green-600 text-center">{success}</p>
                            }
                        </div>

                        <Button type="submit" className="mt-6 px-7 border-none capitalize bg-[#F9A51A] text-black rounded-none" fullWidth>
                            <Link to="/login" >Create an account </Link>
                        </Button>
                        <Typography color="gray" className="mt-4 text-center font-normal">
                            Already have an account?{" "}
                            <Link to="/login" className="font-medium text-[#F9A51A] underline">
                                Login
                            </Link>
                        </Typography>
                    </form>
                </Card>
                <div className="divider font-semibold w-1/4 mx-auto my-6">Or</div>
                <button onClick={handleSingFacebook} className="pl-1.5 btn bg-transparent  border border-[#C7C7C7] rounded-full flex items-center justify-between w-2/6">
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

export default SingUp;