import { useState } from 'react';
import { BsFillXCircleFill } from "react-icons/bs";
import { store } from '../../../redux/store';
import { formatPrice } from '../../../../utils/formatPrice';
import { ItemModel } from '../../../../domain/models/MenuDetailsModel';
import { addItemWithQuantityAndModifier } from '../../../redux/itemCart/itemCartSlice';
import OptionItem from '../OptionItem/OptionItem.component';
import QuantityControl from '../QuantityControl/QuantityControl.component';

import { ItemModalStyled } from './ItemModal.styled';
import Button from '../Button/Button.component';

interface Props {
  item: ItemModel;
  closeModal: () => void;
}

function ItemModal({ item, closeModal }: Props) {
  const [selectedModifier, setSelectedModifier] = useState(item.modifiers?.[0]?.items?.[0]);
  const [quantity, setQuantity] = useState(1);

  const handleAddToOrder = () => {
    const uniqueKey = `${item.id}-${selectedModifier?.id ?? 'no-modifier'}`;
    const itemWithQuantityAndModifier = {
      item,
      quantity,
      selectedModifier,
      uniqueKey
    };
    store.dispatch(addItemWithQuantityAndModifier(itemWithQuantityAndModifier));
    closeModal();
  };

  const totalPrice = (item.price + (selectedModifier?.price ?? 0)) * quantity;

  const imageUrl = item.images?.[0]?.image ?? '';

  const renderOptionItem = () => {
    return (
      item.modifiers?.map(modifier => (
        <div key={modifier.id}>
          <ItemModalStyled.HeaderOptionContainer>
            <ItemModalStyled.TitleOptionContainer>
              Choose your size
            </ItemModalStyled.TitleOptionContainer>
            <ItemModalStyled.DescriptionOptionContainer>
              Select 1 option
            </ItemModalStyled.DescriptionOptionContainer>
          </ItemModalStyled.HeaderOptionContainer>
          {modifier.items.map(modifierItem => (
            <OptionItem
              key={modifierItem.id}
              name={modifierItem.name}
              price={modifierItem.price}
              isSelected={selectedModifier?.id === modifierItem.id}
              onOptionChange={() => setSelectedModifier(modifierItem)}
              value={modifierItem.price}
            />
          ))}
        </div>
      ))
    );
  };

  return (
    <ItemModalStyled.ModalContainer onClick={closeModal}>
      <ItemModalStyled.ModalContent onClick={(e) => e.stopPropagation()}>
        <ItemModalStyled.CloseButton onClick={closeModal}>
          <BsFillXCircleFill />
        </ItemModalStyled.CloseButton>
        <ItemModalStyled.ItemImage style={{ backgroundImage: `url(${imageUrl})` }} />
        <ItemModalStyled.ItemContainer>
          <ItemModalStyled.Title>{item.name}</ItemModalStyled.Title>
          <ItemModalStyled.Description>{item.description}</ItemModalStyled.Description>
          {renderOptionItem()}
        </ItemModalStyled.ItemContainer>
        <ItemModalStyled.AddToOrderContainer>
          <QuantityControl size="large" onQuantityChange={setQuantity} />
          <Button name="Add to Order" info={formatPrice(totalPrice)} onClick={handleAddToOrder} />
        </ItemModalStyled.AddToOrderContainer>
      </ItemModalStyled.ModalContent>
    </ItemModalStyled.ModalContainer>
  );
}

export default ItemModal;
