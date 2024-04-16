import React from 'react';
import Drama from '../../assets/emojis/Drama.svg';
import Comedy from '../../assets/emojis/Comedy.svg';
import Action from '../../assets/emojis/Action.svg';
import Thriller from '../../assets/emojis/Thriller.svg';
import ScienceFiction from '../../assets/emojis/Science_fiction.svg';

interface Genre {
  name: string;
  icon: string;
}

const Selector = React.memo(({ selectedOption, setSelectedOption, setIsSelected }: {
  selectedOption: string;
  setSelectedOption: (option: string) => void;
  setIsSelected: React.Dispatch<React.SetStateAction<boolean>>;
}) => {

  const handleSelect = (genre: string) => {
    setSelectedOption(genre);
    setIsSelected(true);
  };

  const genres: Genre[] = [
    { name: 'Drama', icon: Drama },
    { name: 'Comedy', icon: Comedy },
    { name: 'Action', icon: Action },
    { name: 'Thriller', icon: Thriller },
    { name: 'Science fiction', icon: ScienceFiction }
  ];

  return (
    <div className="select">
      {genres.map((genre) => (
        <button
          key={genre.name}
          className={`select__button ${selectedOption === genre.name ? 'select__button--selected' : ''}`}
          onClick={() => handleSelect(genre.name)}
        >
          <div className="select__info">
            <img src={genre.icon} alt={genre.name} className="select__info--icon" />
            <p className="select__info--text">
              {genre.name}
            </p>
          </div>

          <div className="select__check">
            <label htmlFor={`checkbox-${genre.name}`} className="select__check--label">
              <input
                id={`checkbox-${genre.name}`}
                type="checkbox"
                className='select__check--input'
              />
            </label>

          </div>
        </button>
      ))}
    </div>
  )
})

export default Selector;