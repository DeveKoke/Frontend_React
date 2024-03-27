import '../../styles/global.css';
import '../../styles/Main.css';
import Offer from './Offer/Offer.jsx';
import ProductsList from './ProductsList/ProductsList.jsx';
import {ecommerceData} from './index.js';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext.jsx';

const Main = ({searchTerm}) => {

  const { toggleTheme } = useContext(ThemeContext);
  
  const printProductList = () => {
    const filteredProducts = ecommerceData.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    return filteredProducts.map(item => (
      <ProductsList
        title={item.title}
        description={item.description}
        img={item.image}
        price={item.price}
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
