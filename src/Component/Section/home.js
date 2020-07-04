import React from 'react';
import Img from '../../Webroot/images/logo1.jpg';

const Home = () => {
    return (
            <section id="home" class="main">
                <div class="spotlight">
                    <div class="content">
                        <header class="major">
                            <h2>Engenheira de Software</h2>
                        </header>
                        <p>Formanda em Análise e Desenvolvimento de Sistemas, atualmente no último período, pelo Instituto Federal de Ciência e Tecnologia de São Paulo (IFSP) no câmpus Campos do Jordão.</p>
                        <ul class="actions">
                            <li><a href="https://github.com/LilianTobace"><span class="fab fa-github info-button"></span></a></li>
                            <li><a href="https://www.linkedin.com/in/lilian-mieko-tobace-03683215b/"><span class="fab fa-linkedin-in info-button"></span></a></li>
                            <li><a href="mailto:liliantobace@yahoo.com.br"><span class="fas fa-envelope info-button"></span></a></li>
                            <li><a href="https://twitter.com/LilianTobace"><span class="fab fa-twitter info-button"></span></a></li>
                            <li><a href="https://www.facebook.com/LilianMiekoTobace/"><span class="fab fa-facebook info-button"></span></a></li>
                            <li><a href="https://www.instagram.com/liliantobace"><span class="fab fa-instagram info-button"></span></a></li>
                        </ul>
                    </div>
                    <span class="image"><img src={Img} alt="Perfil" /></span>
                </div>
            </section>

    );
}
export default Home;
