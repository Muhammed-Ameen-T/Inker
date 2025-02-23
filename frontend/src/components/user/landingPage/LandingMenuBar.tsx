import { useNavigate } from "react-router-dom"
import Logo from "../../../assets/Logo Light.svg"
import Button from "../../ui/button"
import { LogIn } from "lucide-react"

const LandingMenuBar = () => {
    const navigate = useNavigate()

    return (
        <div className='w-full z-40 fixed flex justify-between px-10 items-center py-3  rounded-xl max-w-[1000px] left-[50%] -translate-x-[50%] top-2 backdrop-blur-2xl'>
            <img src={Logo} alt="" className="max-w-[100px] rounded-md" />
            <div className="flex items-center gap-4">
                <Button onClick={() => navigate("/auth")} className="duration-300 active:scale-95 bg-black  hover:scale-105 text-white cursor-pointer  transition-all">
                    <LogIn /> Sign In</Button>
            </div>
        </div>

    )
}

export default LandingMenuBar
