import './App.css';
import Product from './pages/Product';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="App">
      <Register />
      <hr/><br />
      <Login />
      <hr/><br />
      <Home />
      <hr/><br />
      <Product />
      <hr/><br />
      <ProductList />
      <hr/><br />
      <Cart />
      <hr/><br />
    </div>
  );
}

export default App;
