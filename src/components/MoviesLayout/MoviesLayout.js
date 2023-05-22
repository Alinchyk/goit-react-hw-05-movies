import { Outlet } from 'react-router-dom';
import Container from 'components/Container/Container';
import { Header, Navigation, Link } from './MoviesLayout.styled';

export default function MoviesLayout() {
  return (
    <Container>
      <Header>
        <nav>
          <Navigation>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </Navigation>
        </nav>
      </Header>

      <main>
        <Outlet />
      </main>
    </Container>
  );
}
