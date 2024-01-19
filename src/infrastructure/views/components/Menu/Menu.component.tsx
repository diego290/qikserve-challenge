import { MenuStyled } from './Menu.styled'


function Menu() {

  return (
    <MenuStyled.Container>
      <MenuStyled.MenuButton>MENU</MenuStyled.MenuButton>
      <MenuStyled.MenuButton>ENTRAR</MenuStyled.MenuButton>
      <MenuStyled.MenuButton>CONTATO</MenuStyled.MenuButton>
    </MenuStyled.Container>
  )
}

export default Menu
