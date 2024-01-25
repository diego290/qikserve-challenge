import { ImageModel, ItemModel, MenuDetailsModel, ModifierItemModel, ModifierModel, SectionModel } from '../domain/models/MenuDetailsModel';

const mockImage = new ImageModel({
  id: 1,
  image: 'mock-image-url',
});

const mockModifierItem = new ModifierItemModel({
  id: 1,
  name: 'Mock Modifier Item',
  price: 10,
  maxChoices: 1,
  position: 1,
  visible: 1,
  availabilityType: 'always',
  available: true,
});

const mockModifier = new ModifierModel({
  id: 1,
  name: 'Mock Modifier',
  minChoices: 1,
  maxChoices: 2,
  items: [mockModifierItem],
});

const mockItem = new ItemModel({
  id: 1,
  name: 'Mock Item',
  description: 'Mock Description',
  alcoholic: 0,
  price: 20,
  position: 1,
  visible: 1,
  availabilityType: 'always',
  sku: 'mock-sku',
  images: [mockImage],
  available: true,
  modifiers: [mockModifier],
});

const mockSection = new SectionModel({
  id: 1,
  name: 'Mock Section',
  description: 'Mock Section Description',
  position: 1,
  visible: 1,
  images: [mockImage],
  items: [mockItem],
});

const mockMenuDetails = new MenuDetailsModel({
  id: 1,
  name: 'Mock Menu',
  type: 'Mock Type',
  collapse: 0,
  sections: [mockSection],
});

export default mockMenuDetails;
