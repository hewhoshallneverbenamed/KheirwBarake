import './Footer.css'
import Footerimg from '../../assets/images/logo.jpg'
import React from 'react'
import 'boxicons'
// import 'font-awesome'
// import '../../../node_modules/bootstrap/dist/css/bootstrap-grid.css'
// import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'


function Footer () {
    return(
<footer
          class="text-center text-lg-start text-dark"
          style={{backgroundColor: "#ECEFF1"}}
          >
   
    <section
             class="d-flex justify-content-between p-4 text-white"
             style={{backgroundColor: "#ECEFF1"}}
             >
     
      <div class="me-5">
        
      </div>
     

     
    </section>
   

    
    <section class="">
      <div class="container text-center text-md-start mt-5">
      
        <div class="row mt-3">
        
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          
            <h6 class="text-uppercase fw-bold">Company name</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px", backgroundColor: "#7c4dff" , height: "2px"}}
                />
            <p>
              Here you can use rows and columns to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p>
          </div>
          

          
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            
            <h6 class="text-uppercase fw-bold">Products</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px", backgroundColor: "#7c4dff" , height: "2px"}}
                />
            <p>
              <a href="#!" class="text-dark">MDBootstrap</a>
            </p>
            <p>
              <a href="#!" class="text-dark">MDWordPress</a>
            </p>
            <p>
              <a href="#!" class="text-dark">BrandFlow</a>
            </p>
            <p>
              <a href="#!" class="text-dark">Bootstrap Angular</a>
            </p>
          </div>
          

          
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
           
            <h6 class="text-uppercase fw-bold">Useful links</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px", backgroundColor: "#7c4dff" , height: "2px"}}
                />
            <p>
              <a href="#!" class="text-dark">Your Account</a>
            </p>
            <p>
              <a href="#!" class="text-dark">Become an Affiliate</a>
            </p>
            <p>
              <a href="#!" class="text-dark">Shipping Rates</a>
            </p>
            <p>
              <a href="#!" class="text-dark">Help</a>
            </p>
          </div>
         

         
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
           
            <h6 class="text-uppercase fw-bold">Contact</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px", backgroundColor: "#7c4dff" , height: "2px"}}
                />
            <p><i class="fas fa-home mr-3"></i> New York, NY 10012, US</p>
            <p><i class="fas fa-envelope mr-3"></i> info@example.com</p>
            <p><i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
            <p><i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
          </div>
          
        </div>
        
      </div>
    </section>
    

    
    <div
         class="text-center p-3"
         style={{backgroundColor: "#34495E"  }}
         >
      © 2022 Copyright:MDBootstrap.com
        
    </div>
    
  </footer>
     ) 
}

export default Footer