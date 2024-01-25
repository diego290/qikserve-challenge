import { ImageModel, ItemModel, ModifierItemModel, ModifierModel } from '../domain/models/MenuDetailsModel';

const mockModifierItem1 = new ModifierItemModel({
  id: 1,
  name: "Tamanho Pequeno",
  price: 33,
  maxChoices: 1,
  position: 1,
  visible: 1,
  availabilityType: "always",
  available: true,
});

const mockModifierItem2 = new ModifierItemModel({
  id: 2,
  name: "Tamanho Medio",
  price: 35,
  maxChoices: 1,
  position: 2,
  visible: 1,
  availabilityType: "always",
  available: true,
});

const mockModifier = new ModifierModel({
  id: 1,
  name: "Tamanho",
  minChoices: 1,
  maxChoices: 1,
  items: [mockModifierItem1, mockModifierItem2],
});

const mockImage = new ImageModel({
  id: 1,
  image: "url-da-imagem",
});

const mockItem = new ItemModel({
  id: 1,
  name: "Item de Teste",
  description: "Descrição do Item de Teste",
  alcoholic: 0,
  price: 1000,
  position: 1,
  visible: 1,
  availabilityType: "always",
  sku: "SKU123",
  images: [mockImage],
  available: true,
  modifiers: [mockModifier],
});

export default mockItem;
