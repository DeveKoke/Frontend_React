// COMPONENTS
import TrolleyList  from './TrolleyList/TrolleyList.jsx';
import Offer from '../Main/Offer/Offer.jsx';
// ESTILOS
import '../../styles/global.css';
import '../../styles/ProductsList.css';

const Trolley = () => {

  return (
    <>
    <article>
      <Offer/>
      <TrolleyList/>
    </article>
    </>
  );
};

export default Trolley;
