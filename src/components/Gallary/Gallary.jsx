import { GallaryWrapper } from './Gallary.styled';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectConfigObj, selectUrl } from '../../redux/config/selectors';
import { selectMovies } from '../../redux/movies/selectors';
// import { fetchData, fetchDataConfigAndGenre } from 'services/axios';
import {
  filmAddGenreList,
  filmAddUrl,
  filmCheckImgUrl,
  moviesAddYearRelease,
} from 'helpers/functions-for-popular-gallery';
import MovieCard from 'components/MovieCard';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../../redux/movies/operations ';

const Gallary = () => {
  const { genresList, base_url } = useSelector(selectConfigObj);
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);

  console.log('GenreList', base_url);
  // const { secure_base_url } = ;
  // const { base_url } = configData;

  // console.log('GenreList', genresList);
  // useEffect(() => {
  //   console.log('Component created!');
  //   const fetchMovies = async () => {
  //     const results = await fetchData();
  //     const config = await fetchDataConfigAndGenre();
  //     const { genres, base_url } = config;
  //     let movies = filmAddGenreList({ genres, results });
  //     movies = moviesAddYearRelease(movies);
  //     movies = filmAddUrl({ movies, base_url });
  //     movies = filmCheckImgUrl(movies);
  //     setMovies(movies);
  //   };
  //   fetchMovies();
  // }, []);
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  if (!movies) {
    return;
  }

  let moviesTemp = filmAddGenreList(genresList, movies);
  moviesTemp = moviesAddYearRelease(moviesTemp);
  moviesTemp = filmAddUrl(moviesTemp, base_url);
  // moviesTemp = filmCheckImgUrl(moviesTemp);
  // setMovies(moviesTemp);
  // console.log('movies', moviesTemp);
  return (
    <GallaryWrapper>
      {moviesTemp.map(film => (
        <MovieCard key={film.id} film={film} />
      ))}
    </GallaryWrapper>
  );
};
export default Gallary;
