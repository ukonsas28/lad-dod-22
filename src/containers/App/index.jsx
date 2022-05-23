import { useEffect, useState } from 'react';
import { request } from '../../api';
import { Layout, CurrentDay, ForecastWeather, Header } from '../../components';
// import { useRequest } from '../../hooks';

export const App = () => {
  const [search, setSearch] = useState('Нижний Новгород');

  const [weatherData, setWeatherData] = useState();
  const [astronomyData, setAstronomyData] = useState();

  const getWeatherData = () => {
    request(
      {
        url: 'forecast.json',
        params: {
          days: 4,
          q: search,
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
          q: search,
        },
      },
      setAstronomyData
    );
  };

  useEffect(getWeatherData, [search]);

  useEffect(getAstronomyData, [search]);

  // const weatherData = useRequest(
  //   {
  //     url: 'forecast.json',
  //     params: {
  //       days: 4,
  //       q: search,
  //     },
  //   },
  //   [search]
  // );

  // const astronomyData = useRequest(
  //   {
  //     url: 'astronomy.json',
  //     params: {
  //       q: search,
  //     },
  //   },
  //   [search]
  // );

  return (
    <Layout>
      <Header setSearch={setSearch} />
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
