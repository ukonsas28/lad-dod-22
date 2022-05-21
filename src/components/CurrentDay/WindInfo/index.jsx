import { Tooltip } from 'antd';
import style from './WindInfo.module.scss';

export const WindInfo = ({ windKph, gustKph, windDir }) => {
  return (
    <div className={style.wind_info}>
      <span className={style.wind_info_title}>ИНФОРМАЦИЯ О ВЕТРЕ</span>
      <div className={style.wind_info_description}>
        <Tooltip title="Скорость ветра" placement="topLeft">
          <span>{`${windKph} км/ч`}</span>
        </Tooltip>
        <Tooltip title="Порывы ветра" placement="topLeft">
          <span>{`${gustKph} км/ч`}</span>
        </Tooltip>
        <Tooltip title="Направление ветра" placement="topLeft">
          <span>{windDir}</span>
        </Tooltip>
      </div>
    </div>
  );
};
