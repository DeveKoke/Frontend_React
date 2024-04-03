import { Link } from 'react-router-dom';
import '../../styles/NotFound.css';

const NotFound = () => {
  return (
    <>
    <div className='notFoundWrapper'>
        <h1>Ooops, página no encontrada.</h1>
        <img className='notFoundImg' src="/site-not-found.png" alt="robot durmiendo" />
        <Link to={'/'}><button className='first-button'>Volver a la página principal</button></Link> 
    </div>
    </>
  );
};  

export default NotFound;
