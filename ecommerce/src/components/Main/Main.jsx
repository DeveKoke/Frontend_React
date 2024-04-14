import '../../styles/global.css';
import '../../styles/Main.css';
// COMPONENTS
import Offer from './Offer/Offer.jsx';
import ProductsList from './ProductsList/ProductsList.jsx';
import Modal from './Modal/Modal.jsx';
// HOOKS
import  useProducts  from '../../customHooks/useProducts.js';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext.jsx';
import { useAuth } from '../../customHooks/useAuth.js';
// import {ecommerceData} from './index.js';

const Main = ({searchTerm}) => {
  const {products, getProdutcts,} = useProducts();
  const { toggleTheme } = useContext(ThemeContext);
  const [activeModal, setActiveModal] = useState(false);
  const [editId, setEditId] = useState(false);
  const {adminAuth} = useAuth();

  useEffect(() => {
    getProdutcts();
  }, [products]);
  
  const handleModal = () => {
  setActiveModal(true);
  };
  
  //Filtrar para la búsqueda.
  const printProductList = () => {
    const filteredProducts = products.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    return filteredProducts.map(item => (
      <ProductsList
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
  
  return (
  <>
      <Offer/>
      {activeModal && <Modal editId={editId} handleModal={setActiveModal} /> }
      <section className={`product-list-wrapper theme-${toggleTheme}`}>
          {printProductList()}
      {adminAuth && <button className='addProductAdminButton' onClick={handleModal} > + </button>}
      </section>
        
  </>

  );
};

export default Main;
