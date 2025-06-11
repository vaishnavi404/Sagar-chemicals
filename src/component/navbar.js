import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import broucherpdfMarathi from "../ProductsImages/MarathiBrochure.pdf";
import broucherpdfEnglish from "../ProductsImages/BrochurePdfEnglish.pdf"
import logo from "../favicon.png";
function BasicExample() {
    return (
        <header className="bg-dark shadow-sm">
        <nav className="navbar navbar-expand-lg  bg-light grad">
          <div className="container navbarbg">
            <a className="navbar-brand d-flex align-items-center" href="https://www.tidywash.org/">
            <div className="logo-container">
                            <img 
                                src={logo}
                                className="img-fluid" alt=""
                            />
                        </div>
              <span className="brand-name ms-2">Sagar Chemicals</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ filter: "invert(1)" }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item ms-3">
                  <a className="nav-link" href="#HomePage">
                  Home
                  </a>
                </li>
                <li className="nav-item ms-3">
                  <a className="nav-link" href="#Product">
                    Products
                  </a>
                </li>
               {/* <li className="nav-item">
                  <a className="nav-link" href={broucherpdf}
              download="SagarChemicals_Brochure.pdf">
                    Brochure
                  </a>
                </li> */}
                 <li className="nav-item dropdown ms-3 ">
                <button 
                  className="nav-link dropdown-toggle btn btn-link"
               
                  id="brochureDropdown"
                
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Brochure
                </button>
                <ul className="dropdown-menu custom-dropdown" aria-labelledby="brochureDropdown">
                  <li>
                    <a className="dropdown-item" href={broucherpdfMarathi} download="SagarChemicals_Marathi.pdf">
                      Marathi Brochure
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href={broucherpdfEnglish} download="SagarChemicals_English.pdf">
                      English Brochure
                    </a>
                  </li>
                </ul>
              </li>
                <li className="nav-item ms-3">
                  <a className="nav-link" href="#contact">
                    Contact Us
                  </a>
                </li>
              </ul>
              <div className="d-flex align-items-center">
              <a href="tel:+919769900999" className="phone-link">
            +91- 9769900999
          </a>
              </div>
            </div>
           
          </div>
          
        </nav>
      </header>
    );
}

export default BasicExample;