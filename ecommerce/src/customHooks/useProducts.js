import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = 'http://localhost:3000/products';

const  useProducts = () =>{
    const [products, setProducts] = useState([]);
    const [editedProduct, seteditedProduct] = useState({
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
    const deleteProducts = async(id) => {
        try{
            await axios.delete(`${API_URL}/${id}`);
            setProducts((prevProducts) => 
            prevProducts.filter((product) => product.id !==id));
        }catch(error){
            console.log('error deleting product',error);
        }
    }
}