// COMPONENTS
import TrolleyList  from './TrolleyList/TrolleyList.jsx';
import UserForm from './UserForm//UserForm.jsx';
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
      <UserForm/>
    </article>
    </>
  );
};

export default Trolley;
