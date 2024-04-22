import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setGetAllProducts, 
        setGetOneProduct, 
        setCreateProduct, 
        setEditProduct, 
        setUpdateProduct, 
        setDeleteProduct } from "../reducer/itemsReducer.js";

const API_URL = 'http://localhost:3000/products';
const useProducts = () =>{
    const dispatch = useDispatch();
    const products = useSelector((state) => state.items.products);
    
    useEffect(() => {
        dispatch(setGetAllProducts());
    }, [dispatch]);
    
    const getProductsCollection = async() => {
       try{
           const response = await axios.get(API_URL);
           const productsCollection = response.data;
           dispatch(setGetAllProducts(productsCollection))
       } catch(error){
           console.log(error);
       }
   };
    
    const getOneProduct = async(id) =>{
        try{
            const response = await axios.get(`${API_URL}/${id}`);
            const productData = response.data;
            dispatch(setGetOneProduct(productData))
        } catch(error){
            console.log(error);
        }
    };

    const createProduct = async(newProductData) => {
        try{
            const newId = products.length ? products[products.length - 1].id + 1 : 1;
            const newProduct = {...newProductData, id:newId}
            const response = await axios.post(API_URL, newProduct);
            dispatch(setCreateProduct(response.data));
        }catch(error){
            console.log('error adding product', error);
        }
    };

    const editProduct = async(productNewData) => {
        try{
            const response = await axios.put(`${API_URL}/${productNewData.id}`, productNewData);
            dispatch(setEditProduct(response.data), setUpdateProduct());
        }catch(error){
            console.log('error editing product', error);
        }
    };

    const deleteProduct = async(id) => {
        try{
            await axios.delete(`${API_URL}/${id}`);
            dispatch(setDeleteProduct(id));
        }catch(error){
            console.log('error deleting product',error);
        }
    };

    return {
        products,
        getProductsCollection,
        getOneProduct,
        createProduct,
        editProduct,
        deleteProduct
    };
}

export default useProducts;




















// import { useEffect, useState } from "react";
// import axios from "axios";

// const API_URL = 'http://localhost:3000/products';

// const  useProducts = () =>{
//     const [uniqueItem, setUniqueItem] = useState({})
//     const [products, setProducts] = useState([]);
//     const [editedProduct, setEditedProduct] = useState({
//         id:0,
//         img: '',
//         title: '',
//         description: '',
//         price: ''
//     });
    
//     useEffect(() => {
//         getProdutcts();
//     }, []);
    
//     const getProdutcts = async() => {
//         try{
//             const response = await axios.get(API_URL);
//             setProducts(response.data);  
//         } catch(error){
//             console.log(error);
//         }
//     };

//     const getOneProduct = async(id) =>{
//         try{
//             const response = await axios.get(`${API_URL}/${id}`);
//             setUniqueItem(response.data); 
//         } catch(error){
//             console.log(error);
//         }
//     };

//     const createProduct = async(newProductData) => {
//         try{
//             const newId = products.length ? products[products.length - 1].id + 1 : 1;
//             const newProduct = {...newProductData, id:newId}
//             const response = await axios.post(API_URL, newProduct);
//             setProducts((prevProducts) => [...prevProducts, response.data]);
//             setEditedProduct({id:null, title:'', price:'', img:''});
//         }catch(error){
//             console.log('error adding product', error);
//         }
//     };

//     const editProduct = async(productNewData) => {
//         try{
//             const response = await axios.put(`${API_URL}/${productNewData.id}`, productNewData);
//             const updateProduct = response.data;
//             setProducts((prevProducts) => prevProducts.map((product) => product.id === updateProduct.id ? updateProduct : product));
//             setEditedProduct({id:null, title:'', price:'', img:''});
//         }catch(error){
//             console.log('error editing product', error);

//         }
//     };

//     const deleteProduct = async(id) => {
//         try{
//             console.log(id);
//             await axios.delete(`${API_URL}/${id}`);
//             setProducts((prevProducts) => 
//             prevProducts.filter((product) => product.id !==id));
//             console.log(products);
//         }catch(error){
//             console.log('error deleting product',error);
//         }
//     };

//     const handleSave = () => {
//         if (editedProduct.id !== null){
//             editedProduct();
//         }else{
//             createProduct();
//         }
//     };

//     const handleInputChange = (e) => {
//         const {name, value} =  e.target;
//         setEditedProduct ({...editedProduct, [name]:value});
//     };

//     const handleEditProductDetails = (id, title, price) => {
//         const selectedProduct =  products.find((product) => product.id === id);
//         setEditedProduct([...selectedProduct, title, price])
//     };

//     return {
//         products,
//         uniqueItem,
//         editProduct,
//         deleteProduct,
//         createProduct,
//         handleEditProductDetails,
//         handleSave,
//         handleInputChange,
//         getProdutcts,
//         getOneProduct
//        }
// }
// export default useProducts;