import { Tooltip } from 'antd';
import { InfoWrapper } from '../../InfoWrapper';

export const AdditionalInfo = ({ feelsLike, pressure, humidity, uv }) => {
  return (
    <InfoWrapper title="ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ">
      <Tooltip title="Ощущается как" placement="topLeft">
        <span>{feelsLike}</span>
      </Tooltip>
      <Tooltip title="Давление" placement="topLeft">
        <span>{`${Math.trunc(pressure * 0.7501)} мм/р.ст`}</span>
      </Tooltip>
      <Tooltip title="Влажность воздуха" placement="topLeft">
        <span>{humidity}</span>
      </Tooltip>
      <Tooltip title="Ультрафиолет" placement="topLeft">
        <span>{uv}</span>
      </Tooltip>
    </InfoWrapper>
  );
};
