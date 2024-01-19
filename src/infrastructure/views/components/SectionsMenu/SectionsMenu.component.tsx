import { useState } from 'react';
import { SectionsMenuStyled } from './SectionsMenu.styled'

function SectionsMenu() {
  const [isSelected, setIsSelected] = useState(false);

  const toggleSelect = () => setIsSelected(!isSelected);

  return (
    <SectionsMenuStyled.SectionsMenuContainer onClick={toggleSelect}>
      <SectionsMenuStyled.ImageCircle className={isSelected ? 'selected' : ''} />
      <SectionsMenuStyled.Text className={isSelected ? 'selected' : ''}>Burgers</SectionsMenuStyled.Text>
      <SectionsMenuStyled.Line className={isSelected ? 'selected' : ''} />
    </SectionsMenuStyled.SectionsMenuContainer>
  );
}

export default SectionsMenu;
