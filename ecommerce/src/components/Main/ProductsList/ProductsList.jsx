import '../../../styles/global.css';
import '../../../styles/ProductsList.css';


const ProductsList = ({...props}) => {
  console.log(props.length);
  return (
    <>
       
        <div className='product-list-card'>
          <div className='product-card-details'>
            <img src={props.img} alt={props.title} className='product-card-img'/>
            <h3>{props.title}</h3>
            <p className='product-card-description'>{props.description} </p>
          </div>
          <p className='product-card-price'>${props.price} </p>
        </div>
      
    </>
  );
};

export default ProductsList;
