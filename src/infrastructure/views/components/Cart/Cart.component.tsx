import { useSelector } from 'react-redux';
import { RootState, store } from '../../../redux/store';
import { removeItem, updateItemQuantity } from '../../../redux/itemCart/itemCartSlice';
import { formatPrice } from '../../../../utils/formatPrice';
import CartItem from '../CartItem/CartItem.component';
import QuantityControl from '../QuantityControl/QuantityControl.component';

import { CartStyled } from './Cart.styled';

function Cart() {
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

  const renderEmptyCart = () => {
    return (
      <CartStyled.EmptyCart>
        Seu carrinho está vazio
      </CartStyled.EmptyCart>
    );
  };

  const renderContentCart = () => {
    return (
      <>
        <CartStyled.ContainerCart>
          {cartItems.map((cartItem, index) => (
            <CartStyled.ContentCart
              data-testid="cart-item"
              key={`${cartItem.item.id}-${cartItem.selectedModifier?.id ? cartItem.selectedModifier?.id : index}`}
            >
              <CartItem
                name={cartItem.item.name}
                description={cartItem.selectedModifier ? cartItem.selectedModifier.name : ''}
                price={cartItem.selectedModifier ? cartItem.selectedModifier.price * cartItem.quantity : cartItem.item.price * cartItem.quantity}
              />
              <CartStyled.QuantityContainer>
                <QuantityControl
                  size="small"
                  currentQuantity={cartItem.quantity}
                  onQuantityChange={(newQuantity) => updateQuantityInCart(cartItem.uniqueKey, newQuantity)}
                  onRemoveItem={() => removeItemFromCart(cartItem.uniqueKey)}
                />
              </CartStyled.QuantityContainer>
            </CartStyled.ContentCart>
          ))}
        </CartStyled.ContainerCart>
        <CartStyled.FooterCart>
          <CartStyled.FooterSubTitleCart>
            Sub total:
          </CartStyled.FooterSubTitleCart>
          <CartStyled.FooterSubPriceCart>
            {formatPrice(subtotal)}
          </CartStyled.FooterSubPriceCart>
        </CartStyled.FooterCart>
        <CartStyled.FooterCart>
          <CartStyled.FooterTitleCart>
            Total:
          </CartStyled.FooterTitleCart>
          <CartStyled.FooterPriceCart>
            {formatPrice(subtotal)}
          </CartStyled.FooterPriceCart>
        </CartStyled.FooterCart>
      </>
    );
  };

  return (
    <CartStyled.CartContainer>
      <CartStyled.TitleCart>
        Carrinho
      </CartStyled.TitleCart>
      {cartItems.length > 0 ? renderContentCart() : renderEmptyCart()}
    </CartStyled.CartContainer>
  );
}

export default Cart;
