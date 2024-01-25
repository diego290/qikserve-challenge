import { renderWithStoreAndTheme, screen, fireEvent } from '../../../../tests/test-utils';
import SectionsMenu from './SectionsMenu.component';

describe('<SectionsMenu />', () => {
  const mockProps = {
    title: 'Seção Teste',
    imageUrl: 'url-da-imagem-teste',
    onClick: jest.fn(),
    isSelected: false
  };

  it('deve renderizar com a imagem, título e linha', () => {
    renderWithStoreAndTheme(<SectionsMenu {...mockProps} />);
    expect(screen.getByTestId('image-circle')).toHaveStyle(`background-image: url(${mockProps.imageUrl})`);
    expect(screen.getByTestId('menu-title')).toHaveTextContent(mockProps.title);
    expect(screen.getByTestId('line')).toBeInTheDocument();
  });

  it('deve aplicar a classe "selected" quando isSelected é true', () => {
    renderWithStoreAndTheme(<SectionsMenu {...mockProps} isSelected={true} />);
    expect(screen.getByTestId('image-circle')).toHaveClass('selected');
    expect(screen.getByTestId('menu-title')).toHaveClass('selected');
    expect(screen.getByTestId('line')).toHaveClass('selected');
  });

  it('deve chamar onClick quando clicado', () => {
    renderWithStoreAndTheme(<SectionsMenu {...mockProps} />);
    fireEvent.click(screen.getByTestId('sections-menu-container'));
    expect(mockProps.onClick).toHaveBeenCalledTimes(1);
  });
});
