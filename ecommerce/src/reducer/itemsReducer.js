import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    products: [],
    uniqueItem:null,
    editedProduct: {
        id: null,
        img: '',
        title: '',
        description: '',
        price: ''
    }
};

export const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        setGetAllProducts: (state, action) => {
            state.products = action.payload;
        },
        setGetOneProduct: (state, action) => {
            state.uniqueItem = action.payload;
        },
        setCreateProduct: (state, action) => {
            state.products.push(action.payload);
        },
        setEditProduct: (state, action) => {
            state.editedProduct = action.payload;
        },
        setUpdateProduct: (state) => {
            state.products = state.products.map(product =>
                product.id === state.editedProduct.id ? state.editedProduct : product
            );
        },
        setDeleteProduct: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload);
        }
    }
});

export const { setGetAllProducts, setGetOneProduct, setCreateProduct, setEditProduct, setUpdateProduct, setDeleteProduct } = itemsSlice.actions;

export default itemsSlice.reducer;
