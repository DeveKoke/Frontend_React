import { configureStore } from  '@reduxjs/toolkit';
import itemsReducer from '../reducer/itemsReducer.js'

export const store =  configureStore({
    reducer: {
        items: itemsReducer,
        devTools: true,
    }
})