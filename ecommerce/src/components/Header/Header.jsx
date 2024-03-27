import '../../styles/global.css';
import '../../styles/Header.css';

const Header = ({ setSearchTerm }) => {
  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };
  
  return (
  <>
    <header>
        <p className='title-header-bar'>MiTienda</p>
        <ul className='header-ul-bar'>
            <li>INICIO</li>
            <li>CATEGORÍAS</li>
            <li>OFERTAS</li>
            <li>CONTACTO</li>
        </ul>
        <input placeholder='Buscar productos' type="text" className='header-search-box' onChange={handleSearchChange}/>
        <div className='header-icon-container'>
          <img className='header-icon' src="/shopping-cart.png" alt="carrito" />
          <img className='header-icon' src="/heart.png" alt="favoritos" />
          <img className='header-icon' src="/avatar.png" alt="login usuario" />
        </div>
    </header>
  </>)
};

export default Header;
