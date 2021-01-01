import {
  ChangeUsernameValue,
  CHANGE_USERNAME_VALUE,
  ChangePasswordValue,
  CHANGE_PASSWORD_VALUE,
  ChangeSearchInput,
  CHANGE_SEARCH_INPUT,
  ChangeUserName,
  CHANGE_USER_NAME,
  ChangeUserEmail,
  CHANGE_USER_EMAIL,
  ChangeUserComment,
  CHANGE_USER_COMMENT,
} from './type';

export const changeUsernameValue = (
  inputValue: string
): ChangeUsernameValue => {
  return {
    type: CHANGE_USERNAME_VALUE,
    inputValue,
  };
};

export const changePasswordValue = (
  inputValue: string
): ChangePasswordValue => {
  return {
    type: CHANGE_PASSWORD_VALUE,
    inputValue,
  };
};

export const changeSearchInput = (inputValue: string): ChangeSearchInput => {
  return {
    type: CHANGE_SEARCH_INPUT,
    inputValue,
  };
};
export const changeUserName = (inputValue: string): ChangeUserName => {
  return {
    type: CHANGE_USER_NAME,
    inputValue,
  };
};

export const changeUserEmail = (inputValue: string): ChangeUserEmail => {
  return {
    type: CHANGE_USER_EMAIL,
    inputValue,
  };
};

export const changeUserComment = (inputValue: string): ChangeUserComment => {
  return {
    type: CHANGE_USER_COMMENT,
    inputValue,
  };
};
