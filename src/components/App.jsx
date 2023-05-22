import { Routes, Route } from 'react-router-dom';
import MoviesLayout from './MoviesLayout/MoviesLayout';
import Home from 'views/Home/Home';
import MoviesView from 'views/MoviesView';
import MovieDetails from 'views/MovieDetailsView';
import CastView from 'views/CastView';
import ReviewsView from 'views/ReviewsView';
import NotFoundPage from './NotFoundPage/NotFoundPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MoviesLayout />}>
        <Route index element={<Home />} />
        <Route path="movies/*" element={<MoviesView />} />

        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<CastView />} />
          <Route path="reviews" element={<ReviewsView />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
