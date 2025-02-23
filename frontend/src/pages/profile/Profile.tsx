import ProfileFeed from "@/components/user/profile/ProfileFeed";
import ProfileInfo from "@/components/user/profile/ProfileInfo";
import { FC } from "react";

const Profile: FC = () => {
  return (
    <div className="lg:flex flex-row-reverse  justify-center h-full">
      <ProfileInfo />
      <ProfileFeed />
    </div>
  )
};

export default Profile;
