import { Link, useLocation } from 'react-router-dom';
import propTypes from 'prop-types';
import Loader from 'components/Loader/Loader';
import { Title } from './MovieList.styled';

export default function MoviesList({ movies }) {
  const location = useLocation();

  if (!movies) {
    return <Loader />;
  }

  return (
    <>
      {movies && (
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`movies/${id}`} state={{ from: location.pathname }}>
                <Title>{title}</Title>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

MoviesList.propTypes = {
  movies: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      title: propTypes.string.isRequired,
    })
  ),
};
