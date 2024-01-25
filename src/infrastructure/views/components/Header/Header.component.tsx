import HeaderMenu from '../HeaderMenu/HeaderMenu.component';
import { HeaderStyled } from './Header.styled';


function Header() {

  return (
    <div data-testid="header">
      <HeaderMenu />
      <HeaderStyled.ImgContainer data-testid="image-banner" />
    </div>
  );
}

export default Header;

