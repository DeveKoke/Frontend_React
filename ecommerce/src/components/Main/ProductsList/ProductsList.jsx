// ESTILOS
import '../../../styles/global.css';
import '../../../styles/ProductsList.css';
// HOOKS
import { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext.jsx';
import { TrolleyContext } from '../../../context/TrolleyContext.jsx';

const ProductsList = ({...props}) => {
  const { toggleTheme } = useContext(ThemeContext);
  const { itemsList, setItemsList } = useContext(TrolleyContext);
  // const [selectedItem, setSelectedItem] = useState('');


  const handleItem = (itemName, itemPrice, itemImg, itemId) => {
    const itemInfo = {
          id: itemId,       
          title: itemName,
          price: itemPrice,
          img: itemImg,
         };
    setItemsList([...itemsList, itemInfo]);
    console.log(itemsList);
  }





  // const handleItem = (itemId) => {
  //   setSelectedItem(itemId);
  //   console.log(itemId);
  // }

  // useEffect(() => {
  //   for (let i = 0; i < ecommerceData.length; i++) {
  //     if (ecommerceData[i].title === selectedItem){
  //       const iteminfo = {
  //         title: ecommerceData[i].title,
  //         img: ecommerceData[i].image,
  //         price: ecommerceData[i].price
  //       }
  //       setItemsList([...itemsList, iteminfo]);
  //     }      
  //   }

  // }, [selectedItem])
  
  // console.log(itemsList);

  return (
    <>
       
        <div className= {`product-list-card product-list-card-theme${toggleTheme}`}>
          <div className='product-card-details'>
            <img src={props.img} alt={props.title} className='product-card-img'/>
            <h3>{props.title}</h3>
            <p className='product-card-description'>{props.description} </p>
          </div>
          <p className='product-card-price'>${props.price} </p>
          <button onClick={() => handleItem(props.title, props.price, props.img, props.id)}>Añadir al carrito</button>
        </div>
      
    </>
  );
};

export default ProductsList;
