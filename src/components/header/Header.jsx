import React from 'react';
import './Header.css';
export default function Header({ state }) {
    return (
        <div className='header-container'>
            <img
                src='https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png'
                alt="header-img"
                className={`${state.headerExpand ? `head-image-expanded` :`head-image-contracted`}`} />
            <h1 className={`${state.headerExpand ? `head-title-expanded` : `head-title-contracted`}`} >{state.headerTitle}</h1>
        </div>
    )
}
