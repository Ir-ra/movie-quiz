import { useLocation } from "react-router-dom"
import GoBackButton from "../GoBackButton/GoBackButton"
import { useContext, useEffect } from "react";
import { ProgressContext, ProgressSteps } from "../../context/ProgressContext";
import Progress from "../Progress/Progress";
import burger from '../../assets/burger.svg';

export default function Header() {
  const { pathname } = useLocation();
  const { currentStep, setCurrentStep, percentage } = useContext(ProgressContext);

  useEffect(() => {
    switch (pathname) {
      case '/movie-quiz/':
        if (currentStep !== ProgressSteps.Start) {
          setCurrentStep(ProgressSteps.Choose);
        } else {
          setCurrentStep(ProgressSteps.Start);
        }
        break;
      case '/movie-search':
        setCurrentStep(ProgressSteps.Search);
        break;
      case '/result':
        setCurrentStep(ProgressSteps.Finish);
        break;
      default:
        setCurrentStep(ProgressSteps.Start);
        break;
    }
  }, [currentStep, pathname, setCurrentStep]);

  return (
    <header className="header">
      <div className="header__back-img" />
      <div className="header__container">
        <GoBackButton pathname={pathname} />

        <div className="header__right-side">
          <div>{percentage}%</div>

          <button className="header__button">
            <img
              src={burger}
              alt="burger menu"
              className="header__button--burger" />
          </button>
        </div>
      </div>

      <Progress percentage={percentage} />
    </header>
  )
}
