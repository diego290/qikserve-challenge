interface WebSettings {
  id: number;
  venueId: number;
  bannerImage: string;
  backgroundColour: string;
  primaryColour: string;
  primaryColourHover: string;
  navBackgroundColour: string;
}

interface RestaurantInfo {
  id: number;
  name: string;
  internalName: string;
  description: string | null;
  liveFlag: number;
  demoFlag: number;
  address1: string;
  address2: string;
  address3: string | null;
  city: string;
  county: string;
  postcode: string;
  country: string;
  timezoneOffset: string;
  locale: string;
  timeZone: string;
  webSettings: WebSettings;
  ccy: string;
  ccySymbol: string;
  currency: string;
}

class WebSettingsModel implements WebSettings {
  id: number;
  venueId: number;
  bannerImage: string;
  backgroundColour: string;
  primaryColour: string;
  primaryColourHover: string;
  navBackgroundColour: string;

  constructor(data: WebSettings) {
    this.id = data.id;
    this.venueId = data.venueId;
    this.bannerImage = data.bannerImage;
    this.backgroundColour = data.backgroundColour;
    this.primaryColour = data.primaryColour;
    this.primaryColourHover = data.primaryColourHover;
    this.navBackgroundColour = data.navBackgroundColour;
  }
}

export class RestaurantDetailsModel implements RestaurantInfo {
  id: number;
  name: string;
  internalName: string;
  description: string | null;
  liveFlag: number;
  demoFlag: number;
  address1: string;
  address2: string;
  address3: string | null;
  city: string;
  county: string;
  postcode: string;
  country: string;
  timezoneOffset: string;
  locale: string;
  timeZone: string;
  webSettings: WebSettingsModel;
  ccy: string;
  ccySymbol: string;
  currency: string;

  constructor(data: RestaurantInfo) {
    this.id = data.id;
    this.name = data.name;
    this.internalName = data.internalName;
    this.description = data.description;
    this.liveFlag = data.liveFlag;
    this.demoFlag = data.demoFlag;
    this.address1 = data.address1;
    this.address2 = data.address2;
    this.address3 = data.address3;
    this.city = data.city;
    this.county = data.county;
    this.postcode = data.postcode;
    this.country = data.country;
    this.timezoneOffset = data.timezoneOffset;
    this.locale = data.locale;
    this.timeZone = data.timeZone;
    this.webSettings = new WebSettingsModel(data.webSettings);
    this.ccy = data.ccy;
    this.ccySymbol = data.ccySymbol;
    this.currency = data.currency;
  }
}
