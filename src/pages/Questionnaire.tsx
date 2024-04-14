import { useState } from "react";
import Button from "../components/Button/Button";
import Selector from "../components/Selector/Selector";
import Title from "../components/Title/Title";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";

export default function Questionnaire() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useLocalStorage('selectedOption', '');
  const [isSelected, setIsSelected] = useState(false);

  const handleNextButtonClick = () => {
    navigate('/movie-search');
  }

  return (
    <div className="container">
      <div className="questionnaire">
        <div className="questionnaire__content">
          <Title text={'Your favorite movie genre?'} />

          <Selector
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            setIsSelected={setIsSelected}
          />
        </div>
      </div>

      <Button text='Continue' isSelected={isSelected} onClick={handleNextButtonClick} />
    </div>
  )
}
