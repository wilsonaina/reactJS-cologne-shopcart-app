import React, {useContext} from 'react';
import {CologneSectionContext} from "../../store/cologne-section-context";
import './Nav.css';

export default function Nav() {
    const {mensTab, mensActiveTab, womensTab, womensActiveTab} = useContext(CologneSectionContext);

    return (
        <section className='nav-section pt-8'>
            <div className='grid grid-cols-2 divide-x'>
                <div onClick={mensTab}
                     className={`${mensActiveTab ? 'active underline' : ''} nav-item hover:bg-zinc-900 py-6 cursor-pointer`}>
                    <p className='text-md md:text-2xl'>Men's</p>
                </div>
                <div onClick={womensTab}
                     className={`${womensActiveTab ? 'active underline' : ''} nav-item hover:bg-zinc-900 py-6 cursor-pointer`}>
                    <p className='text-md md:text-2xl'>Women's</p>
                </div>
            </div>
        </section>
    )
}
