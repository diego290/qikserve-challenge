import { renderWithStoreAndTheme, screen, fireEvent } from '../../../../tests/test-utils';
import { addItemWithQuantityAndModifier } from '../../../redux/itemCart/itemCartSlice';
import { store } from '../../../redux/store';
import mockItem from '../../../../tests/mock-item';
import CartMobile from './CartMobile.component';

describe('<CartMobile />', () => {
  const closeCartMobileMock = jest.fn();

  beforeEach(() => {
    store.dispatch(addItemWithQuantityAndModifier({
      item: mockItem,
      quantity: 0,
      selectedModifier: mockItem.modifiers?.[0]?.items?.[0],
      uniqueKey: 'unique-key-for-mock-item',
    }));


  });

  it('deve renderizar os itens do carrinho', () => {
    renderWithStoreAndTheme(<CartMobile closeCartMobile={closeCartMobileMock} />);

    expect(screen.getByText(mockItem.name)).toBeInTheDocument();
  });

  it('deve atualizar a quantidade de um item no carrinho', () => {
    renderWithStoreAndTheme(<CartMobile closeCartMobile={closeCartMobileMock} />);

    const incrementButton = screen.getByTestId('increment-button');
    fireEvent.click(incrementButton);

    expect(screen.getByTestId('quantity-display')).toHaveTextContent('1');
  });

  it('deve remover um item do carrinho', () => {
    renderWithStoreAndTheme(<CartMobile closeCartMobile={closeCartMobileMock} />);

    const decrementButton = screen.getByTestId('decrement-button');
    fireEvent.click(decrementButton);

    expect(screen.queryByText(mockItem.name)).toBeNull();
  });

  it('deve fechar o carrinho quando o botão de fechar é clicado', () => {
    const mockCloseCartMobile = jest.fn();
    renderWithStoreAndTheme(<CartMobile closeCartMobile={mockCloseCartMobile} />);

    const closeButton = screen.getByTestId('close-cart-button');
    fireEvent.click(closeButton);

    expect(mockCloseCartMobile).toHaveBeenCalledTimes(1);
  });
});
