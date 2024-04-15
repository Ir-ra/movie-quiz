import { useLocation } from "react-router-dom"
import { GoBackButton } from "../GoBackButton/GoBackButton"

export default function Header() {
  const { pathname } = useLocation();
  console.log('pathname', pathname);

  return (
    <header className="header">
      <div className="header__back-img" />
      <div className="header__container">
        <GoBackButton pathname={pathname} />

        <div className="header__right-side">
          <div>10%</div>

          <button className="header__button">
            <img
              src="/src/assets/burger.svg"
              alt="burger menu"
              className="header__button--burger" />
          </button>
        </div>
      </div>

      <div className="progress">
        <div className="progress__line">
        </div>
      </div>
    </header>
  )
}
