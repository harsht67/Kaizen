import './App.scss';
import ProductPage from './features/Product/ProductPage';
import Shop from './features/Product/Shop';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './features/Home/Home';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="app">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/shop' element={<Shop/>} />
          <Route path='/product/:productId' element={<ProductPage/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
