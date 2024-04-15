import { useLocation } from "react-router-dom"
import { GoBackButton } from "../GoBackButton/GoBackButton"
import { useContext, useEffect } from "react";
import { ProgressContext } from "../../context/ProgressContext";

export default function Header() {
  const { pathname } = useLocation();
  console.log('pathname', pathname);
  const {progress ,setProgress} = useContext(ProgressContext);

  useEffect(() => {
    switch (pathname) {
      case '/':
        setProgress(0);
        break;
      case '/movie-search':
        setProgress(67);
        break;
      case '/result':
        setProgress(100);
        break;
      default:
        setProgress(0);
        break;
    }
  }, [pathname, setProgress]);

  return (
    <header className="header">
      <div className="header__back-img" />
      <div className="header__container">
        <GoBackButton pathname={pathname} />

        <div className="header__right-side">
          <div>{progress}%</div>

          <button className="header__button">
            <img
              src="/src/assets/burger.svg"
              alt="burger menu"
              className="header__button--burger" />
          </button>
        </div>
      </div>

      <div className="progress">
        <div className="progress__line" style={{ width: `${progress}%` }} />
      </div>
    </header>
  )
}
