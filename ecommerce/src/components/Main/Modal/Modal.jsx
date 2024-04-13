import { useRef } from 'react';
import useProducts from '../../../customHooks/useProducts.js';
import '../../../styles/Modal.css'

const Modal = ({handleModal}) => {
    const {
        createProduct,
        handleInputChange,
    } = useProducts();

    // Refs para los campos de entrada del formulario
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const imageRef = useRef(null);
    const priceRef = useRef(null);

    // Usamos la info de los inputs para el nuevo producto
    const handleCreateProduct = () => {
        const newProductData = {
            title: titleRef.current.value,
            description: descriptionRef.current.value,
            image: imageRef.current.value,
            price: priceRef.current.value,
        };

        // Llamamos a la función de useProducts para crear un nuevo producto
        createProduct(newProductData);

        // Limpiamos los campos del formulario después de crear el producto
        titleRef.current.value = '';
        descriptionRef.current.value = '';
        imageRef.current.value = '';
        priceRef.current.value = '';
        
        handleModal(false);
    };

    return (
        <>
        <section className='modalcontainer'>
            <label>Title:</label>
            <input
                type="text"
                ref={titleRef}
                onChange={handleInputChange}
            />
            <label>Description:</label>
            <textarea
                ref={descriptionRef}
                rows={5}
                cols={5}
                onChange={handleInputChange}
            />
            <label>Image:</label>
            <input
                type="text"
                ref={imageRef}
                onChange={handleInputChange}
            />
            <label>Price:</label>
            <input
                type="number"
                ref={priceRef}
                onChange={handleInputChange}
            />
            <button className='light-first-button' onClick={handleCreateProduct}>Create Product</button>
        </section>
        </>
    );
};

export default Modal;

