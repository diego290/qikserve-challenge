import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primaryColour: string;
      primaryColourHover: string;
      backgroundColour: string;
      navBackgroundColour: string;
    };
    images: {
      bannerImage: string;
    }
  }
}
