export default function Header() {
  return (
    <header className="header">
      <div className="header__back-img" />
      <div className="header__container">
        <button className="header__button">
          <img src="/src/assets/back.svg" alt="arrow back" className="header__button--arrow"/>
        </button>

        <div className="header__right-side">
          <div>10%</div>

          <button className="header__button">
            <img src="/src/assets/burger.svg" alt="arrow back" className="header__button--burger"/>
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
