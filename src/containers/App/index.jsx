import { useEffect, useState } from 'react';
import { request } from '../../api';
import { Layout, CurrentDay, ForecastWeather, Header } from '../../components';

export const App = () => {
  const [weatherData, setWeatherData] = useState();
  const [astronomyData, setAstronomyData] = useState();

  const getWeatherData = () => {
    request(
      {
        url: 'forecast.json',
        params: {
          days: 4,
          q: 'Нижний Новгород',
        },
      },
      setWeatherData
    );
  };

  const getAstronomyData = () => {
    request(
      {
        url: 'astronomy.json',
        params: {
          q: 'Нижний Новгород',
        },
      },
      setAstronomyData
    );
  };

  useEffect(getWeatherData, []);

  useEffect(getAstronomyData, []);

  return (
    <Layout>
      <Header />
      <CurrentDay
        astronomyData={astronomyData?.astronomy.astro}
        locationData={weatherData?.location}
        weatherData={weatherData?.current}
        hourWeatherData={weatherData?.forecast.forecastday[0].hour}
      />
      <ForecastWeather weatherData={weatherData?.forecast.forecastday.slice(1, 3)} />
    </Layout>
  );
};
