import React from 'react';
import { render as rtlRender, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import { Provider } from 'react-redux';
import theme from '../infrastructure/views/theme/theme';
import { store } from '../infrastructure/redux/store';

export const renderWithStoreAndTheme = (ui: React.ReactElement, options?: Omit<RenderOptions, 'queries'>) => {
  function Wrapper({ children }: { children?: React.ReactNode }) {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </Provider>
    );
  }

  return rtlRender(ui, { wrapper: Wrapper, ...options });
};

export * from '@testing-library/react';
