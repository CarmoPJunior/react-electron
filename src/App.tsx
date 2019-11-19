import React from 'react';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import Aside from './components/layout/aside';
import Routes from './routes';

//import './styles.css';

const App = () =>(

  

  <React.Fragment>
    <Header />

    <Aside />

    <main className="app-main">
          
      <div className="wrapper">
        <div className="page">
          <Routes />
        </div>
      </div>

      <Footer />

    </main>
  </React.Fragment>  
  
);

export default App;



