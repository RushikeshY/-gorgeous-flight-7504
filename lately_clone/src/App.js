
import './App.css';

import {Payment} from "./pages/Payment/Payment"

import Footer from './components/Footer';
import Mainroutes from './pages/Mainroutes';
import ContentWriter from './pages/Product/ContentWriter';
import Product from './pages/Product/Product'


function App() {
  return (
    <div className="App">

       <Mainroutes/>
       <Product/>
       <Payment/>
       </div>

  );
}

export default App;
