import '../../../styles/global.css';
import '../../../styles/Offer.css';
import { useContext } from 'react';
import { OfferContext } from '../../../context/OfferContext';
import { useAuth } from '../../../customHooks/useAuth';

const Offer = () => {
  const {userName} = useContext(OfferContext);
  const {userAuth} = useAuth();  //traemos la función login para cambiar el estado del login procedente del AuthContext desde useAuth.


  return (

    <>
    {userAuth ? (   <div className='offer-box'>
    <h2>¡{userName}, 20% de descuento para nuevos clientes!</h2>
    </div>):
    (  <div className='offer-box'>
    <h2>¡20% de descuento para nuevos clientes!</h2>
    </div>)}
    
    </>





    
  // <>
  //   <div className='offer-box'>
  //   <h2>{userName ? `¡${userName}, 20% de descuento para nuevos clientes!` : '¡20% de descuento para nuevos clientes!'}</h2>
  //   </div>
  // </>
  
  )
};

export default Offer;
