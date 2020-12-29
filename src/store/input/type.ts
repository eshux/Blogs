export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const CHANGE_PASSWORD_VALUE = 'CHANGE_PASSWORD_VALUE';

export type ChangeInputValue = {
  type: typeof CHANGE_INPUT_VALUE;
  inputValue: string;
};

export type ChangePasswordValue = {
  type: typeof CHANGE_PASSWORD_VALUE;
  inputValue: string;
};

export type InitialState = {
  userName: string;
  password: string;
};

export type AllActions = ChangeInputValue | ChangePasswordValue;
