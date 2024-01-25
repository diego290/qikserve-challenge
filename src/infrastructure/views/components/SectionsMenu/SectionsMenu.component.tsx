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
    <SectionsMenuStyled.SectionsMenuContainer onClick={handleClicked} data-testid="sections-menu-container">
      <SectionsMenuStyled.ImageCircle
        className={isSelected ? 'selected' : ''}
        style={{ backgroundImage: `url(${imageUrl})` }}
        data-testid="image-circle"
      />
      <SectionsMenuStyled.Text className={isSelected ? 'selected' : ''} data-testid="menu-title">
        {title}
      </SectionsMenuStyled.Text>
      <SectionsMenuStyled.Line className={isSelected ? 'selected' : ''} data-testid="line" />
    </SectionsMenuStyled.SectionsMenuContainer>
  );
}

export default SectionsMenu;
