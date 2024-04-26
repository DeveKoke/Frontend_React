import { useReducer } from "react";

const initialState = {
    name: '',
    email: '',
    password: '',
    comunity:'',
    city:''
  };
  
  const formReducer = (state, action) => {
    switch (action.type) {
      case 'setNombre':
        return { ...state, name: action.payload };
      case 'setEmail':
        return { ...state, email: action.payload };
      case 'setUserPassword':
        return { ...state, password: action.payload };
      case 'setComunidad':
        return { ...state, CA: action.payload };
      case 'setCity':
        return { ...state, city: action.payload };
      default:
        return state;
    }
  };  
  export const useUserHandleInfo = () => useReducer(formReducer, initialState);