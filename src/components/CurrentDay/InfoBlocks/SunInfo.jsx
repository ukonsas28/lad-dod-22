import { Tooltip } from 'antd';
import { InfoWrapper } from './InfoWrapper';

export const SunInfo = ({ sunrise, sunset }) => {
  return (
    <InfoWrapper title="ВОСХОД И ЗАКАТ">
      <Tooltip title="Восход" placement="topLeft">
        <span>{sunrise}</span>
      </Tooltip>
      <Tooltip title="Закат" placement="topLeft">
        <span>{sunset}</span>
      </Tooltip>
    </InfoWrapper>
  );
};
