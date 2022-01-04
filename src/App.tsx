import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';
import Header from './components/Header';
import { CartProvider } from './hooks/useCart';

import GlobalStyles from './styles/global';

// imports absolutos, imports relativos , imports de css e imagens

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <GlobalStyles />
        <Header />
        <Routes />
        <ToastContainer autoClose={3000} />
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
