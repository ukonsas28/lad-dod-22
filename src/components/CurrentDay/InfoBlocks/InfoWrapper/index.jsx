import style from './InfoWrapper.module.scss';

export const InfoWrapper = ({ title, children }) => {
  return (
    <div className={style.info}>
      <span className={style.info_title}>{title}</span>
      <div className={style.info_description}>{children}</div>
    </div>
  );
};
