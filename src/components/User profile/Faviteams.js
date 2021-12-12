import React from 'react'
import Testprod from '../../assets/images/products-1.jpg'
import Pagination from '../User profile/Pagination'
function Faviteams() {
    return(
      <section class="dashboard section">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 "> 
                <div class="widget dashboard-container my-adslist">
                  <h3 class="widget-header">My Ads</h3>
                  <table class="table table-responsive product-dashboard-table">
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Product Title</th>
                        <th class="text-center">Category</th>
                        <th class="text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>

                        <td class="product-thumb">
                          <img width="80px" height="auto" src={Testprod} alt="image description" /></td>
                        <td class="product-details">
                          <h3 class="title">Macbook Pro 15inch</h3>
                          <span class="add-id"><strong>Ad ID:</strong> ng3D5hAMHPajQrM</span>
                          <span><strong>Posted on: </strong><time>Jun 27, 2017</time> </span>
                          <span class="status active"><strong>Status</strong>Active</span>
                          <span class="location"><strong>Location</strong>Dhaka,Bangladesh</span>
                        </td>
                        <td class="product-category"><span class="categories">Laptops</span></td>
                        <td class="action" data-title="Action">
                          <div class="">
                            <ul class="list-inline justify-content-center">
                              <li class="list-inline-item">
                                <a data-toggle="tooltip" data-placement="top" title="view" class="view" href="category.html">
                                  <i class="fa fa-eye"></i>
                                </a>
                              </li>
                              <li class="list-inline-item">
                                <a class="edit" data-toggle="tooltip" data-placement="top" title="Edit" href="">
                                  <i class="fa fa-pencil"></i>
                                </a>
                              </li>
                              <li class="list-inline-item">
                                <a class="delete" data-toggle="tooltip" data-placement="top" title="Delete" href="">
                                  <i class="fa fa-trash"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>

                        <td class="product-thumb">
                          <img width="80px" height="auto" src={Testprod} alt="image description" /></td>
                        <td class="product-details">
                          <h3 class="title">Study Table Combo</h3>
                          <span class="add-id"><strong>Ad ID:</strong> ng3D5hAMHPajQrM</span>
                          <span><strong>Posted on: </strong><time>Feb 12, 2017</time> </span>
                          <span class="status active"><strong>Status</strong>Active</span>
                          <span class="location"><strong>Location</strong>USA</span>
                        </td>
                        <td class="product-category"><span class="categories">Laptops</span></td>
                        <td class="action" data-title="Action">
                          <div class="">
                            <ul class="list-inline justify-content-center">
                              <li class="list-inline-item">
                                <a data-toggle="tooltip" data-placement="top" title="View" class="view" href="category.html">
                                  <i class="fa fa-eye"></i>
                                </a>
                              </li>
                              <li class="list-inline-item">
                                <a class="edit" data-toggle="tooltip" data-placement="top" title="Edit" href="">
                                  <i class="fa fa-pencil"></i>
                                </a>
                              </li>
                              <li class="list-inline-item">
                                <a class="delete" data-toggle="tooltip" data-placement="top" title="Delete" href="">
                                  <i class="fa fa-trash"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="product-thumb">
                          <img width="80px" height="auto" src={Testprod} alt="image description" /></td>
                        <td class="product-details">
                          <h3 class="title">Macbook Pro 15inch</h3>
                          <span class="add-id"><strong>Ad ID:</strong> ng3D5hAMHPajQrM</span>
                          <span><strong>Posted on: </strong><time>Jun 27, 2017</time> </span>
                          <span class="status active"><strong>Status</strong>Active</span>
                          <span class="location"><strong>Location</strong>Dhaka,Bangladesh</span>
                        </td>
                        <td class="product-category"><span class="categories">Laptops</span></td>
                        <td class="action" data-title="Action">
                          <div class="">
                            <ul class="list-inline justify-content-center">
                              <li class="list-inline-item">
                                <a data-toggle="tooltip" data-placement="top" title="View" class="view" href="category.html">
                                  <i class="fa fa-eye"></i>
                                </a>
                              </li>
                              <li class="list-inline-item">
                                <a class="edit" data-toggle="tooltip" data-placement="top" title="Edit" href="">
                                  <i class="fa fa-pencil"></i>
                                </a>
                              </li>
                              <li class="list-inline-item">
                                <a class="delete" data-toggle="tooltip" data-placement="top" title="Delete" href="">
                                  <i class="fa fa-trash"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>

                        <td class="product-thumb">
                          <img width="80px" height="auto" src={Testprod} alt="image description" /></td>
                        <td class="product-details">
                          <h3 class="title">Macbook Pro 15inch</h3>
                          <span class="add-id"><strong>Ad ID:</strong> ng3D5hAMHPajQrM</span>
                          <span><strong>Posted on: </strong><time>Jun 27, 2017</time> </span>
                          <span class="status active"><strong>Status</strong>Active</span>
                          <span class="location"><strong>Location</strong>Dhaka,Bangladesh</span>
                        </td>
                        <td class="product-category"><span class="categories">Laptops</span></td>
                        <td class="action" data-title="Action">
                          <div class="">
                            <ul class="list-inline justify-content-center">
                              <li class="list-inline-item">
                                <a data-toggle="tooltip" data-placement="top" title="View" class="view" href="category.html">
                                  <i class="fa fa-eye"></i>
                                </a>
                              </li>
                              <li class="list-inline-item">
                                <a class="edit" data-toggle="tooltip" data-placement="top" title="Edit" href="">
                                  <i class="fa fa-pencil"></i>
                                </a>
                              </li>
                              <li class="list-inline-item">
                                <a class="delete" data-toggle="tooltip" data-placement="top" title="Delete" href="">
                                  <i class="fa fa-trash"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>

                        <td class="product-thumb">
                          <img width="80px" height="auto" src={Testprod} alt="image description" /></td>
                        <td class="product-details">
                          <h3 class="title">Macbook Pro 15inch</h3>
                          <span class="add-id"><strong>Ad ID:</strong> ng3D5hAMHPajQrM</span>
                          <span><strong>Posted on: </strong><time>Jun 27, 2017</time> </span>
                          <span class="status active"><strong>Status</strong>Active</span>
                          <span class="location"><strong>Location</strong>Dhaka,Bangladesh</span>
                        </td>
                        <td class="product-category"><span class="categories">Laptops</span></td>
                        <td class="action" data-title="Action">
                          <div class="">
                            <ul class="list-inline justify-content-center">
                              <li class="list-inline-item">
                                <a href="category.html" data-toggle="tooltip" data-placement="top" title="View" class="view">
                                  <i class="fa fa-eye"></i>
                                </a>
                              </li>
                              <li class="list-inline-item">
                                <a class="edit" data-toggle="tooltip" data-placement="top" title="Edit" href="">
                                  <i class="fa fa-pencil"></i>
                                </a>
                              </li>
                              <li class="list-inline-item">
                                <a class="delete" data-toggle="tooltip" data-placement="top" title="Delete" href="">
                                  <i class="fa fa-trash"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <Pagination />
                </div>    
              </div>
            </div>
          </div>
        </section>    
    )
}

export default Faviteams;