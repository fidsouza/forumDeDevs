interface UserProps {
  email: string;
  username: string;
  password: string;
  isEmailVerified: boolean;
  isAdminUser?: boolean;
  accessToken?: boolean;
  refreshToken?: boolean;
  isDeleted?: boolean;
  lastLogin?: Date;
}
