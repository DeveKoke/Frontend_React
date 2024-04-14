// ESTILOS
import '../../../styles/global.css';
import '../../../styles/ProductsList.css';
// HOOKS
import { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext.jsx';
import { TrolleyContext } from '../../../context/TrolleyContext.jsx';
import { useAuth } from '../../../customHooks/useAuth.js';
import { Link } from 'react-router-dom';
import useProducts from '../../../customHooks/useProducts.js';

const ProductsList = ({image, title, description, id, price, handleModal, setEditId}) => {
  const { toggleTheme } = useContext(ThemeContext);
  const { itemsCart, setItemsCart } = useContext(TrolleyContext);
  const {userAuth, adminAuth} = useAuth();
  const {deleteProduct} = useProducts();

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

  const handleModalClick = () => {
   handleModal(true);
   setEditId(true);
  };
  const handleDelete = () => {
    deleteProduct(id)
  };



  return (
    <>
    <div className= {`product-list-card product-list-card-theme${toggleTheme}`}>

        <div className='product-card-details'>
            
            {adminAuth ? (
              <div>
                  <div className='editAdminIcons'>
                      <img src="edit.png" alt="botón de editar"  onClick={handleModalClick}/>
                      <img src="delete.png" alt="botón de eliminar" onClick={handleDelete}/>
                  </div>
              <Link to={`/products/${id}`} className={`${toggleTheme}-link`}>
                <img src={image} alt={title} className='product-card-img'/>
              </Link>
              </div>
            ) : <Link to={`/products/${id}`} className={`${toggleTheme}-link`}>
              <img src={image} alt={title} className='product-card-img'/>
              </Link>
            } 
            <Link to={`/products/${id}`} className={`${toggleTheme}-link`}>
              <h3>{title}</h3>
              <p className='product-card-description'>{description} </p>
            </Link>
        </div>
        <p className={`${toggleTheme}-product-card-price`}>${price} </p>
        {adminAuth ? null 
        : userAuth ? (<button className={`${toggleTheme}-product-card-button`} onClick={() => handleItem(title, price, image, id)}>Añadir al carrito</button>) 
        : (<Link to='/login'><button className={`${toggleTheme}-product-card-button`}>Entra en tu cuenta para añadir  este producto al carrito</button></Link>) }

    </div>
    </>
  );
};

export default ProductsList;
