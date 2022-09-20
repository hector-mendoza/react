import React from 'react';
import logo from './logo-placeholder.svg';
import './Logo.css';

const Logo = () => {
    return (
        <div className='logo'>
            <img src={logo} alt='Random Emoji' />
        </div>
    );
}

export default Logo;