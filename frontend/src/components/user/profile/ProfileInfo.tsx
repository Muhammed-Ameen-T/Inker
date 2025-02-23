import { ChevronLeft, Plus } from 'lucide-react'
import { FC } from 'react'
import Button from '../../ui/button'

const ProfileInfo: FC = () => {
  return (
    <div className='min-w-[300px] lg:w-[400px] p-2 lg:border lg:h-full'>
      <div className="flex justify-between items-center mb-5 px-2">
        <div className="flex">
          <ChevronLeft strokeWidth={1.8} className='md:hidden' />
          <p> Profile</p>
        </div>
        <Button className='active:scale-95'>Edit Profile</Button>

      </div>

      <div className="w-full  p-1 rounded-3xl mb-3 flex items-center">
        <img className="w-26 h-26 rounded-3xl" src="https://res.cloudinary.com/dwyxogyrk/image/upload/v1737433466/h0xf7zi0blmclfqrjeo7.png" alt="" />
        <div className='flex justify-around w-full'>
          <div className='flex flex-col items-center'>
            <p>followers</p>
            <p className='font-semibold'>45</p>
          </div>
          <div className='flex flex-col items-center'>
            <p>followings</p>
            <p className='font-semibold'>45</p>
          </div>
        </div>
      </div>

      <div className="p-2 flex flex-col gap-3">
        <p className="text-xl font-semibold">Full Name</p>
        <div className="flex gap-2 items-center mt-2">
          <p className="text-sm text-gray-600">@username</p>
          <p className="text-xs text-gray-400">. Joined Febraury 2025</p>
        </div>
        <div className="flex gap-2 text-sm font-light text-muted-foreground">
          <p><span className="font-semibold text-foreground">0</span> Posts</p>
          <p><span className="font-semibold text-foreground">0</span> Views</p>
          <p><span className="font-semibold text-foreground">0</span> Upvotes</p>
        </div>
      </div>

      <button className="outline rounded-md px-2 py-1 w-fit h-fit flex gap-1 mt-3 items-center text-neutral-500 ml-2 active:scale-95">
        <Plus strokeWidth={1.2} />
        <p className="text-md ">Add bio</p>
      </button>
    </div>
  )
}

export default ProfileInfo
