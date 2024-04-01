import { useRef, useContext} from 'react';
import { useUserHandleInfo } from '../../reducer/userForm_Reducer.js';
import { OfferContext } from '../../context/OfferContext.jsx';
//Estilos
import '../../styles/LoginForm.css';


const LoginForm = () => {
  const {setUserName} = useContext(OfferContext)
  const [userInfo, dispatch] = useUserHandleInfo();
  const nombreRef = useRef();
  const emailRef = useRef();

  //Funcion de Submit 
  const handleSubmit = (event) => {
    event.preventDefault();
    // Guardamos la info del usuario en localStorage
    localStorage.setItem('user', JSON.stringify(userInfo));
    console.log(userInfo);
    // Limpiamos los inputs del formulario
    nombreRef.current.value = '';
    emailRef.current.value = '';
    setUserName(userInfo.nombre);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch({ type: `set${name}`, payload: value });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="userForm-Container">
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
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginForm;
