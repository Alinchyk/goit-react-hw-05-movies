import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import MoviesLayout from './MoviesLayout/MoviesLayout';
import NotFoundPage from './NotFoundPage/NotFoundPage';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';

const Home = lazy(() => import('../views/Home/Home'))
const MoviesSearchView = lazy(() => import('../views/MoviesSearchForm/MoviesSearchView'))
const MovieDetailsView = lazy(() => import('../views/MovieDetailsView'))
const CastView = lazy(() => import('../views/CastView'))
const ReviewsView = lazy(() => import('../views/ReviewsView'))

export default function App() {
  return (
      <Suspense fallback={<Loader />}>   
    <Routes>
      <Route path="/" element={<MoviesLayout />}>
          <Route index element={<Home />} />

          <Route path="movies" element={<MoviesSearchView />} />
          <Route path="movies/:movieId" element={<MovieDetailsView />}>
            <Route path="cast" element={<CastView />} />
            <Route path="reviews" element={<ReviewsView />} />
          </Route>
          
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
       </Suspense>
  );
}

