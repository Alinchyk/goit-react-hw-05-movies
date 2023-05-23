import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsInfo } from 'components/services/moviesApi';
import Reviews from 'components/Reviews/Reviews';

export default function ReviewsView() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reviews = await getReviewsInfo(movieId);
        setReviews(reviews);
      } catch (error) {
        console.error('Error while fetching reviews:', error);
      }
    };

    fetchData();
  }, [movieId]);

  return <Reviews reviews={reviews} />;
}
