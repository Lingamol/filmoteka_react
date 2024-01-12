import { IconSvg } from 'components/IconSvg/IconSvg';
import { FormInput, FormSearch, SearchBtn } from './SearchForm.styled';

const SearchForm = () => {
  return (
    <FormSearch>
      <FormInput
        type="text"
        name="searchQuery"
        autocomplete="off"
        placeholder="Movie search"
      />
      <SearchBtn type="submit">
        <IconSvg name="search" size="12" />
        {/* <svg class="header-search-form__icon" width="12" height="12">
          <use href="/src/images/icons.svg#search"></use>
        </svg> */}
      </SearchBtn>
    </FormSearch>
  );
};
export default SearchForm;
