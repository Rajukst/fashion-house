
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Pages/Footer/Footer';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     
     <Routes>
        <Route path="/" element={<Footer />} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
