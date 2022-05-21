import style from "./CurrentDay.module.scss";

export const CurrentDay = ({
  weatherData,
  locationData,
  astronomyData,
}) => {
  return (
    <section className={style.content}>
      <div>{`${locationData?.country_name} ${locationData?.city} - location`}</div>
      <div>{`${weatherData?.temp_c} - Temperature in celsius`}</div>
      <div>{`${weatherData?.feelslike_c} - Feels like temperature in celsius`}</div>
      <div>{`${weatherData?.condition.text}`}</div>
      <img src={weatherData?.condition.icon} alt="icon" />
      <div>{`${weatherData?.wind_kph} - Wind speed in kilometer per hour`}</div>
      <div>{`${weatherData?.gust_kph} - Wind gust in kilometer per hour`}</div>
      <div>{`${weatherData?.wind_dir} - Wind direction as 16 point compass. e.g.: NSW`}</div>
      <div>{`${
        weatherData?.pressure_mb * 0.7501
      } - Pressure in mm ртутного столба`}</div>
      <div>{`${weatherData?.humidity} - Humidity as percentage`}</div>
      <div>{`${weatherData?.uv} - UV Index`}</div>
      <div>{`${astronomyData?.sunrise} - sunrise`}</div>
      <div>{`${astronomyData?.sunset} - sunset`}</div>
    </section>
  );
};
