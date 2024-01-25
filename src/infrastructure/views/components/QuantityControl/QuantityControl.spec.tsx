import { fireEvent, renderWithStoreAndTheme, screen } from '../../../../tests/test-utils';
import QuantityControl from './QuantityControl.component';

describe('<QuantityControl />', () => {
  const onQuantityChangeMock = jest.fn();
  const onRemoveItemMock = jest.fn();

  it('deve renderizar com a quantidade inicial correta', () => {
    renderWithStoreAndTheme(
      <QuantityControl size="large" currentQuantity={3} onQuantityChange={onQuantityChangeMock} onRemoveItem={onRemoveItemMock} />
    );
    expect(screen.getByTestId('quantity-display')).toHaveTextContent('3');
  });

  it('deve incrementar a quantidade quando o botão de incremento é clicado', () => {
    renderWithStoreAndTheme(
      <QuantityControl size="large" currentQuantity={1} onQuantityChange={onQuantityChangeMock} onRemoveItem={onRemoveItemMock} />
    );
    fireEvent.click(screen.getByTestId('increment-button'));
    expect(onQuantityChangeMock).toHaveBeenCalledWith(2);
  });

  it('deve chamar onRemoveItem quando a quantidade é decrementada para 0', () => {
    renderWithStoreAndTheme(
      <QuantityControl size="large" currentQuantity={1} onQuantityChange={onQuantityChangeMock} onRemoveItem={onRemoveItemMock} />
    );
    fireEvent.click(screen.getByTestId('decrement-button'));
    expect(onRemoveItemMock).toHaveBeenCalled();
  });
});
