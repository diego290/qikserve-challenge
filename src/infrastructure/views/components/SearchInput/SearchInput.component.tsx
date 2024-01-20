import { useState } from 'react';
import { SearchInputStyled } from './SearchInput.styled';

interface Props {
  placeholder: string
}

function SearchInput({ placeholder }: Props) {
  const [message, setMessage] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  return (
    <SearchInputStyled.SearchContainer>
      <SearchInputStyled.Icon />
      <SearchInputStyled.SearchInput
        placeholder={placeholder}
        value={message}
        onChange={handleChange}
      />
    </SearchInputStyled.SearchContainer>
  );
}

export default SearchInput;
