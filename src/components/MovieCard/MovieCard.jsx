import StarRaiting from 'components/StarRating/StarRaiting';
import {
  CardDescription,
  CardGenre,
  CardImg,
  CardItem,
  //   CardLink,
  CardTitle,
  CardYear,
  RatingWrapper,
} from './MovieCard.styled';

const MovieCard = ({ film }) => {
  return (
    <CardItem className="card-set__item" id={film.id}>
      <RatingWrapper>
        <StarRaiting rating={film.vote_average} starLimit={10} />
      </RatingWrapper>
      <picture>
        <source
          srcSet={`
      ${film.base_url}w780/${film.poster_path} 1x,
      ${film.base_url}original/${film.poster_path} 2x`}
          media="(min-width: 1280px)"
          type="image/jpeg"
        />
        <source
          srcSet={`
      ${film.base_url}w342/${film.poster_path} 1x,
      ${film.base_url}w500/${film.poster_path} 2x`}
          media="(min-width: 768px)"
          type="image/jpeg"
        />
        <source
          srcSet={`
      ${film.base_url}w185/${film.poster_path} 1x,
      ${film.base_url}w342/${film.poster_path} 2x`}
          media="(max-width: 480px)"
          type="image/jpeg"
        />
        <CardImg
          id={film.id}
          loading="lazy"
          src={`${film.base_url}w342/${film.poster_path}`}
          alt={film.title}
          className="card-set__img"
        />
      </picture>
      <CardTitle className="card-set__title">{film.title}</CardTitle>
      <CardDescription className="card-set__description" id={film.id}>
        <CardGenre className="card-set__genre" id={film.id}>
          {film.filmGenreList}
        </CardGenre>
        <CardYear>{film.releaseYear}</CardYear>
      </CardDescription>
      {/* </CardLink> */}
    </CardItem>
  );
};
export default MovieCard;
