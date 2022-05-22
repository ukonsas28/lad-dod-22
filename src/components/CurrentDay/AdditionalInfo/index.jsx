import { Tooltip } from 'antd';
import style from './AdditionalInfo.module.scss';

export const AdditionalInfo = ({ feelsLike, pressure, humidity, uv }) => {
  return (
    <div className={style.additional_info}>
      <span className={style.additional_info_title}>ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ</span>
      <div className={style.additional_info_description}>
        <Tooltip title="Ощущается как" placement="topLeft">
          <span className={style.temp}>{feelsLike}</span>
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
      </div>
    </div>
  );
};
