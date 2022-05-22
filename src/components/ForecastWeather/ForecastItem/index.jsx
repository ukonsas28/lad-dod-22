import style from './ForecastItem.module.scss';

export const ForecastItem = ({ data: { astro, day, date } }) => {
  return (
    <div className={style.item_wrapper}>
      <span className={style.item_title}>{`Прогноз на ${date}`}</span>
      <img src={day?.condition.icon} alt="icon" />
      <div>{`${day?.condition.text}`}</div>
      <div className={style.item_temp}>{`${day?.avgtemp_c}`}</div>
      <div>{`${day?.avghumidity} - Влажность воздуха`}</div>
      <div>{`${astro?.sunrise} - Восход`}</div>
      <div>{`${astro?.sunset} - Закат`}</div>
    </div>
  );
};
