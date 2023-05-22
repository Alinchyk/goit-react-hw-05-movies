// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { getReviewsInfo } from 'components/services/moviesApi';
// import Reviews from 'components/Reviews/Reviews';

// export default function ReviewsView() {
//   const { movieId } = useParams();
//   const [review, setReview] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const review = await getReviewsInfo(movieId);
//         setReview(review);
//       } catch (error) {
//         console.error('Error while fetching review:', error);
//       }
//     };

//     fetchData();
//   }, [movieId]);

//   return <Reviews review={review} />;
// }
