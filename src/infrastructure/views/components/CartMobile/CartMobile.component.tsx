import { useSelector } from 'react-redux';
import { RootState, store } from '../../../redux/store';
import { removeItem, updateItemQuantity } from '../../../redux/itemCart/itemCartSlice';
import { IoCloseOutline } from "react-icons/io5";
import { formatPrice } from '../../../../utils/formatPrice';
import CartItem from '../CartItem/CartItem.component';
import QuantityControl from '../QuantityControl/QuantityControl.component';
import Button from '../Button/Button.component';

import { CartMobileStyled } from './CartMobile.styled';

interface Props {
  closeCartMobile: () => void;
}

function CartMobile({ closeCartMobile }: Props) {
  const cartItems = useSelector(
    (state: RootState) => state.item.itemsWithQuantityAndModifier
  );

  const subtotal = cartItems.reduce((total, cartItem) => {
    const itemPrice = cartItem.selectedModifier ? cartItem.selectedModifier.price : cartItem.item.price;
    return total + itemPrice * cartItem.quantity;
  }, 0);

  const updateQuantityInCart = (uniqueKey: string, newQuantity: number) => {
    store.dispatch(updateItemQuantity({ uniqueKey, newQuantity }));
  };

  const removeItemFromCart = (uniqueKey: string) => {
    store.dispatch(removeItem(uniqueKey));
  };

  const renderContentCart = () => {
    return (
      <>
        <CartMobileStyled.ContainerCartItem>
          {cartItems.map((cartItem, index) => (
            <CartMobileStyled.ContentCart key={`${cartItem.item.id}-${cartItem.selectedModifier?.id ? cartItem.selectedModifier?.id : index}`}>
              <CartItem
                name={cartItem.item.name}
                description={cartItem.selectedModifier ? cartItem.selectedModifier.name : ''}
                price={cartItem.selectedModifier ? cartItem.selectedModifier.price * cartItem.quantity : cartItem.item.price * cartItem.quantity}
              />
              <CartMobileStyled.QuantityContainer>
                <QuantityControl
                  size="small"
                  currentQuantity={cartItem.quantity}
                  onQuantityChange={(newQuantity) => updateQuantityInCart(cartItem.uniqueKey, newQuantity)}
                  onRemoveItem={() => removeItemFromCart(cartItem.uniqueKey)}
                />
              </CartMobileStyled.QuantityContainer>
            </CartMobileStyled.ContentCart>
          ))}
        </CartMobileStyled.ContainerCartItem>
        <CartMobileStyled.FooterCartContainer>
          <CartMobileStyled.FooterSubTitleCart>
            Sub total:
          </CartMobileStyled.FooterSubTitleCart>
          <CartMobileStyled.FooterSubPriceCart>
            {formatPrice(subtotal)}
          </CartMobileStyled.FooterSubPriceCart>
        </CartMobileStyled.FooterCartContainer>
        <CartMobileStyled.FooterCartContainer>
          <CartMobileStyled.FooterTitleCart>
            Total:
          </CartMobileStyled.FooterTitleCart>
          <CartMobileStyled.FooterPriceCart>
            {formatPrice(subtotal)}
          </CartMobileStyled.FooterPriceCart>
        </CartMobileStyled.FooterCartContainer>
      </>
    );
  };

  return (
    <CartMobileStyled.CartContainer>
      <CartMobileStyled.CartContent>
        <CartMobileStyled.CloseButton onClick={closeCartMobile}>
          <IoCloseOutline />
        </CartMobileStyled.CloseButton>
        <CartMobileStyled.HeaderCartContainer>
          <CartMobileStyled.TitleCart>
            Basket
          </CartMobileStyled.TitleCart>
        </CartMobileStyled.HeaderCartContainer>
        {renderContentCart()}
        <CartMobileStyled.CheckoutButtonContainer>
          <Button name="Checkout now" onClick={closeCartMobile} />
        </CartMobileStyled.CheckoutButtonContainer>
      </CartMobileStyled.CartContent>
    </CartMobileStyled.CartContainer>
  );
}

export default CartMobile;
