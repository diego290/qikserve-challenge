import { MenuStyled } from './HeaderMenu.styled'


function HeaderMenu() {

  return (
    <MenuStyled.Container>
      <MenuStyled.MenuButton>MENU</MenuStyled.MenuButton>
      <MenuStyled.MenuButton>ENTRAR</MenuStyled.MenuButton>
      <MenuStyled.MenuButton>CONTATO</MenuStyled.MenuButton>
    </MenuStyled.Container>
  )
}

export default HeaderMenu
