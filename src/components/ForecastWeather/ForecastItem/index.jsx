export const ForecastItem = ({ data: { astro, day, date } }) => {
  return (
    <div>
      <br />
      <div>{date}</div>
      <div>{`${day?.condition.text}`}</div>
      <img src={day?.condition.icon} alt="icon" />
      <div>{`${day?.avghumidity} - Humidity as percentage`}</div>
      <div>{`${day?.avgtemp_c} - Temperature in celsius`}</div>
      <div>{`${astro?.sunrise} - sunrise`}</div>
      <div>{`${astro?.sunset} - sunset`}</div>
    </div>
  );
};
