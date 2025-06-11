import React, { useState,useEffect } from "react";
import xlPlus400 from "../ProductsImages/LiquidLaundryDetergent.png";
import XL300 from "../ProductsImages/LAUNDRY_LIQUID_DETERGENT_XL300 .jpg"
import FabricSoftner from "../ProductsImages/FabricSoftner.png";
import BrightberLiquid  from "../ProductsImages/OpticalBrightnerLiquidPlus.png";
import  ColorFabricBleach from "../ProductsImages/ColorFabricBleach.jpg";
import  WhiteFabricBleach from "../ProductsImages/liquidWhiteFabricBleach.png";
import  fabricRustRemover from "../ProductsImages/FabricRustRemover.png";
import  tinopalAdvanced from "../ProductsImages/tinopalAdvanced.jpg";
import  MaticDetergentLiquid from "../ProductsImages/MaticDetergentLiquid.png";

function ProductsSection  (){
   const products = [
    {
      image: FabricSoftner,
      title: "Fabric Softner",
      //  Subtitle:"",
      description:
        "fabric softener is an elastic softener for all types of cotton and Florida high quality conditioning. It is formulated with properties that work together for all functions in a single washing process. fabric softener has the best after wash effect, which makes the product clean, gorgeous and fresh.",
        packages:["5 Ltr, 30 Ltr"],
        specialFeture:["Very positive nacre in the product.", "High concentration.","Anti static effect.","Pleasant aroma."] 
    },
    {
      image: WhiteFabricBleach,
      title: "Liquid white Fabric Bleach",
      // Subtitle:"White Fabric Bleach",
      description: "LB 40 white fabric liquid bleach is liquid chlorine bleach for safe yet effective bleaching and linen disinfection, which can be found in hospital and institutional work.LB 40 bleach contains 10 12 % active chlorine bleach which helps to remove the finest persistent stains without damaging used industrial Laundry home care Due to the high stability of the bleaching agent no additional dosage is required. Thus damage to fabrics can be prevented.",
    packages:["1 kg, 5 kg, 50kg"],
    specialFeture:[] 
    },
    {
      image: ColorFabricBleach,
      title: "Liquid Color Fabric Bleach ",
      //  Subtitle:"xlPlus400 Heavy Duty Liquid Detergent",
      description:
        "LB 30 colour fabric bleach is a powerful concentrated product containing 40% oxygen release agent to remove stains on all washable stains. it is highly effective in the removal of other temperature stains such as tea, red wine, food or food. lb30  can be safely used in the use of cleaning products. it is used laundry",
        packages:["5 kg, 30kg"],
        specialFeture:["POSITIVE EXTREMELY RESULTS, SUITABLE FOR ALL TYPES OF WATER RESERVES, WASHING TEMPERATURES AND PORTFOLIO.","EASILY WATER RESTRICTED."] 
    },
    {
      image: BrightberLiquid,
      title: "Optical Brightner Liquid plus",
      //  Subtitle:"",
      description:
        "BL-20 Enhance the brightness of your fabrics with our Optical Brightener Liquid in a convenient  This product is designed to remove dullness and yellowing, giving your clothes a fresh and vibrant look. Ideal for use in laundry detergents or fabric softeners, our Optical Brightener Liquid is easy to use and highly effective.",
         packages:["5 kg, 30kg"],
        specialFeture:[] 
    },
    {
      image: xlPlus400,
      title: "Laundry Liquid Detergent",
      // Subtitle:"xlPlus400 Heavy Duty Liquid Detergent",
      description:
        "XL-400 is a concentrated liquid laundry booster for high performance emulsification of fats, oils, grease stains etc. for institutional and commercial laundries. It is effective on all types of fabrics including silk and wool. Formulated as a neutral liquid, it is safe to use in washing operations and does not damage fabrics. \n  XL-400 is added as a reinforcing chemical to prewash or main washing operations for maximum stain removal.",
         packages:["5 kg, 25kg"],
     specialFeture:["Ease in removal of grease, oil and fat stains."," Effective in cold or hot application."] 
    },
    {
      image: XL300,
      title: "XL-300 Detergent Liquid",
      // Subtitle:"Heavy Duty Liquid Detergent",
      description:
        "XL-300 Detergent is a highly concentrated heavy-duty liquid detergent used to clean all types of dirt. Formulated using a selection of high quality ingredients suitable for use on all types of fabrics and at all temperature ranges. Exceptionally high performance can be achieved with each use, with no long-term effects of soil re-deposition and crazing. XL-300 Detergent has been developed to remove even the most stubborn dirt completely and quickly. The low foaming property complements the optimum chemical and mechanical action for laundry. This combination of actions thus results in exceptionally high standards of cleaning.",
         packages:["5 Ltr, 30Ltr"],
        specialFeture:["Anti-soil re-deposition agent for hassle-free", "Good wetting surfactants.","Low foaming results in ease of use, and there is no fear of chemical spillage in the washing machine.","Contains special optical brighteners for exceptional whiteness on polyester/cotton fabrics"]   
    },
    {
      image: fabricRustRemover,
      title: "Fabric Rust Remover",
      // Subtitle:"Heavy Duty Liquid Detergent",
      description:
        "Our Fabric Rust Remover in a 5 kg package is a powerful solution for removing stubborn rust stains from all types of fabric. Whether you're dealing with clothing, upholstery, or linens, this product is designed to effectively target and eliminate rust, restoring your fabrics to their original condition. Save time and effort with this convenient and reliable rust remover.",
         packages:["200ml, 1Ltr, 5Ltr"],
        specialFeture:[]   
    },
    {
      image: tinopalAdvanced,
      title: "Tinopal optical Brightner",
      // Subtitle:"Heavy Duty Liquid Detergent",
      description:
        "Tinopal optical Brightner Enhance the brightness of your fabrics with our Optical Brightener Liquid in a convenient  This product is designed to remove dullness and yellowing, giving your clothes a fresh and vibrant look. Ideal for use in laundry detergents or fabric softeners, our Optical Brightener Liquid is easy to use and highly effective.",
        packages:["1 kg"],
        specialFeture:[]   
    },
    {
      image: MaticDetergentLiquid,
      title: "Matic Detergent Liquid",
      // Subtitle:"Heavy Duty Liquid Detergent",
      description:
        "Designed for the modern laundry,XL100 Matic Liquid delivers superior performance with  technology that removes tough, dry stains in a single wash. Its remarkable performance and machine expertise is backed by top washing machine brands across the globe",
        packages:["1Ltr"],
        specialFeture:[]   
    }
  ];
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        closePopup();
      }
    };
    window.addEventListener("keydown", handleEsc);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);
  const [popupProduct, setPopupProduct] = useState(null);

  const openPopup = (product) => {
    setPopupProduct(product);
    window.history.pushState({ popup: true }, ""); // Add a history state
  };

  const closePopup = () => {
    setPopupProduct(null);
    if (window.history.state?.popup) {
      window.history.back(); // Remove the popup state
    }
  };
  // const [expanded, setExpanded] = useState(products.map(() => false));

  // const toggleReadMore = (index) => {
  //   setExpanded((prevState) =>
  //     prevState.map((item, i) => (i === index ? !item : item))
  //   );
  // }; 

    return (
    
    <section id="Product" className="products py-4">
  <div className="container">
    <h3 className="text-center mb-4 ">Our Products</h3>
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 prod">
      {products.map((product, index) => (
        <div className="col" key={index} onClick={() => openPopup(product)}>
          <div className="card product-card">
            <div className="embed-responsive embed-responsive-16by9">
              <img
                src={product.image}
                alt={product.title}
                className="box card-img-top embed-responsive-item"
              />
            </div>
            <div className="card-body grad">
              <h5 className="card-title">{product.title}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  {/* Popup remains the same */}
  {popupProduct && (
    <div className="popup-overlay" onClick={closePopup}>
      <div
        className="popup-card"
        onClick={(e) => e.stopPropagation()} // Prevent closing on inner click
      >
        <button className="close-btn" onClick={closePopup}>
        
        </button>
        <div className="popup-image">
          <img src={popupProduct.image} alt={popupProduct.title} />
        </div>
        <div className="popup-content">
          <h2>{popupProduct.title}</h2>
          <h6 className="package">Packages: {popupProduct.packages}</h6> 
          <p >{popupProduct.description}</p>
         
          {popupProduct.specialFeture.length > 0 && (
             <ul className="special-features">
            <h6 >Special Feature</h6>{popupProduct.specialFeture.map((feature, index) => (
                <li key={index}>{feature}</li>
               
              ))}
              
            </ul>
               )}
           
           
              
        </div>
      </div>
    </div>
  )}
</section>

    
  );
};

export default ProductsSection;