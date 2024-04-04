// DATOS
import {ecommerceData} from '../Main/index.js';
// COMPONENTS
import Offer from '../Main/Offer/Offer.jsx';
//HOOKS Y ENRUTAMIENTO
import { Link, useParams } from "react-router-dom";
import { useContext } from 'react';
import { TrolleyContext } from '../../context/TrolleyContext.jsx';
import { ThemeContext } from '../../context/ThemeContext.jsx';

// ESTILOS
import '../../styles/ProductDetails.css';

const ProductDetails = () => {
    const {productID} = useParams();
    const productDetails = ecommerceData[parseInt(productID-1)];
    console.log(productDetails.image);
    const { itemsCart, setItemsCart } = useContext(TrolleyContext);
    const { toggleTheme } = useContext(ThemeContext);


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
        <Offer/>
        <Link to={'/'}><h3 className='back-link'>Volver</h3></Link>
        <article className='product-details-wrapper'>
          <section className='details-section1'>
              <img src={productDetails.image} alt={productDetails.title} />
          </section>
          <section className='details-section2'>
              <h1 className='product-title'>{productDetails.title} </h1>
              <h2 className='product-tag'>#{productDetails.category}</h2>
              <p className='details-price-text'>Precio: ${productDetails.price}</p>
              <p className='details-des-text'>{productDetails.description}</p>
              <button className={`${toggleTheme}-first-button`} onClick={() => handleItem(productDetails.title, productDetails.price, productDetails.image, productDetails.id)}>Añadir al carrito</button>
          </section>
        </article>
                </>
    )
}

export default ProductDetails