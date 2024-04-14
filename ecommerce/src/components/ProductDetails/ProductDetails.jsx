// COMPONENTS
import Offer from '../Main/Offer/Offer.jsx';
//HOOKS Y ENRUTAMIENTO
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect } from 'react';
import { TrolleyContext } from '../../context/TrolleyContext.jsx';
import { ThemeContext } from '../../context/ThemeContext.jsx';
import useProducts from '../../customHooks/useProducts.js';

// ESTILOS
import '../../styles/ProductDetails.css';

const ProductDetails = () => {
    const {productID} = useParams();
    const { getOneProduct, uniqueItem} = useProducts()
    const { itemsCart, setItemsCart } = useContext(TrolleyContext);
    const { toggleTheme } = useContext(ThemeContext);

    useEffect(() => {
      getOneProduct(productID);
  }, []);
  


    // AÑADIR AL CARRTIO
    const handleItem = (itemName, itemPrice, itemImg, itemId) => {
      const itemInfo = {
            id: itemId,       
            title: itemName,
            price: itemPrice,
            img: itemImg,
           };
      setItemsCart([...itemsCart, itemInfo]);
    }

    return (
        <>
        <Offer/>
        <Link to={'/'}><h3 className='back-link'>Volver</h3></Link>
        <article className='product-details-wrapper'>
          <section className='details-section1'>
              <img src={uniqueItem.image} alt={uniqueItem.title} />
          </section>
          <section className='details-section2'>
              <h1 className='product-title'>{uniqueItem.title} </h1>
              <h2 className='product-tag'>#{uniqueItem.category}</h2>
              <p className='details-price-text'>Precio: ${uniqueItem.price}</p>
              <p className='details-des-text'>{uniqueItem.description}</p>
              <button className={`${toggleTheme}-first-button`} onClick={() => handleItem(uniqueItem.title, uniqueItem.price, uniqueItem.image, uniqueItem.id)}>Añadir al carrito</button>
          </section>
        </article>
                </>
    )
}

export default ProductDetails