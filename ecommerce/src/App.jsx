import Main from './components/Main/Main.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import { useState } from 'react';
import './styles/global.css'


function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <Header setSearchTerm={setSearchTerm} />
      <Main searchTerm={searchTerm} />
      <Footer />
    </>
  );
}

export default App
