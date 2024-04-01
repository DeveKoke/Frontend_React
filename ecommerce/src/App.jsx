// COMPONENTES HIJOS
import Main from './components/Main/Main.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Trolley from './components/Trolley/Trolley.jsx';
import ProductDetails from './components/ProductDetails/ProductDetails.jsx';
import LoginForm from './components/LoginForm/LoginForm.jsx';
import NotFound from './components/NotFound/NotFound.jsx';
// ENRUTAMIENTO
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// HOOKS
import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext.jsx';
import { TrolleyContext } from './context/TrolleyContext.jsx';
import { OfferContextProvider } from './context/OfferContext.jsx';
// ESTILOS
import './styles/global.css'; 


function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const [itemsList, setItemsList] = useState([]);
  const productsListArr ={
    itemsList, setItemsList
  };

  return (
    <BrowserRouter>
      <ThemeProvider>
        <TrolleyContext.Provider value={productsListArr} >
          <Header setSearchTerm={setSearchTerm} />
          <OfferContextProvider>
          <Routes>
              <Route path="/" element={<Main searchTerm={searchTerm} />}/>
              <Route path='/cart' element={<Trolley/>}/>
              <Route path='/login' element={<LoginForm/>} />
              <Route path='products/:productID' element={<ProductDetails/>}/>
              <Route path='*' element={<NotFound/>}/>
          </Routes>
          </OfferContextProvider>
        </TrolleyContext.Provider>
        <Footer/>
      </ThemeProvider>
    </BrowserRouter>
    
  );
}

export default App
