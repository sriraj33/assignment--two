
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import ContactUs from './pages/ContactUs';
import NoPage from './pages/NoPage';
import Background from './components/Background';

function App() {
  return (
    <BrowserRouter>
    <Background />
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="products" element={<Products />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
