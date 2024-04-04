// HOOKS
import { useRef, useContext} from 'react';
import { useUserHandleInfo } from '../../reducer/userForm_Reducer.js';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../customHooks/useAuth.js';
import { ThemeContext } from '../../context/ThemeContext.jsx';
import { OfferContext } from '../../context/OfferContext.jsx';
// COMPONENTES
import Offer from '../Main/Offer/Offer.jsx'
//Estilos
import '../../styles/LoginForm.css';

const LoginForm = () => {
  // HOOKS USADOS
  const { toggleTheme } = useContext(ThemeContext);
  const {setUserName, userName} = useContext(OfferContext)  //context para tener disponible el nombre del usuario en otros componentes.
  const [userInfo, dispatch] = useUserHandleInfo(); //CustomHook con useReducer para manejar estado del login y almacenarlo en LS
  const nombreRef = useRef();
  const emailRef = useRef();
  const {login, logout, userAuth} = useAuth();  //traemos la función login para cambiar el estado del login procedente del AuthContext desde useAuth.
  const navigate = useNavigate();
  const location = useLocation(); //configurado desde el componente LoginForm

  //Funcion de Submit del loginForm
  const handleSubmit = (event) => {
    event.preventDefault();
    // Guardamos la info del usuario en localStorage
    localStorage.setItem('user', JSON.stringify(userInfo));
    console.log(userInfo);

    // Limpiamos los inputs del formulario
    nombreRef.current.value = '';
    emailRef.current.value = '';

    setUserName(userInfo.nombre); //actualizamos el nombre del usuario para que aparezca en el bunner de Offer
    login(); // Cambiamos el estado del estado del login a true a través de la función login.
    navigate(location.state.pathname); //una vez logueado enviamos al usuario a la ruta deseada. 
    // location.state.pathname es la ruta que se encontraba antes de que el usuario se logueara. 
    //state ofrece un objeto con información. Pathname ofrece la última ruta encontrada.
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch({ type: `set${name}`, payload: value });
  };

  const handleLogOut = () => {
    logout();
  }

  return (
    <>
      { userAuth ? (
        <>
        <Offer/>
        <div className='profileWrapper'>
            <h1>Bienvenido a tu perfil, {userName}</h1>
            <button className={`${toggleTheme}-first-button`} onClick={handleLogOut}>Logout</button>
        </div>
        </>
      ) : ( <form onSubmit={handleSubmit} className="userForm-Container">
      <label htmlFor="nombre">Nombre:</label>
      <input
        type="text"
        id="nombre"
        name="Nombre"
        value={userInfo.nombre}
        ref={nombreRef}
        onChange={handleChange}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="Email"
        value={userInfo.email}
        ref={emailRef}
        onChange={handleChange}
      />
      <button className={`${toggleTheme}-first-button`} type="submit">Login</button>
    </form>) }
    </>
  );
};

export default LoginForm;
