import { NavLink, Outlet } from 'react-router-dom';
import Container from 'components/Container/Container';
import styled from 'styled-components';
import s from './MoviesLayout.module.css';

const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #9d0043;
  }
`;

export default function MoviesLayout() {
  return (
    <Container>
      <header className={s.header}>
        <nav>
          <ul className={s.navigation}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </Container>
  );
}
