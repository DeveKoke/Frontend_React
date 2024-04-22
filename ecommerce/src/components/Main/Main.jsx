import '../../styles/global.css';
import '../../styles/Main.css';
// COMPONENTS
import Offer from './Offer/Offer.jsx';
import ProductsCard from './ProductsCard/ProductsCard.jsx';
import Modal from './Modal/Modal.jsx';
// HOOKS
import  useProducts  from '../../customHooks/useProducts.js';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext.jsx';
import { useAuth } from '../../customHooks/useAuth.js';
import { useSelector, useDispatch } from 'react-redux';
import { setGetAllProducts } from '../../reducer/itemsReducer.js';
// import {ecommerceData} from './index.js';

const Main = ({searchTerm}) => {
  const products = useSelector((state) => state.items.products);
  const dispatch = useDispatch();
  const {getProductsCollection} = useProducts();
  const { toggleTheme } = useContext(ThemeContext);
  const [activeModal, setActiveModal] = useState(false);
  const [editId, setEditId] = useState(false);
  const {adminAuth} = useAuth();
  
  console.log(products);
  useEffect(() => {
    getProductsCollection()
    // dispatch(setGetAllProducts())
  }, []);
  
  const handleModal = () => {
    setActiveModal(true);
  };

  
  //Filtrar para la búsqueda.
  const printProductsCards = () => {
    const filteredProducts = products.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    return filteredProducts.map(item => (
      <ProductsCard
        title={item.title}
        description={item.description}
        image={item.image}
        price={item.price}
        id={item.id}
        key={item.id} 
        handleModal={handleModal}
        setEditId={setEditId}
        />
    )) ;
  };
    
    useEffect(() => {
      printProductsCards();
  }, [products]);
  
  return (

  <>
      <Offer/>
      {activeModal && <Modal editId={editId} handleModal={setActiveModal} /> }
      <section className={`product-list-wrapper theme-${toggleTheme}`}>
          {printProductsCards()}
      {adminAuth && <button className='addProductAdminButton' onClick={handleModal} > + </button>}
      </section>
        
  </>

  );
};

export default Main;
