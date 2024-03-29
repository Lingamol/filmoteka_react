export function moviesAddYearRelease(list) {
  // const { results } = dataForModify;

  const filmAddYearRelease = list.map(item => {
    const { release_date } = item;
    let releaseYear;
    if (release_date !== undefined) {
      if (release_date.length > 4) {
        releaseYear = release_date.slice(0, 4);
      } else {
        releaseYear = 'There is no info';
      }
    } else {
      releaseYear = 'There is no info';
    }
    // releaseYear = release_date.slice(0, 4);
    return { releaseYear, ...item };
  });
  //   console.log('filmAddYearRelease', filmAddYearRelease);
  return filmAddYearRelease;
}
////////////////////////////////////////////////////////////////////////////////
export function filmAddGenreList(genres, results) {
  // const { genres, results } = dataForModify;
  // console.log('dataForModify', results);
  // console.log('genres', genres);
  const filmAddGenreList = results.map(result => {
    const { genre_ids } = result;
    const filmGenreList = genresList({ genre_ids, genres });
    return { filmGenreList, ...result };
  });

  //   console.log('filmAddGenreList', filmAddGenreList);
  return filmAddGenreList;
}
function genresList(genreToFindData) {
  const { genre_ids, genres } = genreToFindData;
  // console.log(genre_ids.length);
  const genresNames = [];
  for (let i = 0; i < genre_ids.length; i += 1) {
    if (i < 2) {
      const id = genre_ids[i];
      genresNames.push(genresById({ id, genres }));
    } else {
      genresNames.push('Other');
      break;
    }
  }
  return genresNames.join(', ');
}

function genresById(genreToFind) {
  const { id, genres } = genreToFind;
  for (const genre of genres) {
    if (genre.id === id) {
      return genre.name;
    }
  }
}
export function filmAddUrl(list, base_url) {
  // const {
  //   base_url,
  //   movies: { results },
  // } = dataForModify;
  // //   console.log(' dataForModify', dataForModify);
  const filmAddUrl = list.map(item => {
    return { base_url, ...item };
  });

  //   console.log('filmAddUrl', filmAddUrl);
  return filmAddUrl;
}

export function filmCheckImgUrl(dataForModify) {
  //   const { results } = dataForModify;
  //   console.log('dataForModify', dataForModify);
  const filmCheckImgUrl = dataForModify.map(result => {
    const { poster_path, releaseYear, title, filmGenreList } = result;
    if (
      poster_path === null ||
      poster_path === undefined ||
      poster_path === ''
    ) {
      //   result.base_url = 'images/';
      result.poster_path = 'uc4RAVW1T3T29h6OQdr7zu4Blui.jpg';
      // return result;
    }
    if (
      releaseYear === null ||
      releaseYear === undefined ||
      releaseYear === ''
    ) {
      //   result.base_url = 'images/';
      result.releaseYear = 'There is no info';
      // return result;
    }
    if (title === null || title === undefined || title === '') {
      //   result.base_url = 'images/';
      result.title = 'There is no info';
      // return result;
    }
    if (
      filmGenreList === null ||
      filmGenreList === undefined ||
      filmGenreList === ''
    ) {
      //   result.base_url = 'images/';
      result.filmGenreList = 'There is no info';
      // return result;
    }
    return result;
  });

  //   console.log('filmCheckImgUrl', filmCheckImgUrl);
  return filmCheckImgUrl;
}
export const preparDataMovie = ({ base_url, movies, genres }) => {
  const results = moviesAddYearRelease(movies);
  return filmAddGenreList({ genres, results });
};
