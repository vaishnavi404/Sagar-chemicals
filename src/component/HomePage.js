
import homeImage from "../ProductsImages/chemical_shop_copy-removebg-preview.png"
function HomePage() {
  
    return (
    
      <section id="HomePage" className="hero bg-light py-5 text-center full-width-section grad">
          
          <h3>About us</h3>
        <div className="container homepg ">
     
          <div className="home_desc">

          <p className="hero-subtitle">
          Sagar Chemicals, which is engaged in the manufacturing of global standard cleaning chemicals. Established almost a decade ago through entrepreneurial spirit, it soon achieved a respectable business position in India through professionalism at every level of operations. We manufacture innovative and high-quality products. Our products are consumed by a large number of industry sectors, the main ones being commercial, industrial, and retail laundries, hotels, restaurants, and hospitals. We have products for various applications within each of these industry segments. Our expansive and multi-faceted manufacturing facilities provide us with great flexibility in our operations, making our product range and business operations completely customer-driven. Our capabilities in handling a wide range of chemicals and our vast product range mean that our customers get almost all their requirements from one place.
          </p>
          </div>
          <div className="home_image gradient-background">
          <img src={homeImage} alt="About Us" className="img-fluid image-with-gradient" />
          </div>
          </div>
       
          
     
      </section>
    
    );
  };
  export default HomePage;