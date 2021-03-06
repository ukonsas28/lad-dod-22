import { MainInfo } from './MainInfo';
import { ExtraInfo, SunInfo, WindInfo } from './InfoBlocks';
import style from './CurrentDay.module.scss';

export const CurrentDay = ({ weatherData, locationData, astronomyData }) => {
  return (
    <section className={style.content}>
      <h2>ПОГОДА СЕГОДНЯ</h2>
      <MainInfo
        icon={weatherData?.condition.icon}
        text={weatherData?.condition.text}
        countryName={locationData?.country}
        city={locationData?.name}
        temp={weatherData?.temp_c}
      />

      <WindInfo
        windKph={weatherData?.wind_kph}
        gustKph={weatherData?.gust_kph}
        windDir={weatherData?.wind_dir}
      />

      <ExtraInfo
        feelsLike={weatherData?.feelslike_c}
        pressure={weatherData?.pressure_mb}
        humidity={weatherData?.humidity}
        uv={weatherData?.uv}
      />
      <SunInfo sunrise={astronomyData?.sunrise} sunset={astronomyData?.sunset} />
    </section>
  );
};
