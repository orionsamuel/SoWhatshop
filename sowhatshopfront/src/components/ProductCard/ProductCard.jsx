import React, { useState, useContext } from 'react';
import propTypes from 'prop-types';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';
import Modal from '../Modal/Modal';
import { BsFillCartPlusFill } from 'react-icons/bs';
import './ProductCard.css';

function ProductCard({data}) {
    
    const {title, thumbnail, price} = data;
    const { cartItems, setCartItems } = useContext(AppContext);
    const [openModal, setOpenModal] = useState(false);
    const [imagemWidth, setImagemWidth] = useState(0);
    const [imagemHeight, setImagemHeight] = useState(0);

    const handleImageLoad = (event) => {
        const { naturalWidth, naturalHeight } = event.target;
        setImagemWidth(naturalWidth);
        setImagemHeight(naturalHeight);
    };

    const handleAddCart = () => setCartItems([ ...cartItems, data ]);

    return (  
        <section className="product-card">
            <img 
                src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} 
                alt="product" 
                className="card__image"
                onClick={() => setOpenModal(true)}
            />

            <Modal
                isOpen={openModal}
                setModalOpen = {() => setOpenModal(!openModal)}
            >
                <img
                    src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} 
                    alt="imagem do produto"
                    onLoad={handleImageLoad}
                    style={{ width: imagemWidth, height: imagemHeight }}
                    className="cart-item-image"
                />
                <p>Descrição do produto</p>
            </Modal>

            <div className="card__infos">
                <h2 className="card__price">{formatCurrency(price, 'BRL')}</h2>
                <h2 className="card__title">{title}</h2>
            </div>

            <button 
                type="button" 
                className="button__add-cart" 
                onClick={ handleAddCart }
            >
                <BsFillCartPlusFill/>
            </button>
        </section>
    );
}

export default ProductCard;

ProductCard.propTypes = {
    data: propTypes.shape({}),
}.isRequired;