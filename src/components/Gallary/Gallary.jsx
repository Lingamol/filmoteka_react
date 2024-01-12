import { GallaryWrapper } from './Gallary.styled';
import { useState } from 'react';
import { useEffect } from 'react';
import {
  fetchData,
  // getConfig,
  // getGenre,
  fetchDataConfigAndGenre,
} from 'services/axios';
import {
  filmAddGenreList,
  filmAddUrl,
} from 'helpers/functions-for-popular-gallery';
import MovieCard from 'components/MovieCard';

const Gallary = () => {
  const [movies, setMovies] = useState(null);
  // const [genres, setGenres] = useState(null);
  // const [config, setConfig] = useState(null);
  useEffect(() => {
    console.log('Component created!');
    const fetchMovies = async () => {
      const results = await fetchData();
      const config = await fetchDataConfigAndGenre();
      const { genres, base_url } = config;
      const movies = filmAddGenreList({ genres, results });

      setMovies(filmAddUrl({ movies, base_url }));
    };
    fetchMovies();
  }, []);

  if (!movies) {
    return;
  }

  return (
    <GallaryWrapper>
      {movies.map(film => (
        <MovieCard key={film.id} film={film} />
      ))}
    </GallaryWrapper>
  );
};
export default Gallary;
