// ESTILOS
import '../../../styles/global.css';
import '../../../styles/ProductsList.css';
// HOOKS
import { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext.jsx';
import { TrolleyContext } from '../../../context/TrolleyContext.jsx';
import { useAuth } from '../../../customHooks/useAuth.js';
import { Link } from 'react-router-dom';

const ProductsList = ({...props}) => {
  const { toggleTheme } = useContext(ThemeContext);
  const { itemsCart, setItemsCart } = useContext(TrolleyContext);
  const {userAuth} = useAuth();


  const handleItem = (itemName, itemPrice, itemImg, itemId) => {
    const itemInfo = {
          id: itemId,       
          title: itemName,
          price: itemPrice,
          img: itemImg,
         };
    setItemsCart([...itemsCart, itemInfo]);
    console.log(itemsCart);
  }




  return (
    <>
       
         <div className= {`product-list-card product-list-card-theme${toggleTheme}`}>
          <div className='product-card-details'>
          <Link to={`/products/${props.id}`}><img src={props.img} alt={props.title} className='product-card-img'/>
            <h3>{props.title}</h3>
            <p className='product-card-description'>{props.description} </p></Link>
          </div>
          <p className='product-card-price'>${props.price} </p>
          {userAuth ? (<button onClick={() => handleItem(props.title, props.price, props.img, props.id)}>Añadir al carrito</button>) : (<Link to='/login'><button>Entra en tu cuenta para añadir al carrito</button></Link>) }
        </div>
      
    </>
  );
};

export default ProductsList;
