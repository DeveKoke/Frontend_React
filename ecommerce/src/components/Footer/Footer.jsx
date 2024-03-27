import '../../styles/global.css';
import '../../styles/Footer.css';


const Footer = () => {
  return (
    <>
    <footer className='footer-wrapper'>
      <div className='footer-container'>
          <div className='footer-section'>
            <h3>Contacto</h3>
            <ul>
              <li>Email: info@MiTienda.es</li>
              <li>Teléfono: +34 654321012</li>
            </ul>
          </div>
          <div className='footer-section'>
          <h3>Redes Sociales</h3>
            <ul>
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Twitter / X</li>
            </ul>
          </div>
          <div className='footer-section'>
          <h3>Dirección</h3>
            <ul>
              <li>Calle Principal, 123</li>
              <li>Ciudad, País</li>
            </ul>
          </div>
      </div>
      <hr />
      <h4>MiTienda. Todos los derechos reservados.</h4>
    </footer>
    </>
  )
};

export default Footer;
