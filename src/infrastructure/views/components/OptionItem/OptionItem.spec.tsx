import { renderWithStoreAndTheme, screen, fireEvent } from '../../../../tests/test-utils';
import OptionItem from './OptionItem.component';

describe('<OptionItem />', () => {
  it('deve renderizar o nome e o preço corretamente', () => {
    const mockItem = {
      name: 'Opção Teste',
      price: 500,
      isSelected: false,
      value: 1
    };

    renderWithStoreAndTheme(
      <OptionItem
        name={mockItem.name}
        price={mockItem.price}
        isSelected={mockItem.isSelected}
        onOptionChange={() => { }}
        value={mockItem.value}
      />
    );

    expect(screen.getByText(mockItem.name)).toBeInTheDocument();
    expect(screen.getByText('R$ 500,00')).toBeInTheDocument();
  });

  it('deve mostrar o input radio como selecionado quando isSelected é true', () => {
    renderWithStoreAndTheme(
      <OptionItem
        name="Opção Teste"
        price={500}
        isSelected={true}
        onOptionChange={() => { }}
        value={1}
      />
    );

    const radioInput: HTMLInputElement = screen.getByTestId('radio-option-1');
    expect(radioInput.checked).toBe(true);
  });

  it('deve chamar onOptionChange quando o input radio é alterado', () => {
    const onOptionChangeMock = jest.fn();
    renderWithStoreAndTheme(
      <OptionItem
        name="Opção Teste"
        price={500}
        isSelected={false}
        onOptionChange={onOptionChangeMock}
        value={1}
      />
    );

    const radioInput = screen.getByTestId('radio-option-1');
    fireEvent.click(radioInput);
    expect(onOptionChangeMock).toHaveBeenCalledWith(1);
  });
});
