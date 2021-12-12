import React from 'react'
import Testuser from '../../assets/images/test.jpg'                  
                
function Usernlinks() {
    return(
      <section class="dashboard section">
        {/* <!-- Container Start --> */}
        <div class="container">
          {/* <!-- Row Start --> */}
          <div class="row">
            <div class="col-lg-12">
              <div class="sidebar">
                {/* <!-- User Widget --> */}
                <div class="widget user-dashboard-profile">
                  {/* <!-- User Image --> */}
                  <div class="profile-thumb">
                    <img src={Testuser} alt="" class="rounded-circle" />
                  </div>
                  {/* <!-- User Name --> */}
                  <h5 class="text-center">Shakib</h5>
                  <p>Joined February 06, 2017</p>
                  <a href="user-profile.html" class="btn btn-main-sm">Edit Profile</a>
                </div>
                {/* <!-- Dashboard Links --> */}
                <div class="widget user-dashboard-menu">
                  <ul>
                    <li class="active"><a href="dashboard-my-ads.html"><i class="fa fa-user"></i> My Ads</a></li>
                    <li><a href="dashboard-favourite-ads.html"><i class="fa fa-bookmark-o"></i> Favourite Ads <span>5</span></a></li>
                    <li><a href="dashboard-archived-ads.html"><i class="fa fa-file-archive-o"></i>Archived Ads <span>12</span></a></li>
                    <li><a href="dashboard-pending-ads.html"><i class="fa fa-bolt"></i> Pending Approval<span>23</span></a></li>
                    <li><a href="#"><i class="fa fa-cog"></i> Logout</a></li>
                    <li><a href="" data-toggle="modal" data-target="#deleteaccount"><i class="fa fa-power-off"></i>Delete
                        Account</a></li>
                  </ul>
                </div>
              </div>
                {/* <!-- delete-account modal --> */}
                						  {/* <!-- delete account popup modal start--> */}
                      {/* <!-- Modal --> */}
              <div class="modal fade" id="deleteaccount" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-header border-bottom-0">
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body text-center">
                      <img src="images/account/Account1.png" class="img-fluid mb-2" alt="" />
                      <h6 class="py-2">Are you sure you want to delete your account?</h6>
                      <p>Do you really want to delete these records? This process cannot be undone.</p>
                      <textarea name="message" id="" cols="40" rows="4" class="w-100 rounded"></textarea>
                    </div>
                    <div class="modal-footer border-top-0 mb-3 mx-5 justify-content-lg-between justify-content-center">
                      <button type="button" class="btn btn-primary" data-dismiss="modal">Cancel</button>
                      <button type="button" class="btn btn-danger">Delete</button>
                    </div>
                  </div>
                </div>
              </div>
                      {/* <!-- delete account popup modal end--> */}
                {/* <!-- delete-account modal --> */}
            </div>
          </div>
            
        </div>   
      </section>
    )
}

export default Usernlinks;