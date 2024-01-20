import React, {useContext, useEffect, useRef} from 'react';
import {CologneSectionContext} from "../../store/cologne-section-context";

export default function CartModal() {
    const cartDialog = useRef<HTMLDialogElement>(null);
    const {
        cartModalActive,
        closeModal,
        shoppingCart,
    } = useContext(CologneSectionContext);

    if (cartModalActive && cartDialog.current) {
        console.log(`shop cart ${JSON.stringify(shoppingCart)}`);
        cartDialog.current.showModal();
    } else {
        cartDialog.current && cartDialog.current.close();
    }

    useEffect(() => {
        if (cartModalActive) {
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = '15px';
        }
        return () => {
            document.body.style.overflow = 'unset';
            document.body.style.paddingRight = '0px';
        };
    }, [cartModalActive]);

    return (
        <dialog className='modal-section p-4 max-w-2xl md:min-w-96 max-h-96 mx-8 md:m-auto' id="modal" ref={cartDialog}>
            <h2 className='text-xl underline font-bold'>Cart items</h2>
            <div className='modal-content content-center mt-8'>
                <ul className='list-none'>
                    {shoppingCart.map((item: any) => (
                        <li key={item.id} className='max-h-24 grid grid-cols-1 mb-8'>
                            <div className='flex flex-row'>
                                <div className='cart-img w-16'>
                                    <img src={item.image} alt={item.name}/>
                                </div>
                                <p className='text-base basis-2/4 ml-8'>{item.name}</p>
                                <p className='basis-2/4'>{item.price}</p>
                            </div>
                        </li>
                    ))}
                </ul>
                <span className='close-btn' onClick={closeModal}></span>
            </div>
        </dialog>
    )
}
