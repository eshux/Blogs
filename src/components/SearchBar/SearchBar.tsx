import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './SearchBar.module.scss';
import icon from '../../assets/SearchIcon.svg';
import closeIcon from '../../assets/CloseIcon.svg';
import { changeSearchInput } from '../../store/input/action';
import { RootState } from '../../store/rootReducer';

export const SearchBar: FC = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector(
    (state: RootState) => state.inputReducer.searchInput
  );

  return (
    <div className={style.searchWrapper}>
      <img className={style.searchIcon} src={icon} alt="" />

      <input
        className={style.inputText}
        type="text"
        placeholder="Search"
        value={inputValue}
        onChange={(event) => dispatch(changeSearchInput(event.target.value))}
      />

      <button
        type="button"
        className={style.closeButton}
        onClick={() => dispatch(changeSearchInput(''))}
      >
        <img src={closeIcon} alt="" />
      </button>
    </div>
  );
};
