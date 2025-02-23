import { FC } from "react";
import { Button } from "../../ui/button";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { Separator } from "../../ui/separator";
import { Github } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface LoginProps {
  signin: string;
  setSignin: React.Dispatch<React.SetStateAction<"login" | "register">>;
}

const Login: FC<LoginProps> = ({ signin, setSignin }) => {
  const navigate = useNavigate()

  return (
    <div className="flex-1 flex flex-col">
      <main className="flex-1 flex items-center justify-center px-6 pb-16">
        <div className="w-full max-w-sm space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              {signin === "login" ? "Welcome back" : "Create an account"}
            </h1>
            <p className="text-sm text-muted-foreground">
              {signin === "login"
                ? "Enter your credentials below to login"
                : "Enter your credentials below to create your account"}
            </p>
          </div>

          <form className="space-y-4">
            {signin === "register" ? (
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="john doe"
                  type="text"
                  autoCapitalize="none"
                  autoComplete="name"
                  autoCorrect="off"
                />
              </div>
            ) : (
              <></>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="name@example.com"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="password"
                autoComplete="new-password"
              />
            </div>
            <Button type="submit" className="w-full"
              onClick={() => navigate('/profile')}>
              {signin === "login" ? "Login" : "Register"}
            </Button>
          </form>
          <div className="flex gap-1">
            <p>
              {signin === "login" ? "Don't have an account?" : "Already have an account?"}
            </p>
            <p
              className="underline cursor-pointer"
              onClick={() => setSignin(signin === "login" ? "register" : "login")}
            >
              {signin === "login" ? "Register now." : "Login now."}
            </p>
          </div>


          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <div className="flex gap-2 ">
            <Button variant="outline" className="w-full">
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Google
            </Button>
            <Button variant="outline" className="w-full">
              <Github className="mr-2 h-4 w-4" />
              Github
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
