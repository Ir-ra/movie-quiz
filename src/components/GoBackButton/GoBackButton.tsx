export const GoBackButton = ({pathname}: {
  pathname: string;
}) => {
  return (
    <button
      type="button"
      className="header__button"
      onClick={() => window.history.back()}
      disabled={pathname === '/'}
    >
      <img
        src="/src/assets/back.svg"
        alt="arrow back"
        className={`header__button--arrow ${pathname === '/' ? 'header__button--select': ''}`}/>
    </button>
  );
};
