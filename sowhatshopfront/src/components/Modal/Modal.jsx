import React, { useEffect, useRef } from 'react';
import { AiOutlineClose }  from 'react-icons/ai';
import './Modal.css';

function Modal({isOpen, setModalOpen, children}) {
    const modalRef = useRef();

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setModalOpen();
        }
    };

    const handleKeyDown = (event) => {
        if (event.keyCode === 27) { 
            setModalOpen();
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('keydown', handleKeyDown);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        }
    
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, setModalOpen]);

    if(isOpen){
        return (  
            <div className="background-style">
                <div className="modal-style">
                    <div ref={modalRef} className="modal-content">{children}</div>
                    <button 
                        className="close-button" 
                        onClick={setModalOpen}>
                            <AiOutlineClose/>
                    </button>
                </div>    
            </div>
        );
    }
    return null
}

export default Modal;