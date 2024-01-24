import { SectionsMenuStyled } from './SectionsMenu.styled';

interface Props {
  title: string;
  imageUrl: string;
  onClick: () => void;
  isSelected: boolean;
}

function SectionsMenu({ title, imageUrl, onClick, isSelected }: Props) {

  const handleClicked = () => {
    onClick();
  };

  return (
    <SectionsMenuStyled.SectionsMenuContainer onClick={handleClicked}>
      <SectionsMenuStyled.ImageCircle className={isSelected ? 'selected' : ''} style={{ backgroundImage: `url(${imageUrl})` }} />
      <SectionsMenuStyled.Text className={isSelected ? 'selected' : ''}>{title}</SectionsMenuStyled.Text>
      <SectionsMenuStyled.Line className={isSelected ? 'selected' : ''} />
    </SectionsMenuStyled.SectionsMenuContainer>
  );
}

export default SectionsMenu;
