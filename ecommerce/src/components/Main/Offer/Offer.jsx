import '../../../styles/global.css';
import '../../../styles/Offer.css';
import { useContext } from 'react';
import { OfferContext } from '../../../context/OfferContext';

const Offer = () => {
  const {userName} = useContext(OfferContext);

  return (
    
  <>
    <div className='offer-box'>
    <h2>{userName ? `¡${userName}, 20% de descuento para nuevos clientes!` : '¡20% de descuento para nuevos clientes!'}</h2>
    </div>
  </>
  
  )
};

export default Offer;
