import { useRef } from 'react';
import useProducts from '../../../customHooks/useProducts.js';
import '../../../styles/Modal.css'

const Modal = ({handleModal, editId}) => {
    const {
        createProduct,
        handleInputChange,
        editProduct,
    } = useProducts();

    // Refs para los campos de entrada del formulario
    const IdRef = useRef(null);
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const imageRef = useRef(null);
    const priceRef = useRef(null);

    // EJECUTAMOS LA FUNCIÓN PARA CREAR PRODUCTO: Usamos la info de los inputs para el nuevo producto
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
        
        handleModal(false); //Quitamos el modal
    };

    // EJECUTAMOS LA FUNCIÓN PARA EDITAR PRODUCTO
    const handleEditProduct = () => {
        // Actualizamos el estado de EditedProduct.
        const productNewData = {
            id: parseInt(IdRef.current.value),
            image: imageRef.current.value,
            title: titleRef.current.value,
            description: descriptionRef.current.value,
            price: priceRef.current.value,
        };

        // Ejecutamos la función de edición del useProducts.
        editProduct(productNewData)
        handleModal(false); //Quitamos el modal
    }
 
    return (
        <>
        <section className='modalcontainer'>
            {editId && (<> <label>Introduce el ID del producto a editar :</label>
            <input type="text" ref={IdRef} /></>)
            }

            <label>Título:</label>
            <input
                type="text"
                ref={titleRef}
                onChange={handleInputChange}
            />
            <label>Descripción:</label>
            <textarea
                ref={descriptionRef}
                rows={5}
                cols={5}
                onChange={handleInputChange}
            />
            <label>Imagen:</label>
            <input
                type="text"
                ref={imageRef}
                onChange={handleInputChange}
            />
            <label>Precio:</label>
            <input
                type="number"
                ref={priceRef}
                onChange={handleInputChange}
            />
            <button className='light-first-button' onClick={editId ? handleEditProduct : handleCreateProduct}>{editId ? '  Editar producto  ' : 'Crear producto'}</button>
        </section>
        </>
    );
};

export default Modal;

