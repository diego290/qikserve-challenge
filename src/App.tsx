import { ThemeProvider } from '@emotion/react';
import Header from './infrastructure/views/components/Header/Header.component';
import useTheme from './infrastructure/hooks/useTheme';

import './App.scss'

function App() {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <div style={{ width: "100vw", maxWidth: "1440px" }}>
        <Header />
      </div>
    </ThemeProvider>
  )
}

export default App
