import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primaryColour: string;
      primaryColourHover: string;
      backgroundColour: string;
      navBackgroundColour: string;
      white: string;
      offWhite1: string;
      offWhite2: string;
      offWhite3: string;
      offWhite4: string;
      black: string;
      offBlack0: string;
      offBlack1: string;
      offBlack2: string;
      offBlack3: string;
      offBlack4: string;
      offBlack5: string;
      offBlack6: string;
    };
    images: {
      bannerImage: string;
    }
  }
}
