import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ItemModel, ModifierItemModel } from '../../../domain/models/MenuDetailsModel';

interface ItemWithQuantityAndModifier {
  item: ItemModel;
  quantity: number;
  selectedModifier?: ModifierItemModel;
  uniqueKey: string;
}

interface UpdateQuantityPayload {
  uniqueKey: string;
  newQuantity: number;
}

interface ItemState {
  itemsWithQuantityAndModifier: ItemWithQuantityAndModifier[];
}

const initialState: ItemState = {
  itemsWithQuantityAndModifier: [],
};

export const itemCartSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    addItemWithQuantityAndModifier: (state, action: PayloadAction<ItemWithQuantityAndModifier>) => {
      const { item, quantity, selectedModifier } = action.payload;
      const uniqueKey = `${item.id}-${selectedModifier?.id ?? 'no-modifier'}`;
      const existingCartItemIndex = state.itemsWithQuantityAndModifier.findIndex(cartItem =>
        cartItem.uniqueKey === uniqueKey &&
        (cartItem.selectedModifier?.id === selectedModifier?.id || (!cartItem.selectedModifier && !selectedModifier))
      );
      console.log('existingCartItemIndex', existingCartItemIndex);
      if (existingCartItemIndex !== -1) {
        state.itemsWithQuantityAndModifier[existingCartItemIndex].quantity += quantity;
      } else {
        state.itemsWithQuantityAndModifier.push({ ...action.payload, uniqueKey });
      }
    },
    updateItemQuantity: (state, action: PayloadAction<UpdateQuantityPayload>) => {
      const { uniqueKey, newQuantity } = action.payload;
      const itemIndex = state.itemsWithQuantityAndModifier.findIndex(item => item.uniqueKey === uniqueKey);
      if (itemIndex !== -1) {
        state.itemsWithQuantityAndModifier[itemIndex].quantity = newQuantity;
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.itemsWithQuantityAndModifier = state.itemsWithQuantityAndModifier.filter(item => item.uniqueKey !== action.payload);
    },
  },
});

export const { addItemWithQuantityAndModifier, updateItemQuantity, removeItem } = itemCartSlice.actions;

export default itemCartSlice.reducer;
