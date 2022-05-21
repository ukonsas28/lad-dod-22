import { Tooltip } from 'antd';
import style from './SunInfo.module.scss';

export const SunInfo = ({ sunrise, sunset }) => {
  return (
    <div className={style.sun_info}>
      <span className={style.sun_info_title}>ВОСХОД И ЗАКАТ</span>
      <div className={style.sun_info_description}>
        <Tooltip title="Восход" placement="topLeft">
          <span>{sunrise}</span>
        </Tooltip>
        <Tooltip title="Закат" placement="topLeft">
          <span>{sunset}</span>
        </Tooltip>
      </div>
    </div>
  );
};
