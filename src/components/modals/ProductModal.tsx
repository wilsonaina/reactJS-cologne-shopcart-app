import React, {useContext, useEffect, useRef} from 'react';
import {CologneSectionContext} from "../../store/cologne-section-context";
import './ProductModal.css';
import ButtonCTA from "../button-cta/ButtonCTA";

export default function ProductModal({data}: { data: any }) {
    const dialog = useRef<HTMLDialogElement>(null);
    const {
        modalActive,
        modalProductDetails,
        closeModal,
        addProductToCart
    } = useContext(CologneSectionContext);

    if (modalActive && dialog.current) {
        dialog.current.showModal();
    } else {
        dialog.current && dialog.current.close();
    }

    useEffect(() => {
        if (modalActive) {
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = '15px';
        }
        return () => {
            document.body.style.overflow = 'unset';
            document.body.style.paddingRight = '0px';
        };
    }, [modalActive]);

    return (
        <dialog className='modal-section p-4 max-w-5xl mx-8 md:m-auto' id="modal" ref={dialog}>
            <div className='modal-content grid grid-cols-4 gap-6 content-center'>
                <div className='img-section col-span-2 flex items-center'>
                    <img src={modalProductDetails.image} alt={modalProductDetails.name}/>
                </div>
                <div className='detail-section col-span-2'>
                    <h2 className='pt-12 leading-8'>{modalProductDetails.name}</h2>
                    <p className='text-xl'>{modalProductDetails.price}</p>
                    <p className='text-sm'>{modalProductDetails.description}</p>

                    <section className='add-to-cart-secion grid grid-cols-1 md:grid-cols-2 gap-4 mt-12'>
                        <ButtonCTA clickEvent={() => addProductToCart(modalProductDetails)}>Add To Cart</ButtonCTA>
                        <ButtonCTA clickEvent={null}>Save As Favorite</ButtonCTA>
                    </section>
                </div>
                <span className='close-btn' onClick={closeModal}></span>
            </div>
        </dialog>
    )
}
