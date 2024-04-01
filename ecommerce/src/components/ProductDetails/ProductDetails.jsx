import '../../styles/ProductDetails.css';
import { Link, useParams } from "react-router-dom";
import {ecommerceData} from '../Main/index.js';
import Offer from '../Main/Offer/Offer.jsx';

const ProductDetails = () => {
    const {productID} = useParams();
    const productDetails = ecommerceData[parseInt(productID-1)];

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
        </article>
                </>
    )
}

export default ProductDetails