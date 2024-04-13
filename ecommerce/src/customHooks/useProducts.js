import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = 'http://localhost:3000/products';
// const API_PRODUCT = `${API_URL}/:id`;


const  useProducts = () =>{
    const [products, setProducts] = useState([]);
    const [editedProduct, setEditedProduct] = useState({
        id:null,
        title: '',
        price: '',
        img: ''
    });
    
    useEffect(() => {
        getProdutcts();
    }, []);
    
    const getProdutcts = async() => {
        try{
            const response = await axios.get(API_URL);
            setProducts(response.data);  
        } catch(error){
            console.log(error);
        }
    }

    const createProduct = async(newProductData) => {
        try{
            const newId = products.length ? products[products.length - 1].id + 1 : 1;
            const newProduct = {...newProductData, id:newId}
            console.log(newProduct);
            const response = await axios.post(API_URL, newProduct);
            setProducts((prevProducts) => [...prevProducts, response.data]);
            setEditedProduct({id:null, title:'', price:'', img:''});
            console.log(products);
        }catch(error){
            console.log('error adding product', error);
        }
    };

    const editProduct = async() => {
        try{
            const response = await axios.put(`${API_URL}/${editedProduct.id}`, editedProduct);
            const updateProduct = response.data;
            setProducts((prevProducts) => prevProducts.map((product) => product.id === updateProduct.id ? updateProduct : product));
            setEditedProduct({id:null, title:'', price:'', img:''});
        }catch(error){
            console.log('error editing product', error);

        }
    };

    const deleteProduct = async(id) => {
        try{
            console.log(id);
            await axios.delete(`${API_URL}/${id}`);
            setProducts((prevProducts) => 
            prevProducts.filter((product) => product.id !==id));
            console.log(products);
        }catch(error){
            console.log('error deleting product',error);
        }
    };

    const handleSave = () => {
        if (editedProduct.id !== null){
            editedProduct();
        }else{
            createProduct();
        }
    };

    const handleInputChange = (e) => {
        const {name, value} =  e.target;
        setEditedProduct ({...editedProduct, [name]:value});
    };

    const handleEditProductDetails = (id, title, price) => {
        const selectedProduct =  products.find((product) => product.id === id);
        setEditedProduct([...selectedProduct, title, price])
    };

    return {
        products,
        editProduct,
        deleteProduct,
        createProduct,
        handleEditProductDetails,
        handleSave,
        handleInputChange,
        getProdutcts
       }
}
export default useProducts;