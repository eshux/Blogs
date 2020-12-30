import {
  ChangeInputValue,
  CHANGE_INPUT_VALUE,
  ChangePasswordValue,
  CHANGE_PASSWORD_VALUE,
  ChangeSearchInput,
  CHANGE_SEARCH_INPUT,
} from './type';

export const changeInputValue = (inputValue: string): ChangeInputValue => {
  return {
    type: CHANGE_INPUT_VALUE,
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
