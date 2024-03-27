import { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../../context/ThemeContext.jsx';
import { TrolleyContext } from '../../context/TrolleyContext.jsx';
import { Link } from 'react-router-dom';
import '../../styles/global.css';
import '../../styles/Header.css';

const Header = ({ setSearchTerm }) => {
  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };
  const { toggleTheme, setToggleTheme } = useContext(ThemeContext);
  const toggleThemeHandler = () => {
    setToggleTheme(toggleTheme === 'light' ? 'dark' : 'light');
  };

  const [itemQuantity, setItemQuantity] = useState(0)
  const {itemsList} = useContext(TrolleyContext);
  useEffect(() => {
    setItemQuantity(itemsList.length);
  }, [itemsList])

  return (
  <>
    <header className={`theme-${toggleTheme}`}>
        <Link className={`link link-${toggleTheme}`} to='/' ><p className='title-header-bar'>MiTienda</p></Link> 
        <ul className='header-ul-bar'>
            <li>INICIO</li>
            <li>CATEGORÍAS</li>
            <li>OFERTAS</li>
            <li>CONTACTO</li>
        </ul>
        <input placeholder='Buscar productos' type="text" className='header-search-box' onChange={handleSearchChange}/>
        <div className='header-icon-container'>
          <img className='header-icon'src="/themes.png" alt= "cambiar tema" onClick={toggleThemeHandler}/>
          <img className='header-icon' src="/heart.png" alt="favoritos" />
          <img className='header-icon' src="/avatar.png" alt="login usuario" />
          <Link to="/trolley"><div className='trolley-container'><img className='header-icon' src="/shopping-cart.png" alt="carrito" />{itemQuantity > 0 && <span className="numberTrolley">{itemQuantity}</span>}</div></Link> 
          {/* <div><img className='header-icon' src="/shopping-cart.png" alt="carrito" /><span className="numberTrolley">  {itemQuantity}  </span> </div>  */}
        </div>
    </header>
  </>)
};

export default Header;
