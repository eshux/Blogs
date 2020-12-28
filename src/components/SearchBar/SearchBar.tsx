import React, { FC, useState } from 'react';
import style from './SearchBar.module.scss';
import icon from '../../assets/SearchIcon.svg';
import closeIcon from '../../assets/CloseIcon.svg';

// type Props = {
//   id: string;
//   labelTitle: string;
// };

export const SearchBar: FC = () => {
  const [value, setValue] = useState('');

  const onChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setValue(event.target.value);
  };
  const onClear = () => {
    setValue('');
  };

  return (
    <div className={style.searchWrapper}>
      <img className={style.searchIcon} src={icon} alt="" />

      <input
        className={style.inputText}
        type="text"
        placeholder="Search"
        value={value}
        onChange={onChange}
      />

      <button type="button" className={style.closeButton} onClick={onClear}>
        <img src={closeIcon} alt="" />
      </button>
    </div>
  );
};
