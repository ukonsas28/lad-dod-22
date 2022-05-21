import { ForecastItem } from './ForecastItem';
import style from './ForecastWeather.module.scss';

export const ForecastWeather = ({ weatherData }) => {
  return (
    <aside className={style.aside}>
      <h2>ПРОГНОЗ ПОГОДЫ</h2>
      {weatherData?.map((el) => {
        return <ForecastItem key={el.date} data={el} />;
      })}
    </aside>
  );
};
