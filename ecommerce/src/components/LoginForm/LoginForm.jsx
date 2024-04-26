// HOOKS
import { useRef, useContext, useState, useEffect} from 'react';
import { useUserHandleInfo } from '../../reducer/userForm_Reducer.js';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../customHooks/useAuth.js';
import { ThemeContext } from '../../context/ThemeContext.jsx';
import { OfferContext } from '../../context/OfferContext.jsx';
import { useForm } from 'react-hook-form';

// COMPONENTES
import Offer from '../Main/Offer/Offer.jsx'
//Estilos
import '../../styles/LoginForm.css';

import { CCAA, cities } from './LocationData.js';

const LoginForm = () => {
  // HOOKS USADOS
  const { toggleTheme } = useContext(ThemeContext);
  const {setUserName, userName} = useContext(OfferContext)  //context para tener disponible el nombre del usuario en otros componentes.
  const [userInfo, dispatch] = useUserHandleInfo(); //CustomHook con useReducer para manejar estado del login y almacenarlo en LS
  const nombreRef = useRef();
  const emailRef = useRef();
  const {userLogin, userLogout, userAuth, adminAuth, adminLogin, adminLogout} = useAuth();  //traemos la función login para cambiar el estado del login procedente del AuthContext desde useAuth.
  const navigate = useNavigate();
  const location = useLocation(); //configurado desde el componente LoginForm
  const [passwordMatch, setPasswordMatch] = useState(false);
  
  // VALIDACIÓN FOMRULARIO CON USE FORM
  const {register, formState:{errors}, handleSubmit, watch} = useForm();
  const namePattern = /^[a-zA-ZáéíóúÁÉÍÓÚ]+$/u;
  const emailPattern = /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/u;
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{5,}$/;
  const comunitySelected = watch('Comunidad');


    //Funcion de Submit del loginForm
  const submitForm = async (data) => {
      console.log(data);
      
      // Ejecuta el dispatch primero de forma asíncrona
    Object.keys(data).map( key => {
       dispatch({ type: `set${key}`, payload: data[key] })
      //  console.log(data[key]);
    });

    data.Password !== data.PassCheck ? setPasswordMatch(true) : passwordMatch;   
    console.log(userInfo.name);   
     setUserChange(true); 
    
    // Limpiamos los inputs del formulario
    nombreRef.current.value = '';
    emailRef.current.value = '';

    // navigate(location.state.pathname); 
    //una vez logueado enviamos al usuario a la ruta deseada. 
    // location.state.pathname es la ruta que se encontraba antes de que el usuario se logueara. 
    //state ofrece un objeto con información. Pathname ofrece la última ruta encontrada.
  };
      
      
  const [userChange, setUserChange] = useState(false);
  useEffect( () => {
    // console.log(userChange);
    if (userChange){
      userInfo.nombre === 'admin' && userInfo.email === 'admin@admin' ?  
      adminLogin() : userLogin(); // Cambiamos el estado del estado del login a true a través de la función login.
      
      // Guardamos la info del usuario en localStorage
      localStorage.setItem('user', JSON.stringify(userInfo));
      
      setUserName(userInfo.name); //actualizamos el nombre del usuario para que aparezca en el bunner de Offer    
      setPasswordMatch(false);
      setUserChange(false);
    } 
  }, [userChange])
      
  const handleLogOut = () => {
    adminAuth ? adminLogout() : userLogout()
  }
      //Función onChange para modificar el estado según se introducen los datos en los inputs y así ya esté modificado cuando se ejecute el submit.
      // Solo funciona para formulario sin usar el useForm. 
  // const handleChange = (event) => {
  // const { name, value } = event.target;
  // dispatch({ type: `set${name}`, payload: value });
  // };


  return (
    <>
      { userAuth || adminAuth ? (
        <>
        <Offer/>
        <div className='profileWrapper'>
            <h1>Bienvenido a tu perfil, {userName}</h1>
            <button className={`${toggleTheme}-first-button`} onClick={handleLogOut}>Logout</button>
        </div>
        </>
      ) : ( <form onSubmit={handleSubmit(submitForm)} className="userForm-Container">
      <label htmlFor="nombre">Nombre:</label>
      <input
        type="text"
        id="nombre"
        name="Nombre"
        ref={nombreRef}
        // onChange={handleChange}
        {...register("Nombre", {
          required: true,
          pattern: namePattern,
          minLength: {value: 3, message: 'Ese nombre no es válido Debe tener mínimo 3 carácteres.'} 
      })}            
      />
      {errors.Nombre?.type === 'required' && <p className="requiredMessage">No te olvides de introducir un nombre de usuario!</p>}
      {errors.Nombre?.type === 'pattern' && <p className="requiredMessage">Ooops, ese nombre no es válido. Introduce uno válido.</p>}
      {errors.Nombre && <p className="requiredMessage">{errors.Nombre.message}</p>}

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="Email"
        ref={emailRef}
        // onChange={handleChange}
        {...register('Email', {
          required: true,
          pattern: emailPattern
      })}
      />
      {errors.Email?.type === 'required' && <p className="requiredMessage">No te olvides de introducir un email!</p>}
      {errors.Email?.type === 'pattern' && <p className="requiredMessage">Ooops, ese email no es válido. Introduce uno válido.</p>}
      
      <label htmlFor="password">Contraseña:</label>
      <input type="password" 
              id="password" 
              name='password' 
              // onChange={handleChange} 
              {...register('UserPassword', {
              required: true,
              pattern: passwordPattern,
              minLength: {value: 5, message: 'La contraseña es demasiado corta. mínimo 5 carácteres.'} 
          })}/>
          {errors.UserPassword?.type === 'required' && <p className="requiredMessage">No te olvides de introducir una contraseña!</p>}
          {errors.UserPassword?.type === 'pattern' && <p className="requiredMessage">Ooops, esa constraseña no es válida. Debe tener mayúsculas, minúsculas y números.</p>}
          {errors.UserPassword && <p className="requiredMessage">{errors.UserPassword.message}</p>}
      
      <label htmlFor="passwordCheck">Repite contraseña:</label>
      <input type="password" 
              id="passwordCheck" 
              minLength={5} 
              {...register('PassCheck', {
              required: true,
              validate: (value) => value === watch('UserPassword') // Validación para comparar con la contraseña original
            })}
          />
          {errors.PassCheck?.type === 'required' && <p className="requiredMessage">Por favor, repite la contraseña.</p>}
          {errors.PassCheck?.type === 'validate' && <p className="requiredMessage">Las contraseñas no coinciden.</p>}

          <label htmlFor="">Comunidad Autónoma.</label>
          <select name="selectComunity"  
            {...register('Comunidad', {
              required:true,
            })}
          >
            <option value="">Seleccione Comunidad Autónoma</option>
            {CCAA.map((comunity)=>
              <option key={comunity} value={comunity}>{comunity}</option>
            )}
          </select>
          {errors.Comunidad?.type === 'required' && <p className="requiredMessage">No te olvides de seleccionar tu Comunidad Autónoma</p>}

          {comunitySelected && (
            <>
              <label htmlFor="">Ciudad</label>
              <select name="selectCity"  
                {...register('City', {
                  required:true,
                })}
              >
                <option value="">Seleccione ciudad</option>
                {cities[comunitySelected].map((city)=>
                  <option key={city} value={city}>{city}</option>
                )}
              </select>
            </>)

          }

      <button className={`${toggleTheme}-first-button`} type="submit">Login</button>
    </form>) }
    </>
  );
};

export default LoginForm;
