import { renderWithStoreAndTheme, screen } from '../../../../tests/test-utils';
import Template from './Template.component';

describe('<Template />', () => {
  it('deve renderizar o Header', () => {
    renderWithStoreAndTheme(
      <Template>
        <div>Conteúdo de teste</div>
      </Template>
    );
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  it('deve renderizar os elementos filhos passados', () => {
    const childText = 'Conteúdo de teste';
    renderWithStoreAndTheme(
      <Template>
        <div>{childText}</div>
      </Template>
    );
    expect(screen.getByText(childText)).toBeInTheDocument();
  });
});
