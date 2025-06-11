
import './App.css';

import Navbar  from './component/navbar';
import HomePage from './component/HomePage';
import ProductsSection from './component/Product';
import ContactSection from './component/ContactUs'; 
import Footer from './component/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div>
<Navbar/>
<HomePage/> 
<ProductsSection />
<ContactSection/>
<Footer/>
</div>
  );     
}

export default App;
