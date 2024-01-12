import { useParams } from 'react-router-dom';
const Movies = () => {
  const { id_movie } = useParams();
  return <div>Movie id={id_movie}</div>;
};
export default Movies;
