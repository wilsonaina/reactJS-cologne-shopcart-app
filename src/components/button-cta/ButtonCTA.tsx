import React from 'react';

export default function ButtonCTA({children, clickEvent}:{children: string, clickEvent: any}) {
    return (
        <div className='button-cta'>
            <button
                onClick={clickEvent}
                className='rounded-full text-white font-medium w-full h-12 bg-indigo-950'>
                {children}
                <span className='checkmark-section'></span>
            </button>
        </div>
    )
}
