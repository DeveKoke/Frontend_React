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
  const {products,
    editProduct,
    deleteProduct,
    createProduct,
    handleEditProductDetails,
    handleSave,
    handleInputChange,
    getProdutcts,} = useProducts();
  const { toggleTheme } = useContext(ThemeContext);
  const [activeEditionModal, setActiveEditionModal] = useState(false);
  const {adminAuth} = useAuth();

    useEffect(() => {
    getProdutcts();
  }, [products]);
  
  const handleModal = () => {
  setActiveEditionModal(true);
  }
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
        // handleModal={handleModal}
        />
    )) ;
  };
  
  return (
<>
    <Offer/>
    {activeEditionModal && <Modal  handleModal={setActiveEditionModal} /> }
    <section className={`product-list-wrapper theme-${toggleTheme}`}>
        {printProductList()}
    {adminAuth && <button className='addProductAdminButton' onClick={handleModal} > + </button>}
    </section>
      
</>

  );
};

export default Main;
