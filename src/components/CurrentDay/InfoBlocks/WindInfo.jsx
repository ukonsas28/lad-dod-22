import { Tooltip } from 'antd';
import { InfoWrapper } from '../../InfoWrapper';

export const WindInfo = ({ windKph, gustKph, windDir }) => {
  return (
    <InfoWrapper title="ИНФОРМАЦИЯ О ВЕТРЕ">
      <Tooltip title="Скорость ветра" placement="topLeft">
        <span>{`${windKph} км/ч`}</span>
      </Tooltip>
      <Tooltip title="Порывы ветра" placement="topLeft">
        <span>{`${gustKph} км/ч`}</span>
      </Tooltip>
      <Tooltip title="Направление ветра" placement="topLeft">
        <span>{windDir}</span>
      </Tooltip>
    </InfoWrapper>
  );
};
