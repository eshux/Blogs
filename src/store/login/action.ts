import { SHOW_LOGIN, ShowLogin } from './types';

export const showLogin = (active: boolean):ShowLogin => {
  return {
    type: SHOW_LOGIN,
    active,
  };
};
