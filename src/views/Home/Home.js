import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'components/services/moviesApi';
import MoviesList from 'components/MoviesList/MoviesList';
import { HomeTitle } from './Home.styled';

export default function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movies = await getTrendingMovies();
        setTrendingMovies(movies);
      } catch (error) {
        console.error('Error while fetching trending movies:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <HomeTitle>Trending today</HomeTitle>
      <MoviesList movies={trendingMovies} />
    </main>
  );
}
