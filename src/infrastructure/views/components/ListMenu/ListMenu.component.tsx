import ItemMenu from '../ItemMenu/ItemMenu.component';
import SectionsMenu from '../SectionsMenu/SectionsMenu.component';

import { ListMenuStyled } from './ListMenu.styled';


function ListMenu() {

  return (
    <ListMenuStyled.Container>
      <SectionsMenu title="Burguer" imageUrl='https://preodemo.gumlet.io/usr/venue/7602/section/646fbe4c64a6f.png' />
      <ItemMenu
        title="Hardcore"
        description="180g angus beef burger, plus ribs, gruyere cheese"
        price={18.90}
        imageUrl="https://preodemo.gumlet.io/usr/venue/7602/menuItem/646fbdc8cecca.png"
      />
    </ListMenuStyled.Container>
  );
}

export default ListMenu;
