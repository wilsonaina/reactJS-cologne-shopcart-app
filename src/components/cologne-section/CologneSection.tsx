import React, {useContext} from 'react';
import Product from "../product/Product";
import {COLOGNE_PRODUCTS_MEN} from "../../data/CologneProducts";
import {COLOGNE_PRODUCTS_WOMEN} from "../../data/CologneProducts";
import {CologneSectionContext} from "../../store/cologne-section-context";

export default function CologneSection() {
    const {mensActiveTab} = useContext(CologneSectionContext);

    return (
        <section className='cologne-section px-8 md:px-18 lg:px-28'>
            <ul className='grid grid-cols-2 md:grid-cols-4 gap-3'>
                {mensActiveTab ? <Product
                    products={COLOGNE_PRODUCTS_MEN}
                     /> :
                    <Product
                    products={COLOGNE_PRODUCTS_WOMEN}
                    />
                }
                </ul>
        </section>
    )
}
