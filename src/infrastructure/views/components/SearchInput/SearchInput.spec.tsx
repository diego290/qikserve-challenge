import { renderWithStoreAndTheme, screen, fireEvent } from '../../../../tests/test-utils';
import SearchInput from './SearchInput.component';

describe('<SearchInput />', () => {
  it('deve renderizar com o placeholder correto', () => {
    const placeholderText = 'Search menu items';
    renderWithStoreAndTheme(<SearchInput placeholder={placeholderText} onChange={() => { }} />);
    const searchInput = screen.getByPlaceholderText(placeholderText);
    expect(searchInput).toBeInTheDocument();
  });

  it('deve chamar onChange com o valor correto quando alterado', () => {
    const onChangeMock = jest.fn();
    const testValue = 'Teste';

    renderWithStoreAndTheme(<SearchInput placeholder="Search menu items" onChange={onChangeMock} />);
    const searchInput = screen.getByTestId('search-input');

    fireEvent.change(searchInput, { target: { value: testValue } });
    expect(onChangeMock).toHaveBeenCalledWith(testValue);
  });
});
