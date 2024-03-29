// COMPONENTES HIJOS
import Main from './components/Main/Main.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Trolley from './components/Trolley/Trolley.jsx';
// ENRUTAMIENTO
import { BrowserRouter } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
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
              <Route path='/trolley' element={<Trolley/>}/>
          </Routes>
          </OfferContextProvider>
        </TrolleyContext.Provider>
        <Footer/>
      </ThemeProvider>
    </BrowserRouter>
    
  );
}

export default App
