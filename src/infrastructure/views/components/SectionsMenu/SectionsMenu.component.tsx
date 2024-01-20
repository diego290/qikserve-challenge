import { useState } from 'react';
import { SectionsMenuStyled } from './SectionsMenu.styled'

interface Props {
  title: string;
  imagePath: string;
}

function SectionsMenu({ title, imagePath }: Props) {
  const [isSelected, setIsSelected] = useState(false);

  const toggleSelect = () => setIsSelected(!isSelected);

  return (
    <SectionsMenuStyled.SectionsMenuContainer onClick={toggleSelect}>
      <SectionsMenuStyled.ImageCircle className={isSelected ? 'selected' : ''} style={{ backgroundImage: `url(${imagePath})` }} />
      <SectionsMenuStyled.Text className={isSelected ? 'selected' : ''}>{title}</SectionsMenuStyled.Text>
      <SectionsMenuStyled.Line className={isSelected ? 'selected' : ''} />
    </SectionsMenuStyled.SectionsMenuContainer>
  );
}

export default SectionsMenu;
