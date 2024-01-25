import { renderWithStoreAndTheme, screen, fireEvent } from '../../../../tests/test-utils';
import ItemMenu from './ItemMenu.component';

const mockItem = {
  title: 'Item Teste',
  description: 'Descrição do item teste',
  price: 1000,
  imageUrl: 'url-da-imagem',
  quantity: 1
};

describe('<ItemMenu />', () => {
  it('deve renderizar título, descrição e preço corretamente', () => {
    renderWithStoreAndTheme(
      <ItemMenu
        title={mockItem.title}
        description={mockItem.description}
        price={mockItem.price}
        imageUrl={mockItem.imageUrl}
        quantity={mockItem.quantity}
        openDetails={() => { }}
      />
    );

    expect(screen.getByText(mockItem.title)).toBeInTheDocument();
    expect(screen.getByText(mockItem.description)).toBeInTheDocument();
    expect(screen.getByText('R$ 1000,00')).toBeInTheDocument();
  });

  it('deve exibir a quantidade quando maior que zero', () => {
    renderWithStoreAndTheme(
      <ItemMenu
        title="Item Teste"
        description="Descrição"
        price={1000}
        imageUrl="url-da-imagem"
        quantity={3}
        openDetails={() => { }}
      />
    );

    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('deve chamar a função openDetails quando clicado', () => {
    const openDetailsMock = jest.fn();
    renderWithStoreAndTheme(
      <ItemMenu
        title="Item Teste"
        description="Descrição"
        price={1000}
        imageUrl="url-da-imagem"
        quantity={1}
        openDetails={openDetailsMock}
      />
    );

    fireEvent.click(screen.getByText('Item Teste'));
    expect(openDetailsMock).toHaveBeenCalledTimes(1);
  });
});
