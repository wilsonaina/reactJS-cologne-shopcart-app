import React, {useContext} from 'react';
import './Header.css';
import Nav from "../navigation/Nav";
import CartIcon from "../cart-icon-section/CartIcon";
import CartModal from "../modals/CartModal";
import {CologneSectionContext} from "../../store/cologne-section-context";

export default function Header() {
    return(
        <>
            <section className='header-section text-center py-8 leading-6'>
                <h1 className='text-4xl'>High Key Colognes</h1>
                <p>Cologne that compliments your style.</p>
                <CartModal />
                <CartIcon />
                <Nav />
            </section>
        </>
    )
}
