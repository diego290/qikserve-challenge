import { renderWithStoreAndTheme, screen, fireEvent } from '../../../../tests/test-utils';
import { store } from '../../../redux/store';
import ItemModal from './ItemModal.component';
import mockItem from '../../../../tests/mock-item';

describe('<ItemModal />', () => {
  const closeModalMock = jest.fn();

  it('deve renderizar informações do item', () => {
    renderWithStoreAndTheme(<ItemModal item={mockItem} closeModal={closeModalMock} />);
    expect(screen.getByText(mockItem.name)).toBeInTheDocument();
  });

  it('deve chamar closeModal quando o botão de fechar é clicado', () => {
    renderWithStoreAndTheme(<ItemModal item={mockItem} closeModal={closeModalMock} />);
    fireEvent.click(screen.getByTestId('close-modal-button'));
    expect(closeModalMock).toHaveBeenCalledTimes(1);
  });

  it('deve chamar handleAddToOrder quando o botão de adicionar ao pedido é clicado', () => {
    renderWithStoreAndTheme(<ItemModal item={mockItem} closeModal={closeModalMock} />);

    fireEvent.click(screen.getByTestId('add-to-order-button'));

    const state = store.getState();
    const cartItems = state.item.itemsWithQuantityAndModifier;
    const itemMock = cartItems.find(item => item.item.id === mockItem.id);

    expect(itemMock).toBeTruthy();
  });

  it('deve atualizar selectedModifier quando um OptionItem é clicado', () => {
    renderWithStoreAndTheme(<ItemModal item={mockItem} closeModal={closeModalMock} />);
    const value1 = mockItem.modifiers?.[0]?.items?.[0]?.price;
    const value2 = mockItem.modifiers?.[0]?.items?.[1]?.price;

    const firstOptionItemRadio: HTMLInputElement = screen.getByTestId(`radio-option-${value1}`);
    const secondOptionItemRadio: HTMLInputElement = screen.getByTestId(`radio-option-${value2}`);

    expect(firstOptionItemRadio.checked).toBe(true);

    fireEvent.click(secondOptionItemRadio);

    expect(secondOptionItemRadio.checked).toBe(true);
    expect(firstOptionItemRadio.checked).toBe(false);
  });
});
