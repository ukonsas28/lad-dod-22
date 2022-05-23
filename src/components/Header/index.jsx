import { Input } from 'antd';
import style from './Header.module.scss';
const { Search } = Input;

export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.search_wrapper}>
        <Search placeholder="Введите название города" />
      </div>
    </header>
  );
};
