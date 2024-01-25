import { SearchInputStyled } from './SearchInput.styled';

interface Props {
  placeholder: string;
  onChange: (text: string) => void;
}

function SearchInput({ placeholder, onChange }: Props) {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <SearchInputStyled.SearchContainer>
      <SearchInputStyled.Icon />
      <SearchInputStyled.SearchInput
        data-testid="search-input"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </SearchInputStyled.SearchContainer>
  );
}

export default SearchInput;
