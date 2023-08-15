import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'; 
import './App.css';
import {Navbar} from "./components/navbar";
import {Shop} from "./pages/shop/shop";
import {Cart} from "./pages/cart/cart";
import { ProductDetails } from './pages/productDetails';
import { ShopContextProvider } from './context/shop-context';
import {Confirmation} from "./pages/Confirmation";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>} />
          <Route path='/cart'  element={<Cart/>}/>
          <Route path="/productDetails/:id" element={<ProductDetails/>} />
          <Route path = "/confirmation" element={<Confirmation/>}></Route>
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
};

export default App;
