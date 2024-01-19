// hooks/useThemeApi.js
import { useState, useEffect } from 'react';
import theme from '../views/theme/theme';

const useTheme = () => {
  const [themeApi, setThemeApi] = useState(theme);

  useEffect(() => {
    // Simule a chamada da API
    const fetchCoresApi = async () => {
      // Substitua com a chamada real da API
      const coresApi = await fakeApiCall();
      setThemeApi({
        ...theme,
        colors: {
          ...theme.colors,
          ...coresApi
        }
      });
    };

    fetchCoresApi();
  }, []);

  return themeApi;
};

const fakeApiCall = async () => {
  // Simulação de uma chamada de API
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ primaryColourHover: '#003300' });
    }, 500);
  });
};

export default useTheme;
