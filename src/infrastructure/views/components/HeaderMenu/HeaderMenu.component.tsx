import { useState } from 'react';
import { IoMenu, IoCloseOutline } from "react-icons/io5";

import { MenuStyled } from './HeaderMenu.styled';


function HeaderMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <MenuStyled.Container data-testid="header-menu">
      <MenuStyled.Title>Menu</MenuStyled.Title>
      <MenuStyled.MobileIcon onClick={() => setIsMenuOpen(!isMenuOpen)} data-testid="mobile-icon">
        {isMenuOpen ? <IoCloseOutline /> : <IoMenu />}
      </MenuStyled.MobileIcon>
      <MenuStyled.Menu display={isMenuOpen ? 'flex' : 'none'}>
        <MenuStyled.MenuButton>MENU</MenuStyled.MenuButton>
        <MenuStyled.MenuButton>ENTRAR</MenuStyled.MenuButton>
        <MenuStyled.MenuButton>CONTATO</MenuStyled.MenuButton>
      </MenuStyled.Menu>
    </MenuStyled.Container>
  );
}

export default HeaderMenu;
