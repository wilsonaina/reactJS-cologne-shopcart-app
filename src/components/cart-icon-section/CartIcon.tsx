import React, {useContext} from 'react'
import {CologneSectionContext} from "../../store/cologne-section-context";

export default function CartIcon() {
    const {initCartModal} = useContext(CologneSectionContext);

    return (
        <section onClick={initCartModal} className='cart-icon-section absolute top-14 right-0 md:right-16'>
            <span className='cart-icon'></span>
        </section>
    )
}
