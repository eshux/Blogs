import {
  ChangeInputValue,
  CHANGE_INPUT_VALUE,
  ChangePasswordValue,
  CHANGE_PASSWORD_VALUE,
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
