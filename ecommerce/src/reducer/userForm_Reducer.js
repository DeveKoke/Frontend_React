import { useReducer } from "react";

const initialState = {
    nombre: '',
    email: ''
  };
  
  const formReducer = (state, action) => {
    switch (action.type) {
      case 'setNombre':
        return { ...state, nombre: action.payload };
      case 'setEmail':
        return { ...state, email: action.payload };
      default:
        return state;
    }
  };  
  export const useUserHandleInfo = () => useReducer(formReducer, initialState);