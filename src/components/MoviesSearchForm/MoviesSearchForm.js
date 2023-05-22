import {
  SearchButton,
  SearchForm,
  SearchInput,
} from './MoviesSearchForm.styled';

export default function MoviesSearchForm() {
  return (
    <SearchForm>
      <SearchInput
        type="text"
        name="movie"
        placeholder="Enter the movie..."
        autoComplete="off"
      ></SearchInput>
      <SearchButton type="submit">Search</SearchButton>
    </SearchForm>
  );
}
