import React, { useState } from 'react';
import Logo from '../../assets/images/logo.png';
import './naviguation.css';

function Naviguation() {
    const [isActive, setIsActive] = useState(false);

    const handleBurgerClick = () => {
        setIsActive(!isActive);
    };

    return (
        <nav>
            <a
                href='#'
                className='logo'
            >
                <img
                    src={Logo}
                    alt='logo de la marque'
                />
            </a>
            <ul className={`naviguation ${!isActive ? 'active' : ''}`}>
                <li>
                    <a
                        href='#'
                        className='active'
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a href='#'>Produits</a>
                </li>
                <li>
                    <a href='#'>A propos</a>
                </li>
                <li>
                    <a href='#'>Contact</a>
                </li>
            </ul>
            <div className='nav-icons'>
                <div className='icon-user'>
                    <ion-icon name='person'></ion-icon>
                </div>
                <div
                    id='burger-menu'
                    onClick={handleBurgerClick}
                >
                    <ion-icon name='menu-outline'></ion-icon>
                </div>
            </div>
        </nav>
    );
}
export default Naviguation;
