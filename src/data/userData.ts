export type UserData = {
  userId: number;
  userName: string;
  password: string;
  isAdmin: boolean;
};

export const userData: UserData[] = [
  {
    userId: 1,
    userName: 'user',
    password: '00',
    isAdmin: false,
  },
  {
    userId: 2,
    userName: 'admin',
    password: '11',
    isAdmin: true,
  },
];
