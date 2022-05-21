import { Input } from 'antd';
import style from './Header.module.scss';

export const Header = () => {
  return (
    <header className={style.header}>
      <h1>Узнай прогноз погоды для всех городов мира</h1>
      <div className={style.search_wrapper}>
        <Input placeholder="Введите название города" />
      </div>
    </header>
  );
};
