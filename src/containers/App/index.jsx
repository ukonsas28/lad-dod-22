import { useEffect, useState } from "react";
import { request } from "../../api";
import { Layout, CurrentDay, ForecastWeather, Header } from "../../components";
// import { useRequest } from "../../hooks";

export const App = () => {
  // const currentLocation = useRequest({
  //   url: "ip.json",
  // });

  // const weatherData = useRequest({
  //   url: "forecast.json",
  //   params: {
  //     days: 4,
  //   },
  // });

  // const astronomyData = useRequest({
  //   url: "astronomy.json",
  // });

  const [weatherData, setWeatherData] = useState();
  const [currentLocation, setCurrentLocation] = useState();
  const [astronomyData, setAstronomyData] = useState();

  const getCurrentLocation = () => {
    request(
      {
        url: "ip.json",
      },
      setCurrentLocation
    );
  };

  const getWeatherData = () => {
    request(
      {
        url: "forecast.json",
        params: {
          days: 4,
        },
      },
      setWeatherData
    );
  };

  const getAstronomyData = () => {
    request(
      {
        url: "astronomy.json",
      },
      setAstronomyData
    );
  };

  useEffect(getWeatherData, []);

  useEffect(getCurrentLocation, []);

  useEffect(getAstronomyData, []);

  return (
    <Layout>
      <Header />
      <CurrentDay
        astronomyData={astronomyData?.astronomy.astro}
        locationData={currentLocation}
        weatherData={weatherData?.current}
        hourWeatherData={weatherData?.forecast.forecastday[0].hour}
      />
      <ForecastWeather
        weatherData={weatherData?.forecast.forecastday.slice(1, 3)}
      />
    </Layout>
  );
};
