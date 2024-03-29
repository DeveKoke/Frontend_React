import { createContext, useState} from 'react';

export const OfferContextProvider = ({children}) => {
    const [userName, setUserName] = useState('');

    const userNameReducer = {
      userName, setUserName
    }
    return(
        <OfferContext.Provider value={userNameReducer}>
            {children}
        </OfferContext.Provider>
    )
}

export const OfferContext = createContext();
