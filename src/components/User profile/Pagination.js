import React from 'react'
                
function Pagination() {
    return(
        <section class="dashboard section">
			<div class="container">
    			<div class="row">
					<div class="col-md-10 offset-md-1 col-lg-8 offset-lg-0">
						<div class="pagination justify-content-center">
							<nav aria-label="Page navigation example">
								<ul class="pagination">
									<li class="page-item">
										<a class="page-link" href="#" aria-label="Previous">
											<span aria-hidden="true">&laquo;</span>
											<span class="sr-only"> Previous</span>
										</a>
									</li>
									<li class="page-item"><a class="page-link" href="#">1</a></li>
									<li class="page-item active"><a class="page-link" href="#">2</a></li>
									<li class="page-item"><a class="page-link" href="#">3</a></li>
									<li class="page-item">
										<a class="page-link" href="#" aria-label="Next">
											<span >Next </span>
											<span aria-hidden="true">&raquo;</span>
										</a>
									</li>
								</ul>
							</nav>
						</div>
						
					</div>
				</div>
			</div>
		</section>
    )
}

export default Pagination;