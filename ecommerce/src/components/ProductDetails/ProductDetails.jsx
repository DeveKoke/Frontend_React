// DATOS
import {ecommerceData} from '../Main/index.js';
// COMPONENTS
import Offer from '../Main/Offer/Offer.jsx';
//HOOKS Y ENRUTAMIENTO
import { Link, useParams } from "react-router-dom";
import { useContext } from 'react';
import { TrolleyContext } from '../../context/TrolleyContext.jsx';
// ESTILOS
import '../../styles/ProductDetails.css';

const ProductDetails = () => {
    const {productID} = useParams();
    const productDetails = ecommerceData[parseInt(productID-1)];
    console.log(productDetails.image);
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
        <Offer/>
        <Link to={'/'}><h3>Volver</h3></Link>
        <h4>Este es el producto # {productID}</h4>
        <article>
          <h1>{productDetails.title} </h1>
          <h2>#{productDetails.category}</h2>
          <img src={productDetails.image} alt={productDetails.title} />
          <p>Precio: ${productDetails.price}</p>
          <p>{productDetails.description}</p>
          <button onClick={() => handleItem(productDetails.title, productDetails.price, productDetails.image, productDetails.id)}>Añadir al carrito</button>
        </article>
                </>
    )
}

export default ProductDetails