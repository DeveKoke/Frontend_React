import {useContext, useState, useEffect } from "react";
import { TrolleyContext } from "../../../context/TrolleyContext.jsx";
import { ThemeContext } from '../../../context/ThemeContext.jsx';
import {Link} from 'react-router-dom';
import '../../../styles/TrolleyList.css'

const TrolleyList = () => {
  const { toggleTheme } = useContext(ThemeContext);
  const { itemsCart, setItemsCart } = useContext(TrolleyContext);
  const [totalPrice, setTotalPrice] = useState(0);

  const totalItems = {};  //Contar cuántas veces se repite el mismo producto dentro de itemList
  itemsCart.forEach(item => {
    totalItems[item.id] = (totalItems[item.id] || 0) + 1;
  });
  
  //Hacemos filtro de itemsCart para solo mostrar un elemento en caso de que se repita dentro de itemsCart
  const uniqueItems = itemsCart.filter(  
    (item, index, self) =>
      index === self.findIndex((t) => t.id === item.id)
  );

  useEffect(() => {
    const totalPriceCalculation = () => {
      let totalPrice = 0;
      itemsCart.forEach(item => {
        totalPrice += item.price;
      });
      return totalPrice.toFixed(2);
    };
  
    setTotalPrice(totalPriceCalculation());
  }, [itemsCart]);


  const printItemList = () => {
    return uniqueItems.map(item => (
      <>
          <div key={item.id} className="trolley-item-wrapper">
              <img src={item.img} alt={item.title} />
              <div className="trolley-item-info">
                  <span className="numberTrolley">{totalItems[item.id]}</span>
                  <h3>{item.title}</h3>
                  <h3>Precio producto: ${item.price}</h3>
                  <h3>Precio total producto: ${item.price * totalItems[item.id]}</h3>
              </div>
          </div>
      </>
      ))
  }

  const deleteCartProducts = () => {
    setItemsCart([])
  }

  const endPurchase = () => {
    alert('Estás a punto de ser dirigido a la pasarela de pago, ¿seguro que quieres continuar?')
    setItemsCart([])
  }

  return (
    <>
      <article className="Trolley-Section">
              
        {parseFloat(totalPrice) === 0 ? (<>
          <h3>Todavía no tienes ningún artículo añadido a tu carrito.</h3>
          <Link to='/'> <button className={`${toggleTheme}-first-button`} >Ir a comprar</button></Link> 
        </>) : (
          <>
           <h2>Tu carrito:</h2>
          <div className="TrolleyContainer">
            {printItemList()}
          </div>
          <h3>Total a pagar: ${totalPrice}</h3>
          <div className="trolley-manage-buttons">
              <button className={`${toggleTheme}-first-button`} onClick={deleteCartProducts}>Eliminar todos los productos</button>
              <button className={`${toggleTheme}-first-button`} onClick={endPurchase}>Finalizar compra</button>
          </div>
          </>
        ) }
      </article>
    </>
  );
};

export default TrolleyList;
