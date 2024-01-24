import { ThemeProvider } from '@emotion/react';
import { Provider } from 'react-redux';
import useTheme from './infrastructure/hooks/useTheme';
import MenuPage from './infrastructure/views/pages/MenuPage.page';
import { store } from './infrastructure/redux/store';

import './App.scss';

function App() {
  const theme = useTheme();

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MenuPage />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
