import AuthLeftPanel from "@/components/user/auth/AuthLeftPanel";
import Login from "@/components/user/auth/Login";
import { useState } from "react";

export default function LoginPage() {
  const [signin, setSignin] = useState<"register" | "login">("login");
  
  return (
    <div className="min-h-screen flex">
      <AuthLeftPanel/>
      <Login signin={signin} setSignin={setSignin}/>
    </div>
  );
}
