import { IUser } from "../../models/interface/IUser";

export interface IAuthService {
  signup(user: IUser): Promise<string>;
  signin(
    email: string,
    password: string
  ): Promise<{ accessToken: string; refreshToken: string }>;
  verifyOtp(
    otp: string,
    email: string
  ): Promise<{ status: number; message: string }>;
}
