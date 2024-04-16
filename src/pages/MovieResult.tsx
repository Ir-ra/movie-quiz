import { useEffect, useMemo, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import Button from "../components/Button/Button";
import Result from "../components/Result/Result";
import { Loader } from "../components/Loader/Loader";

export interface Movie {
  title: string;
  year: string;
  poster: string;
}

export default function MovieResult() {
  const [movies, setMovies] = useLocalStorage<Movie[]>('movies', []);
  const [loading, setLoading] = useState(false);
  const [searchQuery] = useLocalStorage('searchQuery', '');
  const API_KEY = "fc0349e3";

  useEffect(() => {
    setLoading(true);

    fetch(`https://www.omdbapi.com/?s=${encodeURIComponent(searchQuery)}&apikey=${API_KEY}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        if (data.Response === 'True') {
          setMovies(data.Search
            .map((m: { Title: string; Year: string; Poster: string; }) => (
              {
                title: m.Title,
                year: m.Year,
                poster: m.Poster
              }
            )));
        } else {
          setMovies([]);
        }
      })
      .catch((err) => console.error("Error fetching data:", err))
      .finally(() => setLoading(false))
  }, [searchQuery, setMovies]);

  const sortedMovies = useMemo(() => movies
    .filter(movie => movie.poster !== 'N/A')
    .sort((a, b) => +b.year.slice(0, 4) - +a.year.slice(0, 4)),
    [movies]);

  return (
    <div className="container">
      {loading && <Loader />}

      {!loading && (
        <Result sortedMovies={sortedMovies}/>
      )}

      <Button text='Continue' />
    </div>
  )
}
