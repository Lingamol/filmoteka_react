import {
  CardDescription,
  CardGenre,
  CardImg,
  CardItem,
  //   CardLink,
  CardTitle,
} from './MovieCard.styled';

const MovieCard = ({ film }) => {
  //   const { film } = props;
  return (
    <CardItem class="card-set__item" id={film.id}>
      {/* <CardLink href="#" id={film.id} class="card-link"> */}
      <picture>
        <source
          srcset={`
                    ${film.base_url}w780/${film.poster_path} 1x,
                    ${film.base_url}original/${film.poster_path} 2x"`}
          media="(min-width: 1280px)"
          type="image/jpeg"
        />
        <source
          srcset={`
                    ${film.base_url}w342/${film.poster_path} 1x,
                    ${film.base_url}w500/${film.poster_path} 2x"`}
          media="(min-width: 768px)"
          type="image/jpeg"
        />
        <source
          srcset={`
                    ${film.base_url}w185/${film.poster_path} 1x,
                    ${film.base_url}w342/${film.poster_path} 2x"`}
          media="(max-width: 480px)"
          type="image/jpeg"
        />
        <CardImg
          id={film.id}
          loading="lazy"
          src={`${film.base_url}w342/${film.poster_path}"`}
          alt={film.title}
          class="card-set__img "
        />
      </picture>

      <CardTitle class="card-set__title">{film.title}</CardTitle>
      <CardDescription class="card-set__description" id={film.id}>
        <CardGenre class="card-set__genre" id={film.id}>
          {film.filmGenreList} {film.releaseYear}
        </CardGenre>
      </CardDescription>
      {/* </CardLink> */}
    </CardItem>
  );
};
export default MovieCard;
