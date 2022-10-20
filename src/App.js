
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddToCart from './Pages/AddToCart/AddToCart';
import Footer from './Pages/Footer/Footer';
import MyHeader from './Pages/Header/MyHeader';
import Home from './Pages/HomePage/Home/Home';
import ProductsList from './Pages/HomePage/Products/ProductsList';
import List from './Pages/List/List';
import Login from './Pages/Login/Login';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Registration from './Pages/Registration/Registration';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <MyHeader></MyHeader>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddToCart />} />
        <Route path="/products" element={<ProductsList />} />
        <Route
        path="/list"
        element={
          <PrivateRoute>
            <List/>
          </PrivateRoute>
        }
      />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
      <Footer></Footer>
     </BrowserRouter>
    </div>
  );
}

export default App;
