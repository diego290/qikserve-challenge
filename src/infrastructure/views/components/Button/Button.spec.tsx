
import { fireEvent, renderWithStoreAndTheme, screen } from '../../../../tests/test-utils';
import Button from './Button.component';

describe('<Button />', () => {
  it('deve renderizar o botão com o texto correto', () => {
    renderWithStoreAndTheme(<Button name="Test" />);
    expect(screen.getByRole('button')).toHaveTextContent('Test');
  });

  it('deve exibir as informações quando fornecidas', () => {
    renderWithStoreAndTheme(<Button name="Test" info="Info" />);
    expect(screen.getByRole('button')).toHaveTextContent('Test • Info');
  });

  it('não deve exibir informações quando não fornecidas', () => {
    renderWithStoreAndTheme(<Button name="Test" />);
    expect(screen.getByRole('button')).toHaveTextContent('Test');
    expect(screen.getByRole('button')).not.toHaveTextContent('•');
  });

  it('deve chamar a função onClick quando clicado', () => {
    const handleClick = jest.fn();
    renderWithStoreAndTheme(<Button name="Clickable" onClick={handleClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
