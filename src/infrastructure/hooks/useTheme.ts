import { useState, useEffect } from 'react';
import RestaurantDetailsController from '../controller/RestaurantDetailsController';
import theme from '../views/theme/theme';

const useTheme = () => {
  const [themeApi, setThemeApi] = useState(theme);

  const fetchThemeData = async () => {
    try {
      const restaurantDetails = await RestaurantDetailsController.getRestaurantDetails();
      const { webSettings } = restaurantDetails;

      setThemeApi(prevTheme => ({
        ...prevTheme,
        colors: {
          ...prevTheme.colors,
          primaryColour: webSettings.primaryColour,
          primaryColourHover: webSettings.primaryColourHover,
          backgroundColour: webSettings.backgroundColour,
          navBackgroundColour: webSettings.navBackgroundColour
        },
        images: {
          ...prevTheme.images,
          bannerImage: webSettings.bannerImage
        }
      }));
    } catch (error) {
      console.error('Error when fetching restaurant details:', error);
    }
  };

  useEffect(() => {
    fetchThemeData();
  }, []);

  return themeApi;
};

export default useTheme;
