import { useState } from 'react';
import { SectionsMenuStyled } from './SectionsMenu.styled';

interface Props {
  title: string;
  imageUrl: string;
}

function SectionsMenu({ title, imageUrl }: Props) {
  const [isSelected, setIsSelected] = useState(false);

  const toggleSelect = () => setIsSelected(!isSelected);

  return (
    <SectionsMenuStyled.SectionsMenuContainer onClick={toggleSelect}>
      <SectionsMenuStyled.ImageCircle className={isSelected ? 'selected' : ''} style={{ backgroundImage: `url(${imageUrl})` }} />
      <SectionsMenuStyled.Text className={isSelected ? 'selected' : ''}>{title}</SectionsMenuStyled.Text>
      <SectionsMenuStyled.Line className={isSelected ? 'selected' : ''} />
    </SectionsMenuStyled.SectionsMenuContainer>
  );
}

export default SectionsMenu;
