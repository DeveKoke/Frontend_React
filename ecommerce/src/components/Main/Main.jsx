import '../../styles/global.css';
import '../../styles/Main.css';
import Offer from './Offer/Offer.jsx';
import ProductsList from './ProductsList/ProductsList.jsx';
// import {ecommerceData} from './index.js';
import  useProducts  from '../../customHooks/useProducts.js';
import { useContext, useEffect } from 'react';
import { ThemeContext } from '../../context/ThemeContext.jsx';

const Main = ({searchTerm}) => {
  const {products,
    editProduct,
    deleteProduct,
    createProduct,
    handleEditProductDetails,
    handleSave,
    handleInputChange,
    getProdutcts,} = useProducts();
  const { toggleTheme } = useContext(ThemeContext);
  
  useEffect(() => {
    getProdutcts();
  }, []);

  //Filtrar para la búsqueda.
  const printProductList = () => {
    const filteredProducts = products.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    return filteredProducts.map(item => (
      <ProductsList
        title={item.title}
        description={item.description}
        img={item.image}
        price={item.price}
        id={item.id}
        key={item.id} />
    )) ;
  };
  
  return (
<>
    <Offer/>
    <section className={`product-list-wrapper theme-${toggleTheme}`}>
        {printProductList()}
    </section>
      
</>

  );
};

export default Main;
