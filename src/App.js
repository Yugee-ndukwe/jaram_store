
// import './App.css';
import { MyNav } from './Components/Navbar/navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Shop } from './Pages/shop';
import { ShopCategory } from './Pages/shopCategory';
import { Product } from './Pages/product';
import { Cart } from './Pages/cart';
import { SignUp } from './Pages/signup';
import Footer from './Components/Footer/footer';

function App() {
  return (
    <>
    <BrowserRouter>
    <MyNav/>
    <Routes>
      <Route path='/' element= {<Shop/>}/>
      <Route path='/grains' element= {<ShopCategory category = "grains"/>}/>
      <Route path='/tubers' element= {<ShopCategory category = "tubers"/>}/>
      <Route path='/driedFish' element= {<ShopCategory category = "driedFish"/>}/>
      <Route path='/oil' element= {<ShopCategory category = "oil"/>}/>
      <Route path='/product' element= {<Product/>}>
      <Route path=':productId' element= {<Product/>}/>
      </Route>
      <Route path='/cart' element= {<Cart/>}/>
      <Route path='/signup' element= {<SignUp/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
