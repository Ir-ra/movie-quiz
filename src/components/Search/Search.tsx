import { useEffect, useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Movie } from "../../pages/MovieResult";

export default function Search({ setIsButtonActive }: {
  setIsButtonActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [searchQuery, setSearchQuery] = useLocalStorage('searchQuery', "");
  const [, setMovies] = useLocalStorage<Movie[]>('movies', []);
  const [validationStatus, setValidationStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (value.trim() === '') {
      setValidationStatus('');
      setIsButtonActive(false);
      return;
    }

    if (/^[a-zA-Z0-9&!?,$.@'\-\s]+$/.test(value)) {
      setValidationStatus('');
    } else {
      setValidationStatus('Error');
      setIsButtonActive(false);
      return;
    }

    if (value.length > 50) {
      setValidationStatus('length_error');
      setIsButtonActive(false);
      return;
    }

    setMovies([]);
    setIsButtonActive(!!value);
  };

  useEffect(() => {
    setSearchQuery('');
  }, [setSearchQuery]);

  return (
    <div className={`search`}>
      <label htmlFor="movieSearch" className="search__label">
        <input
          type="text"
          name="movieSearch"
          id="movieSearch"
          placeholder="Movie title here"
          className={`search__input ${searchQuery ? 'search__input--black' : ''}  ${validationStatus ? 'search__input--error' : ''}`}
          value={searchQuery}
          onChange={handleInputChange}
        />
      </label>

      {validationStatus === 'Error' && <p className="search__error">Error text</p>}
      {validationStatus === 'length_error' && <p className="search__error">There is too many symbols</p>}
    </div>
  )
}
