import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import MenuDetailsController from '../../controller/MenuDetailsController';
import { ItemModel, MenuDetailsModel, SectionModel } from '../../../domain/models/MenuDetailsModel';
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import Template from '../components/Template/Template.component';
import SearchInput from '../components/SearchInput/SearchInput.component';
import SectionsMenu from '../components/SectionsMenu/SectionsMenu.component';
import ItemMenu from '../components/ItemMenu/ItemMenu.component';
import Cart from '../components/Cart/Cart.component';
import ItemModal from '../components/ItemModal/ItemModal.component';
import Button from '../components/Button/Button.component';
import CartMobile from '../components/CartMobile/CartMobile.component';

import { MenuPageStyled } from './MenuPage.styled';

function MenuPage() {
  const [data, setData] = useState<MenuDetailsModel>();
  const [sectionVisibility, setSectionVisibility] = useState<Record<number, boolean>>({});
  const [activeSectionId, setActiveSectionId] = useState<number | null>(null);
  const [selectedSectionTitle, setSelectedSectionTitle] = useState<string | null>(null);
  const [isItemDetailsModalOpen, setIsItemDetailsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ItemModel>();
  const [searchText, setSearchText] = useState('');
  const [isCartMobileOpen, setIsCartMobileOpen] = useState(false);

  const cartItems = useSelector(
    (state: RootState) => state.item.itemsWithQuantityAndModifier
  );

  async function getMenuDetails() {
    try {
      const menuDetails = await MenuDetailsController.getMenuDetails();
      setData(menuDetails);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMenuDetails();
  }, []);

  useEffect(() => {
    if (data) {
      const visibility: Record<number, boolean> = {};
      data.sections.forEach(section => {
        visibility[section.id] = true;
      });
      setSectionVisibility(visibility);
    }
  }, [data]);

  const openModalDetails = (item: ItemModel) => {
    setSelectedItem(item);
    setIsItemDetailsModalOpen(true);
  };

  const closeModalDetails = () => setIsItemDetailsModalOpen(false);

  const openCartMobile = () => {
    setIsCartMobileOpen(true);
  };

  const closeCartMobile = () => {
    setIsCartMobileOpen(false);
  };

  const toggleSection = (sectionId: number) => {
    setSectionVisibility(prev => ({ ...prev, [sectionId]: !prev[sectionId] }));
  };

  const highlightSection = (sectionTitle: string) => {
    if (selectedSectionTitle === sectionTitle) {
      setSelectedSectionTitle(null);
      setActiveSectionId(null);
    } else {
      setSelectedSectionTitle(sectionTitle);
      const section = data?.sections.find(section => section.name === sectionTitle);
      if (section) setActiveSectionId(section.id);
    }
  };

  const handleSearchChange = (text: string) => {
    setSearchText(text);
  };

  const renderSectionMenu = () => {
    return (
      data?.sections.map(section => (
        <SectionsMenu
          key={section.id}
          title={section.name}
          imageUrl={section.images && section.images.length > 0 ? section.images[0].image : ''}
          onClick={() => highlightSection(section.name)}
          isSelected={selectedSectionTitle === section.name}
        />
      ))
    );
  };

  const renderItemMenu = () => {
    if (!data) return null;

    return data.sections.map((section: SectionModel) => {
      if (activeSectionId !== null && activeSectionId !== section.id) return null;

      const filteredItems = getFilteredItems(section);
      if (!filteredItems.length) return null;

      return renderSection(section, filteredItems);
    }).filter(Boolean);
  };

  const getFilteredItems = (section: SectionModel) => {
    return searchText
      ? section.items.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()))
      : section.items;
  };

  const renderSection = (section: SectionModel, filteredItems: ItemModel[]) => {
    return (
      <div key={section.id}>
        {renderSectionTitle(section)}
        {sectionVisibility[section.id] && filteredItems.map(item => renderItem(item))}
      </div>
    );
  };

  const renderSectionTitle = (section: SectionModel) => {
    return (
      <MenuPageStyled.ItemMenuTitleContainer onClick={() => toggleSection(section.id)}>
        <MenuPageStyled.ItemMenuNameContainer>
          {section.name}
        </MenuPageStyled.ItemMenuNameContainer>
        <MenuPageStyled.ItemMenuIconContainer>
          {sectionVisibility[section.id] ? <GoChevronUp /> : <GoChevronDown />}
        </MenuPageStyled.ItemMenuIconContainer>
      </MenuPageStyled.ItemMenuTitleContainer>
    );
  };

  const renderItem = (item: ItemModel) => {
    const cartItem = cartItems.find(ci => ci.item.id === item.id);
    const itemQuantity = cartItem ? cartItem.quantity : 0;
    return (
      <ItemMenu
        key={item.id}
        title={item.name}
        description={item.description ?? ''}
        price={item.price}
        imageUrl={item.images && item.images.length > 0 ? item.images[0].image : ''}
        quantity={itemQuantity}
        openDetails={() => openModalDetails(item)}
      />
    );
  };

  const renderCartMobile = () => {
    return (
      isCartMobileOpen && <CartMobile closeCartMobile={closeCartMobile} />
    );
  };

  const renderItemDetailsModal = () => {
    return (
      isItemDetailsModalOpen && selectedItem && (
        <ItemModal
          item={selectedItem}
          closeModal={closeModalDetails}
        />
      )
    );
  };

  return (
    <Template>
      <MenuPageStyled.Container>
        <MenuPageStyled.SearchContainer>
          <SearchInput placeholder='Search menu items' onChange={handleSearchChange} />
        </MenuPageStyled.SearchContainer>
        <MenuPageStyled.MenuPageContainer>
          <MenuPageStyled.MenuContainer>
            <MenuPageStyled.SectionMenuContainer>
              {renderSectionMenu()}
            </MenuPageStyled.SectionMenuContainer>
            {renderItemMenu()}
          </MenuPageStyled.MenuContainer>
          <Cart />
          <MenuPageStyled.MobileAllergyContainer>
            <p>View allergy information</p>
          </MenuPageStyled.MobileAllergyContainer>
          <MenuPageStyled.MobileCartButtonContainer>
            <Button name="Your basket" info={`${cartItems.length} ${cartItems.length > 1 ? 'items' : 'item'}`} onClick={openCartMobile} />
          </MenuPageStyled.MobileCartButtonContainer>
        </MenuPageStyled.MenuPageContainer>
        {renderCartMobile()}
        {renderItemDetailsModal()}
      </MenuPageStyled.Container>
    </Template>
  );
}

export default MenuPage;
