import { formatPrice } from '../../../../utils/formatPrice';

import { CartItemStyled } from './CartItem.styled';

interface Props {
  name: string;
  description: string;
  price: number;
}

function CartItem({ name, description, price }: Props) {

  return (
    <CartItemStyled.ItemContainer>
      <div>
        <CartItemStyled.ItemNameContainer>
          {name}
        </CartItemStyled.ItemNameContainer>
        {description && (
          <CartItemStyled.ItemDescriptionContainer>
            {description}
          </CartItemStyled.ItemDescriptionContainer>
        )}
      </div>
      <div>
        <CartItemStyled.ItemPriceContainer>
          {formatPrice(price)}
        </CartItemStyled.ItemPriceContainer>
      </div>
    </CartItemStyled.ItemContainer>
  );
}

export default CartItem;
