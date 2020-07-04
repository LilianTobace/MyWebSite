import React from 'react';

const Sobre = () => {
    return (
            <section id="sobre" class="main special">
                <header class="major">
                    <h2>Competências</h2>
                </header>
                <ul class="features">
                    <li>
                        <span class="icon solid major style1 fas fa-laptop-code"></span>
                        <h3>Desenvolvedora Web Full Stack</h3>
                        <p>Conhecimento em: <br/> PHP, JavaScript, HTML, CSS, Bootstrap, Materialize, CakePHP, NodeJS, ReactJS, SQL e MySQL.</p>
                    </li>
                    <li>
                        <span class="icon solid major style3 fas fa-terminal"></span>
                        <h3>Outras Tecnologias</h3>
                        <p>Python, C, C++ e NoSQL.</p>
                    </li>
                    <li>
                        <span class="icon major style5 far fa-file-word"></span>
                        <h3>Conhecimentos Adicionais</h3>
                        <p>Microsoft Excel, Microsoft Word e Microsoft PowerPoint.</p>
                    </li>
                </ul>
                <footer class="major">
                    <ul class="actions special">
                        <li><a href="https://github.com/LilianTobace" class="button">Veja meus projetos no GitHub</a></li>
                    </ul>
                </footer>
            </section>
    );
}
export default Sobre;
