import './Hero.css'
import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap-grid.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css.map'  

function Hero ()  {
    return(
        <section class="hero-area bg-1 text-center overly">
        	{/* <!-- Container Start --> */}
        	<div class="container">
        		<div class="row">
        			<div class="col-md-12">
        				{/* <!-- Header Contetnt --> */}
        				<div class="content-block">
        					<h1>Buy / Sell Near You </h1>
        					<p>Join the millions who buy and sell from each other <br /> everyday in local communities around the world</p>
        					<div class="short-popular-category-list text-center">
        						<h2>Popular Category</h2>
        						<ul class="list-inline">
        							<li class="list-inline-item">
        								<a href="category.html"><i class="fa fa-bed"></i> Hotel</a></li>
        							<li class="list-inline-item">
        								<a href="category.html"><i class="fa fa-grav"></i> Fitness</a>
        							</li>
        							<li class="list-inline-item">
        								<a href="category.html"><i class="fa fa-car"></i> Cars</a>
        							</li>
        							<li class="list-inline-item">
        								<a href="category.html"><i class="fa fa-cutlery"></i> Restaurants</a>
        							</li>
        							<li class="list-inline-item">
        								<a href="category.html"><i class="fa fa-coffee"></i> Cafe</a>
        							</li>
        						</ul>
        					</div>
            
        				</div>
        				{/* <!-- Advance Search --> */}
        				<div class="advance-search">
        					<div class="container">
        						<div class="row justify-content-center">
        							<div class="col-lg-12 col-md-12 align-content-center">
        								<form>
        									<div class="form-row">
        										<div class="form-group col-md-4">
        											<input type="text" class="form-control my-2 my-lg-1" id="inputtext4" placeholder="What are you looking for" />
        										</div>
        										<div class="form-group col-md-3">
        											<select class="w-100 form-control mt-lg-1 mt-md-2">
        												<option>Category</option>
        												<option value="1">Top rated</option>
        												<option value="2">Lowest Price</option>
        												<option value="4">Highest Price</option>
        											</select>
        										</div>
        										<div class="form-group col-md-3">
        											<input type="text" class="form-control my-2 my-lg-1" id="inputLocation4" placeholder="Location" />
        										</div>
        										<div class="form-group col-md-2 align-self-center">
        											<button type="submit" class="btn btn-primary">Search Now</button>
        										</div>
        									</div>
        								</form>
        							</div>
        						</div>
        					</div>
        				</div>
            
        			</div>
        		</div>
        	</div>
        	{/* <!-- Container End --> */}
        </section>
    )
}


export default Hero