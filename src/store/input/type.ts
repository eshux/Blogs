export const CHANGE_USERNAME_VALUE = 'CHANGE_INPUT_VALUE';
export const CHANGE_PASSWORD_VALUE = 'CHANGE_PASSWORD_VALUE';
export const CHANGE_SEARCH_INPUT = 'CHANGE_SEARCH_INPUT';
export const CHANGE_USER_NAME = 'CHANGE_USER_NAME';
export const CHANGE_USER_EMAIL = 'CHANGE_USER_EMAIL';
export const CHANGE_USER_COMMENT = 'CHANGE_USER_COMMENT';

export type ChangeUsernameValue = {
  type: typeof CHANGE_USERNAME_VALUE;
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
export type ChangeUserName = {
  type: typeof CHANGE_USER_NAME;
  inputValue: string;
};
export type ChangeUserEmail = {
  type: typeof CHANGE_USER_EMAIL;
  inputValue: string;
};
export type ChangeUserComment = {
  type: typeof CHANGE_USER_COMMENT;
  inputValue: string;
};

export type InitialState = {
  userName: string;
  password: string;
  searchInput: string;
  commentUserName: string;
  userEmail: string;
  userComment: string;
};

export type AllActions =
  | ChangeUsernameValue
  | ChangePasswordValue
  | ChangeSearchInput
  | ChangeUserName
  | ChangeUserComment
  | ChangeUserEmail;
