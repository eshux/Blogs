type UserData = {
  userId: number;
  userName: string;
  password: string;
  isActive: boolean;
  isAdmin: boolean;
}[];

export const userData: UserData = [
  {
    userId: 1,
    userName: 'user',
    password: 'userPassword',
    isActive: false,
    isAdmin: false,
  },
  {
    userId: 2,
    userName: 'admin',
    password: 'adminPassword',
    isActive: false,
    isAdmin: true,
  },
];
