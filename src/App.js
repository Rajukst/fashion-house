
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/HomePage/Home/Home';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     
     <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer></Footer>
     </BrowserRouter>
    </div>
  );
}

export default App;
