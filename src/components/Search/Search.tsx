import { useEffect, useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Movie } from "../../pages/MovieResult";

export default function Search({ setIsButtonActive, setSearchQuery }: {
  setIsButtonActive: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [query, setQuery] = useState('');
  const [, setMovies] = useLocalStorage<Movie[]>('movies', []);
  const [validationStatus, setValidationStatus] = useState('');

  const validate = (value: string) => {
    setValidationStatus('');
    if (value.trim() === '') {
      return false;
    }

    if (!/^[a-zA-Z0-9&!?,$.@'\-\s]+$/.test(value)) {
      setValidationStatus('Error');
      return false;
    }

    if (value.length > 50) {
      setValidationStatus('length_error');
      return false;
    }
    return true;
  }

  const onBlurHandle = () => {
    setQuery(prev => prev.trim());
    setSearchQuery(query.trim());
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setIsButtonActive(validate(value));
    setQuery(value);
    setMovies([]);
  };

  useEffect(() => {
    setQuery('');
    setSearchQuery('');
    setMovies([]);
  }, [setMovies, setQuery, setSearchQuery]);

  return (
    <div className='search'>
      <label htmlFor="movieSearch" className="search__label">
        <input
          type="text"
          name="movieSearch"
          id="movieSearch"
          placeholder="Movie title here"
          className={`search__input ${query ? 'search__input--black' : ''}  ${validationStatus ? 'search__input--error' : ''}`}
          value={query}
          onChange={handleInputChange}
          onBlur={onBlurHandle}
        />
      </label>

      {validationStatus === 'Error' &&
        <p className="search__error">
          There are symbols that are not allowed
        </p>
      }

      {validationStatus === 'length_error' &&
        <p className="search__error">
          There is too many symbols
        </p>
      }
    </div>
  )
}
