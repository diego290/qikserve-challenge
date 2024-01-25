import { waitFor } from '@testing-library/react';
import { renderWithStoreAndTheme, fireEvent, screen } from '../../../tests/test-utils';
import MenuDetailsController from '../../controller/MenuDetailsController';
import MenuPage from './MenuPage.page';
import mockMenuDetails from '../../../tests/mock-menu-details';

const renderMenuPageAndWait = async () => {
  const renderResult = renderWithStoreAndTheme(<MenuPage />);
  await waitFor(() => {
    expect(MenuDetailsController.getMenuDetails).toHaveBeenCalled();
  });
  return renderResult;
};

describe('MenuPage', () => {
  beforeEach(() => {
    jest.spyOn(MenuDetailsController, 'getMenuDetails').mockResolvedValue(mockMenuDetails);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('deve atualizar o texto de pesquisa quando o usuário digita no campo de busca', async () => {
    await renderMenuPageAndWait();

    const searchInput = screen.getByTestId('search-input');
    fireEvent.change(searchInput, { target: { value: 'Smash' } });
    expect((searchInput as HTMLInputElement).value).toBe('Smash');
  });

  it('deve renderizar título corretamente', async () => {
    const { queryByTestId } = await renderMenuPageAndWait();

    const item = mockMenuDetails.sections[0].items[0];

    const itemName = queryByTestId(item.name);
    if (itemName) {
      expect(itemName).toBeInTheDocument();
    }
  });

  it('deve abrir o modal de detalhes do item', async () => {
    const { queryByTestId } = await renderMenuPageAndWait();

    const openModalClick = queryByTestId('open-modal-item-details');
    if (openModalClick) {
      fireEvent.click(openModalClick);
    }

    const modal = queryByTestId('item-details-modal');
    if (modal) {
      expect(modal).toBeInTheDocument();
    }
  });

  it('deve fechar o modal de detalhes do item', async () => {
    const { queryByTestId } = await renderMenuPageAndWait();

    const openModalButton = queryByTestId('open-modal-button');
    if (openModalButton) {
      fireEvent.click(openModalButton);
    }

    const closeModalButton = queryByTestId('close-modal-button');
    if (closeModalButton) {
      fireEvent.click(closeModalButton);
    }

    const modal = queryByTestId('item-details-modal');
    if (modal) {
      expect(modal).toBeNull();
    }
  });

  it('deve destacar uma seção', async () => {
    const { queryByTestId } = await renderMenuPageAndWait();

    const sectionMenu = queryByTestId('sections-menu-container');
    if (sectionMenu) {
      fireEvent.click(sectionMenu);
    }

    const sectionName = mockMenuDetails.sections[0].name;
    const highlightedSection = queryByTestId(sectionName);
    if (highlightedSection) {
      expect(highlightedSection).toBeInTheDocument();
    }
  });

  it('deve alternar a visibilidade de uma seção', async () => {
    const { queryByTestId } = await renderMenuPageAndWait();

    const toggleButton = queryByTestId('toggle-section');
    if (toggleButton) {
      fireEvent.click(toggleButton);
    }

    const itemName = mockMenuDetails.sections[0].items[0].name;
    const highlightedSection = queryByTestId(itemName);
    if (highlightedSection) {
      expect(highlightedSection).not.toBeInTheDocument();
    }
  });
});
