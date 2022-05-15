import style from "./Layout.module.scss";

export const Layout = ({ children }) => {
  return (
    <main className={style.wrapper}>
      {children}
    </main>
  );
};
