import { useState } from "react";
import Button from "../components/Button/Button";
import Selector from "../components/Selector/Selector";
import Title from "../components/Title/Title";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function Questionnaire() {
  const [selectedOption, setSelectedOption] = useLocalStorage('selectedOption', '');
  const [isSelected, setIsSelected] = useState(false);

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

        <Button text='Continue' isSelected={isSelected} />
      </div>

    </div>
  )
}
