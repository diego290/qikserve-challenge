import { ItemMenuStyled } from './ItemMenu.styled';

interface Props {
  title: string;
  description: string;
  price: number;
  imageUrl: string
}

function ItemMenu({ title, description, price, imageUrl }: Props) {

  function formatPrice(priceNumber: number) {
    const formattedPrice = priceNumber.toFixed(2).replace('.', ',');
    return `R$ ${formattedPrice}`;
  }

  return (
    <ItemMenuStyled.ItemContainer>
      <ItemMenuStyled.TextContainer>
        <ItemMenuStyled.Title>{title}</ItemMenuStyled.Title>
        <ItemMenuStyled.Description>{description}</ItemMenuStyled.Description>
        <ItemMenuStyled.Price>{formatPrice(price)}</ItemMenuStyled.Price>
      </ItemMenuStyled.TextContainer>
      <ItemMenuStyled.ItemImage style={{ backgroundImage: `url(${imageUrl})` }} />
    </ItemMenuStyled.ItemContainer>
  );
}

export default ItemMenu;
