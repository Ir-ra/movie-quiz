import { useState } from "react";
import Title from "../components/Title/Title";
import Button from "../components/Button/Button";
import { useNavigate } from "react-router-dom";
import Search from "../components/Search/Search";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function MovieSearch() {
  const navigate = useNavigate();
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [, setSearchQuery] = useLocalStorage('searchQuery', "");

  const handleNextButtonClick = () => {
    navigate('/result');
  };

  return (
    <main>
      <div className="container">
        <div className="movieSearch">
          <Title text="Enter movie title" />
          <Search
            setIsButtonActive={setIsButtonActive}
            setSearchQuery={setSearchQuery}
          />
        </div>

        <Button
          text="Continue"
          isSelected={isButtonActive}
          onClick={handleNextButtonClick}
        />
      </div>
    </main>
  )
}
