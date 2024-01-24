import { formatPrice } from '../../../../utils/formatPrice';
import { ItemMenuStyled } from './ItemMenu.styled';

interface Props {
  title: string;
  description: string;
  price: number;
  imageUrl: string
  quantity: number;
  openDetails: () => void;
}

function ItemMenu({ title, description, price, imageUrl, quantity, openDetails }: Props) {

  return (
    <ItemMenuStyled.ItemContainer onClick={openDetails}>
      <ItemMenuStyled.TextContainer>
        <ItemMenuStyled.QuantityTitleContainer>
          {quantity > 0 && <ItemMenuStyled.Quantity>{quantity}</ItemMenuStyled.Quantity>}
          <ItemMenuStyled.Title>{title}</ItemMenuStyled.Title>
        </ItemMenuStyled.QuantityTitleContainer>
        <ItemMenuStyled.Description>{description}</ItemMenuStyled.Description>
        <ItemMenuStyled.Price>{formatPrice(price)}</ItemMenuStyled.Price>
      </ItemMenuStyled.TextContainer>
      <ItemMenuStyled.ItemImage style={{ backgroundImage: `url(${imageUrl})` }} />
    </ItemMenuStyled.ItemContainer>
  );
}

export default ItemMenu;
