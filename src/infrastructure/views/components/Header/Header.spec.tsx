import { renderWithStoreAndTheme, screen } from '../../../../tests/test-utils';
import Header from './Header.component';

describe('<Header />', () => {
  it('deve renderizar o HeaderMenu', () => {
    renderWithStoreAndTheme(<Header />);
    expect(screen.getByTestId('header-menu')).toBeInTheDocument();
  });

  it('deve renderizar o ImgContainer', () => {
    renderWithStoreAndTheme(<Header />);
    const imgContainer = screen.getByTestId('image-banner');
    expect(imgContainer).toBeInTheDocument();
  });
});
