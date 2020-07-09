import React from 'react';
import './App.css';
import Header from '../Component/Header/Header';
import Menu from '../Component/Menu/menu';
import Main from '../Component/Main/main';
import Footer from '../Component/Footer/footer';

function App() {
  return (
    <body class="is-preload">
      <div id="wrapper">
        <Header />
        <Menu />
        <Main />
        <Footer />
      </div>
    </body>
  );
}

export default App;
