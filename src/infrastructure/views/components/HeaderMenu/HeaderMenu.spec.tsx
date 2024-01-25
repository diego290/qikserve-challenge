import { renderWithStoreAndTheme, screen, fireEvent } from '../../../../tests/test-utils';
import HeaderMenu from './HeaderMenu.component';

describe('<HeaderMenu />', () => {
  it('deve iniciar com o menu fechado', () => {
    renderWithStoreAndTheme(<HeaderMenu />);

    const menuButtons = screen.queryAllByRole('button');
    expect(menuButtons.length).toBeGreaterThan(0);
  });

  it('deve alternar a visibilidade do menu ao clicar no ícone', () => {
    renderWithStoreAndTheme(<HeaderMenu />);

    const menuIcon = screen.getByTestId('mobile-icon');
    fireEvent.click(menuIcon);

    const menu = screen.getByText('MENU');
    expect(menu).toBeInTheDocument();

    fireEvent.click(menuIcon);
    expect(menu).toBeVisible();
  });

  it('deve mostrar os botões do menu quando aberto', () => {
    renderWithStoreAndTheme(<HeaderMenu />);

    const menuIcon = screen.getByTestId('mobile-icon');
    fireEvent.click(menuIcon);

    expect(screen.getByText('MENU')).toBeInTheDocument();
    expect(screen.getByText('ENTRAR')).toBeInTheDocument();
    expect(screen.getByText('CONTATO')).toBeInTheDocument();
  });
});
