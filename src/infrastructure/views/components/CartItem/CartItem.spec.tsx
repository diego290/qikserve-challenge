import { renderWithStoreAndTheme, screen } from '../../../../tests/test-utils';
import CartItem from './CartItem.component';

const mockItem = {
  name: 'Produto Teste',
  description: 'Descrição do produto teste',
  price: 1000,
};

describe('<CartItem />', () => {
  it('deve renderizar nome, descrição e preço do item corretamente', () => {
    renderWithStoreAndTheme(
      <CartItem
        name={mockItem.name}
        description={mockItem.description}
        price={mockItem.price}
      />
    );

    expect(screen.getByText(mockItem.name)).toBeInTheDocument();
    expect(screen.getByText(mockItem.description)).toBeInTheDocument();
    expect(screen.getByText('R$ 1000,00')).toBeInTheDocument();
  });

  it('não deve renderizar a descrição se ela não for fornecida', () => {
    const mockItem = {
      name: 'Produto Teste',
      price: 1000,
    };

    renderWithStoreAndTheme(
      <CartItem name={mockItem.name} price={mockItem.price} description='' />
    );

    expect(screen.getByText(mockItem.name)).toBeInTheDocument();
    expect(screen.queryByText(/descrição/i)).not.toBeInTheDocument();
  });
});
