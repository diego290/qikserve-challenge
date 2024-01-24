interface Image {
  id: number;
  image: string;
}

interface ModifierItem {
  id: number;
  name: string;
  price: number;
  maxChoices: number;
  position: number;
  visible: number;
  availabilityType: string;
  available: boolean;
  qty?: number;
}

interface Modifier {
  id: number;
  name: string;
  minChoices: number;
  maxChoices: number;
  items: ModifierItem[];
}

interface Item {
  id: number;
  name: string;
  description?: string;
  alcoholic: number;
  price: number;
  position: number;
  visible: number;
  availabilityType: string;
  sku: string;
  images: Image[];
  available: boolean;
  modifiers?: Modifier[];
}

interface Section {
  id: number;
  name: string;
  description?: string;
  position: number;
  visible: number;
  images: Image[];
  items: Item[];
}

interface MenuApiResponse {
  id: number;
  name: string;
  type: string;
  collapse: number;
  sections: Section[];
}

export class ImageModel implements Image {
  id: number;
  image: string;

  constructor(data: Image) {
    this.id = data.id;
    this.image = data.image;
  }
}

export class ModifierItemModel implements ModifierItem {
  id: number;
  name: string;
  price: number;
  maxChoices: number;
  position: number;
  visible: number;
  availabilityType: string;
  available: boolean;
  qty?: number;

  constructor(data: ModifierItem) {
    this.id = data.id;
    this.name = data.name;
    this.price = data.price;
    this.maxChoices = data.maxChoices;
    this.position = data.position;
    this.visible = data.visible;
    this.availabilityType = data.availabilityType;
    this.available = data.available;
    this.qty = data.qty;
  }
}

export class ModifierModel implements Modifier {
  id: number;
  name: string;
  minChoices: number;
  maxChoices: number;
  items: ModifierItemModel[];

  constructor(data: Modifier) {
    this.id = data.id;
    this.name = data.name;
    this.minChoices = data.minChoices;
    this.maxChoices = data.maxChoices;
    this.items = data.items.map(item => new ModifierItemModel(item));
  }
}

export class ItemModel implements Item {
  id: number;
  name: string;
  description?: string;
  alcoholic: number;
  price: number;
  position: number;
  visible: number;
  availabilityType: string;
  sku: string;
  images: ImageModel[];
  available: boolean;
  modifiers?: ModifierModel[];

  constructor(data: Item) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.alcoholic = data.alcoholic;
    this.price = data.price;
    this.position = data.position;
    this.visible = data.visible;
    this.availabilityType = data.availabilityType;
    this.sku = data.sku;
    this.images = data.images.map(img => new ImageModel(img));
    this.available = data.available;
    this.modifiers = data.modifiers?.map(mod => new ModifierModel(mod));
  }
}

export class SectionModel implements Section {
  id: number;
  name: string;
  description?: string;
  position: number;
  visible: number;
  images: ImageModel[];
  items: ItemModel[];

  constructor(data: Section) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.position = data.position;
    this.visible = data.visible;
    this.images = data.images.map(img => new ImageModel(img));
    this.items = data.items.map(item => new ItemModel(item));
  }
}

export class MenuDetailsModel implements MenuApiResponse {
  id: number;
  name: string;
  type: string;
  collapse: number;
  sections: SectionModel[];

  constructor(data: MenuApiResponse) {
    this.id = data.id;
    this.name = data.name;
    this.type = data.type;
    this.collapse = data.collapse;
    this.sections = data.sections.map(section => new SectionModel(section));
  }
}
