import { useContext, useState } from "react";
import Button from "../components/Button/Button";
import Selector from "../components/Selector/Selector";
import Title from "../components/Title/Title";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
import { ProgressContext } from "../context/ProgressContext";

export default function Questionnaire() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useLocalStorage('selectedOption', '');
  const [isSelected, setIsSelected] = useState(!!selectedOption);
  const { setProgress } = useContext(ProgressContext);

  const handleNextButtonClick = () => {
    navigate('/movie-search');
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setIsSelected(true);
    setProgress(33);
  };

  return (
    <div className="container">
      <div className="questionnaire">
        <div className="questionnaire__content">
          <Title text={'Your favorite movie genre?'} />

          <Selector
            selectedOption={selectedOption}
            setSelectedOption={handleOptionSelect}
            setIsSelected={setIsSelected}
          />
        </div>
      </div>

      <Button
        text='Continue'
        isSelected={isSelected}
        onClick={handleNextButtonClick}
      />
    </div>
  )
}
