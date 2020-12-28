export const SHOW_LOGIN = 'SHOW_LOGIN';

export type ShowLogin = {
  type: typeof SHOW_LOGIN;
  active: boolean;
};

export type AllActions = ShowLogin;
