import { Input } from 'antd';
import style from './Header.module.scss';

export const Header = () => {
  return (
    <header className={style.header}>
      <h1>ПОГОДА В ЛЮБОЙ ТОЧКЕ МИРА</h1>
      <div className={style.search_wrapper}>
        <Input placeholder="Введите название города" />
      </div>
    </header>
  );
};
