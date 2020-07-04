import React from 'react';
import Home from './home.js';
import Sobre from './sobre.js';
import Experiencia from './experiencia.js';
import Other from './other.js';

const Section = () => {
    return (
            
    <React.StrictMode>
        <Home />
        <Sobre />
        <Experiencia />
        <Other />
    </React.StrictMode>

    );
}
export default Section;
