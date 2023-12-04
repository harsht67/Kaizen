import './App.scss';
import ProductPage from './ProductPage';
import Shop from './Shop';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Shop/>} />
          <Route path='/product/:productId' element={<ProductPage/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
