import { useEffect, useState } from 'react';
import { MdAddCircle, MdDoDisturbOn } from "react-icons/md";

import { QuantityControlStyled } from './QuantityControl.styled';

interface Props {
  size: 'small' | 'large';
  currentQuantity?: number;
  onQuantityChange: (quantity: number) => void;
  onRemoveItem?: () => void;
}

function QuantityControl({ size, currentQuantity, onQuantityChange, onRemoveItem }: Props) {
  const [quantity, setQuantity] = useState(currentQuantity ?? 1);

  useEffect(() => {
    if (currentQuantity !== quantity) {
      setQuantity(currentQuantity ?? 1);
    }
  }, [currentQuantity]);

  useEffect(() => {
    if (quantity !== currentQuantity) {
      onQuantityChange(quantity);
    }
  }, [quantity]);

  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrement = () => {
    setQuantity((prevQuantity) => {
      if (prevQuantity <= 1) {
        onRemoveItem?.();
        return prevQuantity;
      }
      return prevQuantity - 1;
    });
  };

  return (
    <QuantityControlStyled.Container size={size} data-testid="quantity-control">
      <QuantityControlStyled.DecrementButton size={size} onClick={decrement} data-testid="decrement-button">
        <MdDoDisturbOn />
      </QuantityControlStyled.DecrementButton>
      <QuantityControlStyled.QuantityDisplay size={size} data-testid="quantity-display">
        {quantity}
      </QuantityControlStyled.QuantityDisplay>
      <QuantityControlStyled.IncrementButton size={size} onClick={increment} data-testid="increment-button">
        <MdAddCircle />
      </QuantityControlStyled.IncrementButton>
    </QuantityControlStyled.Container>
  );
}

export default QuantityControl;
