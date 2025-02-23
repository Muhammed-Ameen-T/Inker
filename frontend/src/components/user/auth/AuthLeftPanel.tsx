import { FC } from 'react'
import Image from "../../../assets/AuthImage.jpg"


const AuthLeftPanel: FC = () => {
    return (
        <div className="hidden lg:flex lg:w-1/2 p-10 ">
            <img src={Image} alt="" className='rounded-xl shadow' />
        </div>
    )
}

export default AuthLeftPanel
