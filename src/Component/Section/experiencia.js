import React from 'react';
import '../../Webroot/css/timeline.css';
// import Img from '../../Webroot/images/pic01.jpg'

const Experiencia = () => {
    return (
            <section id="experiencia" class="main special">
                <header class="major">
                    <h2>Experiência</h2>
                </header>

                <div class="container">
                    <div class="timeline">
                        <div class="timeline-event">
                            <div class="card timeline-content content-box">
                                <div class="card-content">
                                    <span class="card-title activator grey-text text-darken-4">2020 - Atual</span>
                                    <p><strong><a href="https://www.oceaning.com.br/">The Oceaning</a></strong></p>
                                </div>
                                <div class="card-reveal">
                                    <span class="card-title grey-text text-darken-4">Desenvolvedora Web Full Stack</span>
                                    <p>São José dos Campos - SP</p>
                                </div>
                            </div>
                            <div class="timeline-badge red white-text"><i class="fas fa-briefcase icon-color"></i></div>
                        </div>
                        <div class="timeline-event">
                            <div class="card timeline-content content-box">
                                <div class="card-content">
                                    <span class="card-title activator grey-text text-darken-4">2017 - 2020</span>
                                    <p title="Instituto Federal de São Paulo"><strong>IFSP</strong></p>
                                </div>
                                <div class="card-reveal">
                                    <span class="card-title grey-text text-darken-4">Tecnólogo em Ánalise e Desenv. de Sistemas</span>
                                    <p>Campos do Jordão - SP</p>
                                </div>
                            </div>
                            <div class="timeline-badge green white-text"><i class="activator fas fa-graduation-cap icon-color"></i></div>
                        </div>
                    </div>
                </div>           
            </section>
    );
}
export default Experiencia;
