import React from 'react';
import './hero.css';
import imageHero from '../../assets/images/tablet.png';
function Hero() {
    return (
        <section className='hero container'>
            <div className='hero-content'>
                <h1>
                    L&apos;art de la connectivité
                    <span>optimisée</span>
                </h1>
                <p>
                    Innovation Numérique:
                    <b>des tablettes pour un monde connecté</b>
                </p>
                <div className='hero-btns'>
                    <button className='btn btn1'>En savoir plus</button>
                    <button className='btn btn2'>Nous contacter</button>
                </div>
            </div>
            <div className='hero-img'>
                <img
                    src={imageHero}
                    alt='image pour le hero du projet'
                />
            </div>
        </section>
    );
}
export default Hero;
