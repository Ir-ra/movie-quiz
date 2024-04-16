import { Movie } from "../../pages/MovieResult";
import Title from "../Title/Title";
import Girl from '../../assets/woman.png';

export default function Result({ sortedMovies }: {
  sortedMovies: Movie[];
}) {
  return (
    <div className="result">
      <ul className="result__list">
        {sortedMovies.length ?
          (sortedMovies.map((m,) => (
            <li key={`${m.title}_${m.year}`} className="result__item">
              <div className="result__img-container">
                <img src={m.poster} alt={m.title} className="result__img" />
              </div>
              <div className="result__info">
                <h1 className="result__info--title">{m.title}</h1>
                <p className="result__info--year">{m.year}</p>
              </div>
            </li>
          ))) : (
            <div className="result__notFound">
              <img src={Girl} alt="" className="result__notFound--img" />
              <Title text="Oops, no movie found" />
            </div>
          )}
      </ul>
    </div>
  )
}
