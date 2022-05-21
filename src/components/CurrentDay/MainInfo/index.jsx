import { Icon } from './icon';
import style from './MainInfo.module.scss';

export const MainInfo = ({ icon, text, countryName, city, temp }) => {
  return (
    <div className={style.main_info}>
      <img src={icon} alt="icon" />
      <span className={style.description}>{text}</span>
      <div className={style.location}>
        <span>{countryName}</span>
        <br />
        <span>{city}</span>
        <Icon />
      </div>
      <span className={style.temp}>{temp}</span>
    </div>
  );
};
