import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import MoviesLayout from './MoviesLayout/MoviesLayout';
import Home from 'views/Home/Home';
import MoviesSearchFormView from 'views/MoviesSearchForm/MoviesSearchFormView';
import MovieDetails from 'views/MovieDetailsView';
import CastView from 'views/CastView';
import ReviewsView from 'views/ReviewsView';
import NotFoundPage from './NotFoundPage/NotFoundPage';
import Loader from './Loader/Loader';


export default function App() {
  return (
      <Suspense fallback={<Loader />}>
    <Routes>
      <Route path="/" element={<MoviesLayout />}>
        <Route index element={<Home />} />
        <Route path="movies/*" element={<MoviesSearchFormView />} />

        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<CastView />} />
          <Route path="reviews" element={<ReviewsView />} />
        </Route>
        
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      </Routes>
      </Suspense>
  );
}
