import { Input } from 'antd';

import style from './Header.module.scss';
const { Search } = Input;

export const Header = ({ setSearch }) => {
  const onSearch = (value) => {
    setSearch(value);
  };

  return (
    <header className={style.header}>
      <div className={style.search_wrapper}>
        <Search placeholder="Введите название города" onSearch={onSearch} />
      </div>
    </header>
  );
};
