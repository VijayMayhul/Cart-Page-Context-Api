import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './App.css'
import ContextComponent from './ContextComponent';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ProductList from './Components/ProductList';

function App() {
 

  return (
    <>
    <ContextComponent>
      <Header/>
      <ProductList/>
    </ContextComponent>
    <Footer/>
    </>
  )
}

export default App
