// ESTILOS
import '../../../styles/global.css';
import '../../../styles/ProductsList.css';
// HOOKS
import { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext.jsx';
import { TrolleyContext } from '../../../context/TrolleyContext.jsx';
import { Link } from 'react-router-dom';

const ProductsList = ({...props}) => {
  const { toggleTheme } = useContext(ThemeContext);
  const { itemsCart, setItemsCart } = useContext(TrolleyContext);


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
          <Link to={`/products/${props.id}`}><img src={props.img} alt={props.title} className='product-card-img'/></Link>
            <h3>{props.title}</h3>
            <p className='product-card-description'>{props.description} </p>
          </div>
          <p className='product-card-price'>${props.price} </p>
          <button onClick={() => handleItem(props.title, props.price, props.img, props.id)}>Añadir al carrito</button>
        </div>
      
    </>
  );
};

export default ProductsList;
