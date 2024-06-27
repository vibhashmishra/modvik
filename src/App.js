import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import PowerConnection from './pages/PowerConnection';
import ModvakNumver from './pages/ModvakNumver';
import Products from './pages/Products';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0064A8',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />
        <main>
          <PowerConnection/>
          <ModvakNumver/>
          <Products/>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
