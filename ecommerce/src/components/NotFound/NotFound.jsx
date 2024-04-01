import { Link } from 'react-router-dom';
import '../../styles/NotFound.css';

const NotFound = () => {
  return (
    <>
        <h1>Sorry, page not found.</h1>

        <Link to={'/'}><h3>volver a la página principal</h3></Link> 
    </>
  );
};  

export default NotFound;
