import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastInfo } from 'components/services/moviesApi';
import Cast from 'components/Cast/Cast';

export default function CastView() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cast = await getCastInfo(movieId);
        setCast(cast);
      } catch (error) {
        console.error('Error while fetching cast:', error);
      }
    };

    fetchData();
  }, [movieId]);

  return <Cast cast={cast} />;
}
