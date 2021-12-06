import './Footer.css'
import Footerimg from '../../assets/images/logo.jpg'
import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap-grid.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'


function Footer () {
    return(
      <div>  
        <footer className="footer section section-sm" >
            {/* <!-- Container Start --> */}
            <div className="footer-container">
              <div className="row">
                <div className="footer-section">
                      {/* <!-- About --> */}
                  <div className="block about ">
                        {/* <!-- footer logo --> */}
                       <img src={Footerimg} alt="" className="imge"/>
                        {/* <!-- description --> */}
                        <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                          laboris nisi ut aliquip ex ea commodo consequat.</p>
                      </div>
                    </div>
                    {/* <!-- Link list --> */}
                    <div className="footer-section">
                      <div className="block ">
                        <h4>Site Pages</h4>
                        <ul className="">
                          <li><a href="g">Boston</a></li>
                          <li><a href="#">How It works</a></li>
                          <li><a href="#">Deals & Coupons</a></li>
                          <li><a href="#">Articls & Tips</a></li>
                          <li><a href="terms-condition.html">Terms & Conditions</a></li>
                        </ul>
                      </div>
                    </div>
                    {/* <!-- Link list --> */}
                    <div className="footer-section">
                      <div className="block ">
                        <h4>Admin Pages</h4>
                        <ul className="">
                          <li><a href="category.html">Category</a></li>
                          <li><a href="single.html">Single Page</a></li>
                          <li><a href="store.html">Store Single</a></li>
                          <li><a href="single-blog.html">Single Post</a>
                          </li>
                          <li><a href="blog.html">Blog</a></li>
                        </ul>
                      </div>
                    </div>
                </div>
            </div>
        </footer>
        <footer class="footer-bottom">
        {/* <!-- Container Start --> */}
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-12">
              {/* <!-- Copyright --> */}
              <div class="copyright">
                <p>Copyright © 2022. All Rights Reserved</p>
              </div>
            </div>
            <div class="col-sm-6 col-12">
              {/* <!-- Social Icons --> */}
              <ul class="social-media-icons text-right">
                <li><a class="fa fa-facebook" href="https://www.facebook.com/themefisher" target="_blank"></a></li>
                <li><a class="fa fa-twitter" href="https://www.twitter.com/themefisher" target="_blank"></a></li>
                <li><a class="fa fa-pinterest-p" href="https://www.pinterest.com/themefisher" target="_blank"></a></li>
                <li><a class="fa fa-vimeo" href=""></a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- Container End -->*/}
      </footer>
    </div>
     ) 
}

export default Footer