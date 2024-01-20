import React, {useContext} from 'react';
import {CologneSectionContext} from "../../store/cologne-section-context";
import ProductModal from "../modals/ProductModal";

export default function Product({products}: {products: any}) {
    const {initProductModal} = useContext(CologneSectionContext);
    let modalProduct: {} = {};

    return (
        <>
            <ProductModal data={modalProduct}/>
            {products.map((product: any) => (
                    <li
                        onClick={()=>initProductModal(product)}
                        className='product p-4 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-zinc-800'
                        key={product.id}>
                        <div className='p-3 bg-white rounded-md'>
                            <img src={product.image} alt={product.name}/>
                        </div>
                            <h3 className='text-xl py-3'>{product.name}</h3>
                            <p className='pb-2'>${product.price}</p>
                            <p className='text-xs'>{product.description}</p>
                    </li>
                )
            )}
        </>
    )
}
