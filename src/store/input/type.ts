export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const CHANGE_PASSWORD_VALUE = 'CHANGE_PASSWORD_VALUE';
export const CHANGE_SEARCH_INPUT = 'CHANGE_SEARCH_INPUT';

export type ChangeInputValue = {
  type: typeof CHANGE_INPUT_VALUE;
  inputValue: string;
};

export type ChangePasswordValue = {
  type: typeof CHANGE_PASSWORD_VALUE;
  inputValue: string;
};

export type ChangeSearchInput = {
  type: typeof CHANGE_SEARCH_INPUT;
  inputValue: string;
};

export type InitialState = {
  userName: string;
  password: string;
  searchInput: string;
};

export type AllActions =
  | ChangeInputValue
  | ChangePasswordValue
  | ChangeSearchInput;
