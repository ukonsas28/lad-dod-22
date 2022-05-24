/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { request } from '../../api';
import { Layout, CurrentDay, ForecastWeather, Header } from '../../components';
import { useRequest } from '../../hooks';

export const App = () => {
  const [location, setLocation] = useState('Нижний Новгород');

  const weatherData = useRequest(
    {
      url: 'forecast.json',
      params: {
        days: 4,
        q: location,
      },
    },
    [location]
  );

  const astronomyData = useRequest(
    {
      url: 'astronomy.json',
      params: {
        q: location,
      },
    },
    [location]
  );


  return (
    <Layout>
      <Header setLocation={setLocation} />
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
