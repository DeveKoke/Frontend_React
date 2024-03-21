import '../../styles/global.css';
import '../../styles/Main.css';
import Offer from './Offer/Offer.jsx';
import ProductsList from './ProductsList/ProductsList.jsx';
import {ecommerceData} from './index.js';


const Main = ({searchTerm}) => {
  
  // const printProductList = () => {
  //   return ecommerceData.map(item => <ProductsList title={item.title} description={item.description} img={item.image} price={item.price} key={item.id}/>)
  // }
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
    <section className='product-list-wrapper'>
        {printProductList()}
    </section>
      
</>

  );
};

export default Main;
