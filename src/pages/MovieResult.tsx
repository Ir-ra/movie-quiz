import { useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export interface Movie {
  title: string;
  year: string;
  poster: string;
}

export default function MovieResult() {
  const [movies, setMovies] = useLocalStorage<Movie[]>('movies', []);
  const [loading, setLoading] = useState(false);

  const [searchQuery] = useLocalStorage('searchQuery', '');
  console.log('movies', movies);

  const API_KEY = "fc0349e3";

  useEffect(() => {
    setLoading(true);

    fetch(`https://www.omdbapi.com/?s=${encodeURIComponent(searchQuery)}&apikey=${API_KEY}`)
      .then((res) => res.json())
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
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, [searchQuery, setMovies]);

  return (
    <div className="contaiter">
      {loading && 'Loading ... '}
      {movies.map((m, i) => (
        <ul key={i}>
          <li>
            <img src={m.poster} alt={m.title} />
          </li>
        </ul>
      ))}
    </div>
  )
}
